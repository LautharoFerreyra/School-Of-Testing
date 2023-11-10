"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const person1 = new person_1.default("pepito", 25);
const person2 = new person_1.default("paolo", 27);
console.log(person1.name);
person2.hello();
