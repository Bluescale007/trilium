@triliumnext/ckeditor5-footnotes
================================

This package was created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package.

## Table of contents

* [Developing the package](#developing-the-package)
* [Available scripts](#available-scripts)
  * [`start`](#start)
  * [`test`](#test)
  * [`lint`](#lint)
  * [`stylelint`](#stylelint)
  * [`build:dist`](#builddist)
  * [`translations:synchronize`](#translationssynchronize)
  * [`translations:validate`](#translationsvalidate)
  * [`ts:build` and `ts:clear`](#tsbuild-and-tsclear)
* [License](#license)

## Developing the package

To read about the CKEditor 5 Framework, visit the [CKEditor 5 Framework documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/index.html).

## Available scripts

NPM scripts are a convenient way to provide commands in a project. They are defined in the `package.json` file and shared with people contributing to the project. It ensures developers use the same command with the same options (flags).

All the scripts can be executed by running `npm run <script>`. Pre and post commands with matching names will be run for those as well.

The following scripts are available in the package.

### `start`

Starts an HTTP server with the live-reload mechanism that allows previewing and testing of plugins available in the package.

When the server starts, the default browser will open the developer sample. This can be disabled by passing the `--no-open` option to that command.

You can also define the language that will translate the created editor by specifying the `--language [LANG]` option. It defaults to `'en'`.

Examples:

```bash
# Starts the server and open the browser.
npm run start

# Disable auto-opening the browser.
npm run start -- --no-open

# Create the editor with the interface in German.
npm run start -- --language=de
```

### `test`

Allows executing unit tests for the package specified in the `tests/` directory. To check the code coverage, add the `--coverage` modifier. See other [CLI flags](https://vitest.dev/guide/cli.html) in Vitest.

Examples:

```bash
# Execute tests.
npm run test

# Generate code coverage report after each change in the sources.
npm run test -- --coverage
```

### `lint`

Runs ESLint, which analyzes the code (all `*.ts` files) to quickly find problems.

Examples:

```bash
# Execute eslint.
npm run lint
```

### `stylelint`

Similar to the `lint` task, stylelint analyzes the CSS code (`*.css` files in the `theme/` directory) in the package.

Examples:

```bash
# Execute stylelint.
npm run stylelint
```

### `build:dist`

Creates npm and browser builds of your plugin. These builds can be added to the editor by following the [Configuring CKEditor 5 features](https://ckeditor.com/docs/ckeditor5/latest/getting-started/setup/configuration.html) guide.

Examples:

```bash
# Builds the `npm` and browser files thats are ready to publish.
npm run build:dist
```

### `translations:synchronize`

Synchronizes translation messages (arguments of the `t()` function) by performing the following steps:

 * Collect all translation messages from the package by finding `t()` calls in source files.
 * Detect if translation context is valid, i.e. whether the provided values do not interfere with the values specified in the `@ckeditor/ckeditor5-core` package.
 * If there are no validation errors, update all translation files (`*.po` files) to be in sync with the context file:
   * unused translation entries are removed,
   * missing translation entries are added with empty string as the message translation,
   * missing translation files are created for languages that do not have own `*.po` file yet.

The task may end with an error if one of the following conditions is met:

* Found the `Unused context` error &ndash; entries specified in the `lang/contexts.json` file are not used in source files. They should be removed.
* Found the `Duplicated contex` error &ndash; some of the entries are duplicated. Consider removing them from the `lang/contexts.json` file, or rewriting them.
* Found the `Missing context` error &ndash; entries specified in source files are not described in the `lang/contexts.json` file. They should be added.

Examples:

```bash
npm run translations:synchronize
```

### `translations:validate`

Peforms only validation steps as described in [`translations:synchronize`](#translationssynchronize) script, but without modifying any files. It only checks the correctness of the context file against the `t()` function calls.

Examples:

```bash
npm run translations:validate
```

### `ts:build` and `ts:clear`

These scripts compile TypeScript and remove the compiled files. They are used in the aforementioned life cycle scripts, and there is no need to call them manually.

## License

The `@triliumnext/ckeditor5-footnotes` package is available under [MIT license](https://opensource.org/licenses/MIT).

However, it is the default license of packages created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package and can be changed.
