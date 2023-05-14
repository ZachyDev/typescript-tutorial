// classes
export class Invoice {
    // constructor
    constructor(c, d, a) {
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    // method
    output() {
        console.log(`${this.client} owes Ksh. ${this.amount} on ${this.details}`);
    }
}
