"use strict";
let greet;
greet = () => {
    console.log('Hello user');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 25);
