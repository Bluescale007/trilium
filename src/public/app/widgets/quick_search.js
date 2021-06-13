import BasicWidget from "./basic_widget.js";
import server from "../services/server.js";
import linkService from "../services/link.js";
import dateNotesService from "../services/date_notes.js";
import froca from "../services/froca.js";
import utils from "../services/utils.js";
import appContext from "../services/app_context.js";

const TPL = `
<div class="quick-search input-group input-group-sm">
  <style>
    .quick-search {
        padding: 10px 10px 10px 0px;
        height: 50px;
    }
    
    .quick-search button, .quick-search input {
        border: 0;
        font-size: 100% !important;
    }
  
    .quick-search .dropdown-menu {
        max-height: 600px;
        max-width: 400px;
        overflow-y: auto;
        overflow-x: hidden;
        text-overflow: ellipsis;
        box-shadow: -30px 50px 93px -50px black;
    }
  </style>
  
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary search-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="bx bx-search"></span>
    </button>
    <div class="dropdown-menu dropdown-menu-right"></div>
  </div>
  <input type="text" class="form-control form-control-sm search-string" placeholder="Quick search">
  </div>
</div>`;

const MAX_DISPLAYED_NOTES = 15;

export default class QuickSearchWidget extends BasicWidget {
    doRender() {
        this.$widget = $(TPL);

        this.$searchString = this.$widget.find('.search-string');
        this.$dropdownMenu = this.$widget.find('.dropdown-menu');
        this.$dropdownToggle = this.$widget.find('.search-button');
        this.$dropdownToggle.dropdown();

        this.$widget.find('.input-group-append').on('shown.bs.dropdown', () => this.search());

        utils.bindElShortcut(this.$searchString, 'return', () => {
            if (this.$dropdownMenu.is(":visible")) {
                this.search(); // just update already visible dropdown
            } else {
                this.$dropdownToggle.dropdown('show');
            }

            this.$searchString.focus();
        });

        utils.bindElShortcut(this.$searchString, 'down', () => {
            this.$dropdownMenu.find('.dropdown-item:first').focus();
        });

        utils.bindElShortcut(this.$searchString, 'esc', () => {
            this.$dropdownToggle.dropdown('hide');
        });

        return this.$widget;
    }

    async search() {
        const searchString = this.$searchString.val().trim();

        if (!searchString) {
            this.$dropdownToggle.dropdown("hide");
            return;
        }

        this.$dropdownMenu.empty();
        this.$dropdownMenu.append('<span class="dropdown-item disabled"><span class="bx bx-loader bx-spin"></span> Searching ...</span>');

        const resultNoteIds = await server.get('quick-search/' + encodeURIComponent(searchString));

        const displayedNoteIds = resultNoteIds.slice(0, Math.min(MAX_DISPLAYED_NOTES, resultNoteIds.length));

        this.$dropdownMenu.empty();

        if (displayedNoteIds.length === 0) {
            this.$dropdownMenu.append('<span class="dropdown-item disabled">No results found</span>');
        }

        for (const note of await froca.getNotes(displayedNoteIds)) {
            const $link = await linkService.createNoteLink(note.noteId, {showNotePath: true});
            $link.addClass('dropdown-item');
            $link.attr("tabIndex", "0");
            $link.on('click', e => {
                this.$dropdownToggle.dropdown("hide");

                if (!e.target || e.target.nodeName !== 'A') {
                    // click on the link is handled by link handling but we want the whole item clickable
                    appContext.tabManager.getActiveContext().setNote(note.noteId);
                }
            });
            utils.bindElShortcut($link, 'return', () => {
                this.$dropdownToggle.dropdown("hide");

                appContext.tabManager.getActiveContext().setNote(note.noteId);
            });

            this.$dropdownMenu.append($link);
        }

        if (resultNoteIds.length > MAX_DISPLAYED_NOTES) {
            this.$dropdownMenu.append(`<span class="dropdown-item disabled">... and ${resultNoteIds.length - MAX_DISPLAYED_NOTES} more results.</span>`);
        }

        const $showInFullButton = $('<a class="dropdown-item" tabindex="0">')
            .append($('<button class="btn btn-sm">Show in full search</button>'));

        this.$dropdownMenu.append($showInFullButton);

        $showInFullButton.on('click', () => this.showInFullSearch());

        utils.bindElShortcut($showInFullButton, 'return', () => this.showInFullSearch());

        utils.bindElShortcut(this.$dropdownMenu.find('.dropdown-item:first'), 'up', () => this.$searchString.focus());

        this.$dropdownToggle.dropdown('update');
    }

    async showInFullSearch() {
        const searchNote = await dateNotesService.createSearchNote({searchString: this.$searchString.val()});

        await appContext.tabManager.getActiveContext().setNote(searchNote.noteId);
    }

    quickSearchEvent() {
        this.$searchString.focus();
    }
}
