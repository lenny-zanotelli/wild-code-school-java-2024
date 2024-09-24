"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankCustomerCorrecteur_1 = require("../BankCustomerCorrecteur");
// Tests
const customer = new BankCustomerCorrecteur_1.BankCustomerCorrecteur("John Doe", "3579");
assert_1.default.equal(typeof customer.getName, "function");
assert_1.default.equal(typeof customer.verifyPinInput, "function");
assert_1.default.equal(customer.getName(), "John Doe");
assert_1.default.ok(customer.verifyPinInput("3579"));
