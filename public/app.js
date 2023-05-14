const personOne = {
    name: "John",
    amount: 1000,
    speak(msg) {
        console.log(msg);
    },
    spend(b) {
        console.log(b);
        return b;
    }
};
console.log(personOne);
import { Invoice } from './classes/invoice.js';
// instances of te object
let invOne = new Invoice('Moseti', 'payment for electronics', 100000);
let invTwo = new Invoice('Zachary', 'payment for furniture', 50000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// loop through the invoices
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.output());
});
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
