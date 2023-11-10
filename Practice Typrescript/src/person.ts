

class Person{ 

    name: string;
    age: number;
    constructor(name: string, age:number){ 
        this.name = name; 
        this.age = age; 
    }

    hello(){ 
        console.log("hello, my name is" + this.name + "and my I am  " + this.age + "years old");
    }
}

export default Person

