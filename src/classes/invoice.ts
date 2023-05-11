// classes
export class Invoice {

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
