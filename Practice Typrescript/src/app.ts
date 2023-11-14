// import Person from "./person";

// const person1 = new Person("pepito", 25); 
// const person2 = new Person ("paolo", 27);

// console.log(person1.name);
// person2.hello();

import { orderCoffe } from "./Coffe";

async function Coffe(): Promise<void> {
    console.log("order coffe...");
    const message = await orderCoffe();

    console.log(message);   
}

import { readBook } from "./Coffe";

async function Book(): Promise<void> {
    console.log("finish read yout book...");
    const message = await orderCoffe();

    console.log(message);   
}
