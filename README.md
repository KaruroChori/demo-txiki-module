For context:

- https://github.com/saghul/txiki.js/discussions/514
- https://github.com/KaruroChori/txiki.js/tree/module-manager

This repo provides a reference for the structure embeddable modules must have to be properly imported in txiki.js.  
Artefacts are generated in `dist`.

`[module]` in filenames is always replaced with the module name. The same for `__MODULE__` in the source files.

Optional folders `tests`, `examples` & `benchmarks` to integrate those in the final txiki distribution.

## Development

For development [meson]() is used as a build system to compile and run standalone tests, so that you don't need txiki for that.  
JS tests in `/test/`should be used else to evaluate the module together with the runtime in the final distribution, but they are to be run from the "txiki side".  
Please, place any development-specific file under `src/dev`.
