// example 1
let greet:(x:string,y:string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet('Zachy', 'Hello');

// example 2
let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}
let result = calc(20,10,'add');
console.log(result)

