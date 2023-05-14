// classes
export class Invoice {
    readonly client: string;
    public amount: number;
    private details: string;

    // constructor
   constructor(c:string,d:string,a:number) {
    this.client = c;
    this.amount = a;
    this.details = d;
   }
    // method
    output() {
        console.log(`${this.client} owes Ksh. ${this.amount} on ${this.details}`);
    }
}

