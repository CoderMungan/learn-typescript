// Unions
type User = number | string;

// Literal Types
type Name = "TypeScript" | "Django"

interface Proje<N, U>{
    name: N;
    user?: U;
}

let project: Proje<Name, User> = {
    name : "TypeScript",
    user : "CoderMungan"
}

// Array
let projectArr: Proje<Name, User>[] = [{
    name: "Django",
    user: "CoderMungan"
}]

// Functional
type Collection = (x: number, y: number) => number;

const collection: Collection = (x, y) => x + y;

const result = collection(5,10)

