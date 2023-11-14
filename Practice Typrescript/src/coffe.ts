
export function orderCoffe():Promise<string>{ //promise
    return new Promise((resolve) => { //new promise
        setTimeout(()=>{    //arrow function
            resolve("your coffe is ready");
        }, 3000);
    })
}

export function readBook(): Promise<string> { //promise
    return new Promise((resolve) => { //new promise
        setTimeout(() => {    //arrow function
            resolve("you finished your book");
        }, 2000);
    });
}

