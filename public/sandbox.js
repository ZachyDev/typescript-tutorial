"use strict";
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('Zachy', 'Hello');
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let result = calc(20, 10, 'add');
console.log(result);
let student;
student = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
student('Zachary', 'Moseti');
let details = (county, role, age = 20) => {
    console.log(`${county}, ${role}, ${age}`);
};
details('Kisii', 'dev');
