export class BankCustomerCorrecteur {
  private name: string;
  private secretCode: string;

  constructor(name: string, secretCode: string) {
    this.name = name;
    this.secretCode = secretCode;
  }

  getName(): string {
    return this.name;
  }

  verifyPinInput(codeToCheck: string) {
    if (codeToCheck === this.secretCode) {
      return true;
    } else {
      return false;
    }
  }
}
