# Content

## Typescript

- [ ] How to set up basic project

  > Visual Studio Code includes TypeScript language support but does not include the TypeScript compiler, tsc . You will need to install the TypeScript compiler either globally or in your workspace to transpile TypeScript source code to JavaScript

      npx tsc --init

- [ ] Typescript compiler  
       More like a trivia

- [ ] d.ts files  
       https://devblogs.microsoft.com/typescript/writing-dts-files-for-types/

  > As a recap of that previous blog post, if you’re using an npm package named foo-bar and it doesn’t ship any .d.ts files, you can just run

      npm install -S @types/foo-bar

We can write our own TypeScript Declaration files or have them produced from the compilation of TypeScript files (.ts) by setting declaration compiler-option to true in the tsconfig.json file (or using--declaration flag with the tsc command).

https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43

💡 The reason we need to add declare keyword while declaring a namespace is that the declaration files (.d.ts) can only contain types and not values. Since namespace is a value, we can’t declare it inside a declaration file but we can write an abient declaration of it that contains only types.

https://stackoverflow.com/questions/21247278/about-d-ts-in-typescript
