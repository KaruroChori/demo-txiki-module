import { $ } from 'bun'
import module from '../module.json'
import { program } from 'commander';

program
    .name('runtime.ts')
    .description('Runtime builder to demo the library');

program.command('fast-clone')
    .description('Shallow clone the repo')
    .action(async () => {
        await $`rm -rf ./runtime`;
        await $`git clone --depth 1 --single-branch --branch stable-gluegunfw  https://github.com/KaruroChori/txiki.js ./runtime`;
        await Bun.write("./runtime/modules.json", JSON.stringify(module['module-deps'] ?? {}));
        await $`bun install`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
        await $`./extras-helper.mjs clone`
            .cwd(`${import.meta.dirname}/../runtime/`)
            .quiet();
    })


program.command('clone')
    .description('Shallow clone the repo')
    .action(async () => {
        await $`rm -rf ./runtime`;
        await $`git clone --recurse-submodules --shallow-submodules --depth 1 --single-branch --branch stable-gluegunfw  https://github.com/KaruroChori/txiki.js ./runtime`;
        await Bun.write("./runtime/modules.json", JSON.stringify(module['module-deps'] ?? {}));
        await $`bun install`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
        await $`./extras-helper.mjs clone`
            .cwd(`${import.meta.dirname}/../runtime/`)
            .quiet();
    })

program.command('docs')
    .description('Compile documentation')
    .action(async () => {
        await $`bun run api-docs`.cwd(`${import.meta.dirname}/../runtime/`).quiet();

    })

program.command('full')
    .description('Build the full runtime')
    .action(async () => {
        await $`make js`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
        await $`make all`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
    })

program.command('test')
    .description('Run tests on the runtime')
    .action(async () => {
        await Bun.write("./runtime/modules.json", JSON.stringify({ ...(module["module-deps"] ?? {}), [module['suggested-name'] ?? 'self']: "../dist" }));
        console.log('Compiling. The first time it will take a while...');
        await $`./extras-helper.mjs clone`
            .cwd(`${import.meta.dirname}/../runtime/`)
            .quiet();
        await $`make js`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
        await $`make all`.cwd(`${import.meta.dirname}/../runtime/`).quiet();
        await $`./build/tjs test ./tests/extras ?? 'self'}`.cwd(`${import.meta.dirname}/../runtime/`);
    })

await program.parseAsync();
