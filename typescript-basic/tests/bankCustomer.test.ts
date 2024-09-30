import assert from "assert";
import { BankCustomerCorrecteur } from "../BankCustomerCorrecteur";
// Tests

const customer = new BankCustomerCorrecteur("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
