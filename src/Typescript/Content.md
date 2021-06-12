# Typescript

## How to set up basic project

[Typescript compiling vs code](https://code.visualstudio.com/docs/typescript/typescript-compiling)

## Typescript compiler

[Github compiler](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)  
 Trivia

## d.ts files

[Writing Declaration Files for @types](https://devblogs.microsoft.com/typescript/writing-dts-files-for-types/)

> As a recap of that previous blog post, if you’re using an npm package named foo-bar and it doesn’t ship any .d.ts files, you can just run

        npm install -S @types/foo-bar

<hr />

[What are .d.ts](https://dev.to/mxkvl/what-are-type-declaration-files-in-typescript-53dd)

       Usually, you don't write types in .d.ts but in .ts files. However, .d.ts files are used in projects that are packages or libraries and are originally written in JavaScript. If you have JavaScript library and you have to add an ability to use your library in TypeScript projects, so you need to create .d.ts files. Another case is when you write your library in TypeScript but you ship it in compiled JavaScript code. In that case, you can automatically generate Type Declarations based on your TypeScript source code by using the TypeScript compiler (tsc).

[Cool article about .d.ts](https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43)

       We can write our own TypeScript Declaration files or have them produced from the compilation of TypeScript files (.ts) by setting declaration compiler-option to true in the tsconfig.json file (or using--declaration flag with the tsc command).

       The reason we need to add declare keyword while declaring a namespace is that the declaration files (.d.ts) can only contain types and not values. Since namespace is a value, we can’t declare it inside a declaration file but we can write an abient declaration of it that contains only types.

[Reference declaration TS Handbook](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-)

[Connection between .ts and .d.ts files](https://stackoverflow.com/questions/21247278/about-d-ts-in-typescript)

<hr />

## Notes

- Enums technically do not exist in .d.ts

## TODO

- Create .d.ts files by setting proper flag in tsconfig
