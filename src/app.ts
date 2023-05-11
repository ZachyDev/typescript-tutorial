// classes
class Invoice {

    // constructor
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    // method
    output() {
        console.log(`${this.client} owes Ksh. ${this.amount} on ${this.details}`);
    }
}
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