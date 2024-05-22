For context:
- https://github.com/saghul/txiki.js/discussions/514
- https://github.com/KaruroChori/txiki.js/tree/module-manager

This repo provides a reference for the structure embeddable modules must have to be properly imported in txiki.js.  
I would like to stress there must be only one `js` file and a single `d.ts` type definition. Names are fixed as well.  
If you need more flexibility you need a build step to bundle/minify/transpile your js code.  
Also, `module.h`, it cannot be changed.  

`[module]` in filenames is always replaced with the module name. The same for `__MODULE__` in the source files.
