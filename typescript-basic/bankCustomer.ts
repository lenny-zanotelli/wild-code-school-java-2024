export class BankCustomer {
  private name: string;
  private input: string;

  constructor(name: string, input: string) {
    this.name = name;
    this.input = input;
  }
  public getName() {
    return this.name;
  }
  public verifyPinInput(input: string): boolean {
    return this.input === input;
  }
}

const customer = new BankCustomer("John Doe", "3579");
console.log(customer.verifyPinInput("444"));
