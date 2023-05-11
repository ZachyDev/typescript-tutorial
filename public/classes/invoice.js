// classes
export class Invoice {
    // constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method
    output() {
        console.log(`${this.client} owes Ksh. ${this.amount} on ${this.details}`);
    }
}
