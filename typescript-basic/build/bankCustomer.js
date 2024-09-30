"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCustomer = void 0;
class BankCustomer {
    constructor(name, input) {
        this.name = name;
        this.input = input;
    }
    getName() {
        return this.name;
    }
    verifyPinInput(input) {
        return this.input === input;
    }
}
exports.BankCustomer = BankCustomer;
const customer = new BankCustomer("John Doe", "3579");
console.log(customer.verifyPinInput("444"));
