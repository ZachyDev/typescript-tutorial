"use strict";
const anchor = document.querySelector('a');
// if(anchor) {
//     console.log(anchor.href)
// }
let form = document.querySelector('.new-item-form');
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// listen to submit event 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
