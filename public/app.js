"use strict";
// classes
class Invoice {
    // constructor
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // method
    output() {
        console.log(`Client: ${this.client} \n Details: ${this.details} \n Amount: ${this.amount}`);
    }
}
// instances of te object
let invOne = new Invoice('Moseti', 'payment for electronics', 100000);
let invTwo = new Invoice('Zachary', 'payment for furniture', 50000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
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
