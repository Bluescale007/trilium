# Trilium Notes

![GitHub Sponsors](https://img.shields.io/github/sponsors/eliandoran) ![Docker Pulls](https://img.shields.io/docker/pulls/triliumnext/notes) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/triliumnext/notes/total)

[English](./README.md) | [Chinese](./README-ZH_CN.md) | [Russian](./README.ru.md) | [Japanese](./README.ja.md) | [Italian](./README.it.md) | [Spanish](./README.es.md)

Trilium Notes is an open-source, cross-platform hierarchical note taking application with focus on building large personal knowledge bases.

See [screenshots](https://triliumnext.github.io/Docs/Wiki/screenshot-tour) for quick overview:

<a href="https://triliumnext.github.io/Docs/Wiki/screenshot-tour"><img src="https://github.com/TriliumNext/Docs/blob/main/Wiki/images/screenshot.png?raw=true" alt="Trilium Screenshot" width="1000"></a>

## ⚠️ Why TriliumNext?

[The original Trilium project is in maintenance mode](https://github.com/zadam/trilium/issues/4620)

### Migrating from Trilium?

There are no special migration steps to migrate from a zadam/Trilium instance to a TriliumNext/Notes instance. Just upgrade your Trilium instance to the latest version and [install TriliumNext/Notes as usual](#-installation)

Versions up to and including [v0.90.4](https://github.com/TriliumNext/Notes/releases/tag/v0.90.4) are compatible with the latest zadam/trilium version of [v0.63.7](https://github.com/zadam/trilium/releases/tag/v0.63.7). Any later versions of TriliumNext have their sync versions incremented.

## 💬 Discuss with us

Feel free to join our official conversations. We would love to hear what features, suggestions, or issues you may have!

- [Matrix](https://matrix.to/#/#triliumnext:matrix.org) (For synchronous discussions)
  - The `General` Matrix room is also bridged to [XMPP](xmpp:discuss@trilium.thisgreat.party?join)
- [Github Discussions](https://github.com/TriliumNext/Notes/discussions) (For Asynchronous discussions)
- [Wiki](https://triliumnext.github.io/Docs/) (For common how-to questions and user guides)

## 🎁 Features

* Notes can be arranged into arbitrarily deep tree. Single note can be placed into multiple places in the tree (see [cloning](https://triliumnext.github.io/Docs/Wiki/cloning-notes))
* Rich WYSIWYG note editing including e.g. tables, images and [math](https://triliumnext.github.io/Docs/Wiki/text-notes) with markdown [autoformat](https://triliumnext.github.io/Docs/Wiki/text-notes#autoformat)
* Support for editing [notes with source code](https://triliumnext.github.io/Docs/Wiki/code-notes), including syntax highlighting
* Fast and easy [navigation between notes](https://triliumnext.github.io/Docs/Wiki/note-navigation), full text search and [note hoisting](https://triliumnext.github.io/Docs/Wiki/note-hoisting)
* Seamless [note versioning](https://triliumnext.github.io/Docs/Wiki/note-revisions)
* Note [attributes](https://triliumnext.github.io/Docs/Wiki/attributes) can be used for note organization, querying and advanced [scripting](https://triliumnext.github.io/Docs/Wiki/scripts)
* Direct OpenID and TOTP integration for more secure login
* [Synchronization](https://triliumnext.github.io/Docs/Wiki/synchronization) with self-hosted sync server
  * there's a [3rd party service for hosting synchronisation server](https://trilium.cc/paid-hosting)
* [Sharing](https://triliumnext.github.io/Docs/Wiki/sharing) (publishing) notes to public internet
* Strong [note encryption](https://triliumnext.github.io/Docs/Wiki/protected-notes) with per-note granularity
* Sketching diagrams with built-in Excalidraw (note type "canvas")
* [Relation maps](https://triliumnext.github.io/Docs/Wiki/relation-map) and [link maps](https://triliumnext.github.io/Docs/Wiki/link-map) for visualizing notes and their relations
* [Scripting](https://triliumnext.github.io/Docs/Wiki/scripts) - see [Advanced showcases](https://triliumnext.github.io/Docs/Wiki/advanced-showcases)
* [REST API](https://triliumnext.github.io/Docs/Wiki/etapi) for automation
* Scales well in both usability and performance upwards of 100 000 notes
* Touch optimized [mobile frontend](https://triliumnext.github.io/Docs/Wiki/mobile-frontend) for smartphones and tablets
* [Night theme](https://triliumnext.github.io/Docs/Wiki/themes)
* [Evernote](https://triliumnext.github.io/Docs/Wiki/evernote-import) and [Markdown import & export](https://triliumnext.github.io/Docs/Wiki/markdown)
* [Web Clipper](https://triliumnext.github.io/Docs/Wiki/web-clipper) for easy saving of web content

✨ Check out the following third-party resources/communities for more TriliumNext related goodies:

- [awesome-trilium](https://github.com/Nriver/awesome-trilium) for 3rd party themes, scripts, plugins and more.
- [TriliumRocks!](https://trilium.rocks/) for tutorials, guides, and much more.

## 🏗 Installation

### Desktop

To use TriliumNext on your desktop machine (Linux, MacOS, and Windows) you have a few options:

* Download the binary release for your platform from the [latest release page](https://github.com/TriliumNext/Notes/releases/latest), unzip the package and run the ```trilium``` executable.
* Access TriliumNext via the web interface of a server installation (see below)
    * Currently only the latest versions of Chrome & Firefox are supported (and tested).
* (Coming Soon) TriliumNext will also be provided as a Flatpak

#### MacOS
Currently when running TriliumNext/Notes on MacOS, you may get the following error:
> Apple could not verify "Trilium Notes" is free of malware and may harm your Mac or compromise your privacy.

You will need to run the command on your shell to resolve the error (documented [here](https://github.com/TriliumNext/Notes/issues/329#issuecomment-2287164137)):

```bash
xattr -c "/path/to/Trilium Next.app"
```

### Mobile

To use TriliumNext on a mobile device, you can use a mobile web browser to access the mobile interface of a server installation (see below).

If you prefer a native Android app, you can use [TriliumDroid](https://apt.izzysoft.de/fdroid/index/apk/eu.fliegendewurst.triliumdroid). Report bugs and missing features at [their repository](https://github.com/FliegendeWurst/TriliumDroid).

See issue https://github.com/TriliumNext/Notes/issues/72 for more information on mobile app support.

### Server

To install TriliumNext on your own server (including via Docker from [Dockerhub](https://hub.docker.com/r/triliumnext/notes)) follow [the server installation docs](https://triliumnext.github.io/Docs/Wiki/server-installation).

## 📝 Documentation

[See wiki for complete list of documentation pages.](https://triliumnext.github.io/Docs)

You can also read [Patterns of personal knowledge base](https://triliumnext.github.io/Docs/Wiki/patterns-of-personal-knowledge) to get some inspiration on how you might use TriliumNext.

## 💻 Contribute

### Code

```shell
git clone https://github.com/TriliumNext/Notes.git
cd Notes
npm install
npm run server:start
```

For more details, see the [development docs](https://github.com/TriliumNext/Notes/blob/develop/docs/Developer%20Guide/Developer%20Guide/Building%20and%20deployment/Running%20a%20development%20build.md).

### Documentation

See the [documentation guide](https://github.com/TriliumNext/Notes/blob/develop/docs/Developer%20Guide/Developer%20Guide/Documentation.md) for details.

## 👏 Shoutouts

* [CKEditor 5](https://github.com/ckeditor/ckeditor5) - best WYSIWYG editor on the market, very interactive and listening team
* [FancyTree](https://github.com/mar10/fancytree) - very feature rich tree library without real competition. Trilium Notes would not be the same without it.
* [CodeMirror](https://github.com/codemirror/CodeMirror) - code editor with support for huge amount of languages
* [jsPlumb](https://github.com/jsplumb/jsplumb) - visual connectivity library without competition. Used in [relation maps](https://triliumnext.github.io/Docs/Wiki/relation-map.html) and [link maps](https://triliumnext.github.io/Docs/Wiki/note-map.html#link-map)

## 🤝 Support

Support for the TriliumNext organization will be possible in the near future. For now, you can:
- Support continued development on TriliumNext by supporting our developers: [eliandoran](https://github.com/sponsors/eliandoran) (See the [repository insights]([developers]([url](https://github.com/TriliumNext/Notes/graphs/contributors))) for a full list)
- Show a token of gratitude to the original Trilium developer ([zadam](https://github.com/sponsors/zadam)) via [PayPal](https://paypal.me/za4am) or Bitcoin (bitcoin:bc1qv3svjn40v89mnkre5vyvs2xw6y8phaltl385d2).


## 🔑 License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
