"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log("hello, my name is" + this.name + "and my I am  " + this.age + "years old");
    }
}
exports.default = Person;
