"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankCustomerCorrecteur = void 0;
class BankCustomerCorrecteur {
    constructor(name, secretCode) {
        this.name = name;
        this.secretCode = secretCode;
    }
    getName() {
        return this.name;
    }
    verifyPinInput(codeToCheck) {
        if (codeToCheck === this.secretCode) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.BankCustomerCorrecteur = BankCustomerCorrecteur;
