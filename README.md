## What is this?

In short, a default template for how you might organize your new shiny [txiki](https://github.com/saghul/txiki.js) module.  
If you are porting a library to txiki, your main priority should be to preserve as much as possible of the original repo structure to simplify merging fixes and features from upstream; so concession over a clearner structure like the one presented in this repo might be desirable.

For context:

- https://github.com/KaruroChori/txiki-modules the main repo discussing how modules are used.
- https://github.com/saghul/txiki.js/discussions/514 the original discussion around this feature.
- https://github.com/KaruroChori/txiki.js/tree/module-manager the only txiki branch currently supporting modules.

You can find any missing feature or improvement set for future developments in the [todo list](./TODO.md)

### How to use this?

This demo module can be used to test this functionality in txiki. If you don't need to build it or make your own module, the rest of this document can be ignored.  
To use the demo module in your runtime, just add a key with the desired name (like `demo`) and as value the link to the artefact attached to each release, like [https://github.com/KaruroChori/demo-txiki-module/releases/download/v2.1.0/module.tar.gz](https://github.com/KaruroChori/demo-txiki-module/releases/download/v2.1.0/module.tar.gz).

## Required software

The repository is designed assuming a blend of C/C++ & TS. For pure JS/TS libraries the structure of the repo can be simplified considerably.  
You should have few tools already installed on your system:

- [bun](https://bun.sh/) as the JS runtime, in place of **node**. It works with TS, as packet manager and bundler, simplifying the build process for the module.
- [meson](https://mesonbuild.com/) and its related dependencies as part of the build system to test the module standalone (it can be skipped if you don't like testing your code)

## Repository structure

Artefacts are generated in `dist`.
The optional folders `tests`, `examples` & `benchmarks` are directly copied over to the final txiki module for distribution.

`scripts` contains helpers to prepare the module or compile a temporary runtime capable of running those tests which are not standalone.  
Its module deps are directly inherited from the `module.json` definition file.  
Both scripts are made available as part of the `package.json` scripts with typical parameters, but for more advanced usage you might want to check their CLI.

Finally, this repo comes with a github worlflow to generate the distributable module as part of a release process.

### Portability

There are few naming conventions to make the module portable:

- the substring `[module]` in filenames is always replaced with the target module name by the txiki module manager.
- the substring `__MODULE__` will also be replaced with the module name when appearing in the source file.

## Source

All source is in `./src/`

- `ts` for typescript code
- `native` for any `.h`, `.c` and `.cpp` file (only these extensions will be considered)
- `dev` for any code needed for the standalone testing.

Native must always contain a `module.cpp` and a `module.h` file. Even if not native code is needed those stubs are needed, and you can keep them as they are in this repo.  
The entry point for the TS bundler is configured to be `index.ts`, but it can be easily changed if needed.

`module.json` is the module declaration file. Every module must have one and should follow the latest schemas available @ [https://github.com/KaruroChori/txiki-modules](https://github.com/KaruroChori/txiki-modules)

## Adding dependencies

### Bundled deps

> [!TIP]
> Avoid build dependencies if you can. Any code in modules should be as much as possible standalone or based on other modules.

TBW

### TS/JS deps

> [!TIP]
> Because of some limitations of the tool `dts-bundle-generator`, the runtime must be built & entries for the location of the type definitions of those modules must be manually added to `types` in `tsconfig.json`

TBW

### Native deps

TBW

## Development

During development, **meson** is used as a build system to compile and run standalone tests over the native code, so that you don't need txiki for that.  
JS tests in `/test/`should be used else to evaluate the module together with the runtime in the final distribution, but they are to be run as part of the txiki testsuite after the debug runtime has been built.
Please, place any native development-specific file to support testing under `./src/dev`.
