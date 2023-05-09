let greet: Function;

greet = () => {
    console.log('Hello user');
}


const add = (a:number,b:number,c:number|string = 10) => {
    console.log(a+b)
    console.log(c)
}

add(5,10,25);

let minus: Function;

minus = (b:number,c:number): number => {
    return b + c;
}
let result = minus(20,9);
