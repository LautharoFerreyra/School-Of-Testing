// import Person from "./person";

// const person1 = new Person("pepito", 25); 
// const person2 = new Person ("paolo", 27);

// console.log(person1.name);
// person2.hello();

import { orderCoffe } from "./coffe";

async function coffe(): Promise<void> {
    console.log("order coffe...");
    const message = await orderCoffe();

    console.log(message);   
}