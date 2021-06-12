// CONSTRUCTOR TYPE

// DEFAULT TYPE VALUE <T = {}>

// NEVER TYPE!

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
type StrType = "A" | "B" | "C";
const st: StrType = "B"; // intelisense
// show extending

// Non-null Assertion Operator (Postfix !)

// https://www.typescriptlang.org/docs/handbook/enums.html
// const enums, how does it look like after compilation
// number/string enums
// https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums

// https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/
const aaa = [1, 2, 3] as const;
aaa[2] = 10;

// keyof typeof

// keys extends something

const arr = ["abc", "bcd", "cde"] as const;
type arrType = typeof arr[number];

export {};
