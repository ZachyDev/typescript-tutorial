// interfaces
interface isPerson {
    name: string;
    amount: number;
    speak(a:string): void;
    spend(b:number): number;
}

const personOne: isPerson = {
    name: "John",
    amount: 1000,
    speak(msg: string){
        console.log(msg);
    },
    spend(b: number){
        console.log(b);
        return b;
    }
        
}
console.log(personOne)

import { Invoice } from './classes/invoice.js';

// instances of te object
let invOne =  new Invoice('Moseti', 'payment for electronics', 100000);
let invTwo =  new Invoice('Zachary', 'payment for furniture', 50000);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// loop through the invoices
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.output());
})


let form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLFormElement;

// listen to submit event 
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})