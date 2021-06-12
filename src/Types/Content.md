# Types

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## Primitives

## Arrays

```typescript
const list: number[];
const list: Array<number>;

const tuple: [string, number] = ["Hello", 10];
const typleElementType: typeof tuple[0] = "must be string";
```

## Any

## Unknown

- https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/
- https://stackoverflow.com/questions/51439843/unknown-vs-any
- https://basarat.gitbook.io/typescript/type-system/type-assertion example with "event as unknown as HTMLElement;"

## Index signature

## Construct Signatures

- https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures

## Infer types (let vs const)

- literal types

## Const assertions

- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions

## Function/Object types

## Union types

- Type guards

## Interface vs Type

## keyof

- https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

## typeof

- https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

## Enum

- Auto increment
- String enums
- To what it compiles (runtime)
- Const enums

## Indexed Access Types

- https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

```typescript
const arr = ["abc", "bcd", "cde"] as const;
type arrType = typeof arr[number];
```

## Mapped Types

- Raz chyba tego uzylem przy traversowaniu po obiektach
  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

## Generic Types

## As const

https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/

## Never type

## Interface to describe function

```typescript
interface IFormatter {
  (a: string): number;
}

const a: IFormatter = (a) => 5;
```
