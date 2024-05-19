For context:
- https://github.com/saghul/txiki.js/discussions/514
- https://github.com/KaruroChori/txiki.js/tree/module-manager

This repo provides a reference for the structure embeddable modules must have to be properly imported in txiki.js.  
I would like to stress there must be only one `c` file, one `js` file and a single `d.ts` type definition. Names are fixed as well.  
However these file can be generated in a more "developer friendly manner".  
You could easily have multiple c files, using typescript in place of js etc. What matters is that the final distributed tar has this structure.

