"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Person_1 = require("../Person");
const person1 = new Person_1.Person("Mary", 35);
const person2 = new Person_1.Person("John", 45);
assert_1.default.equal(typeof person1.tellMyAge, "function");
assert_1.default.equal(typeof person1.tellMyName, "function");
assert_1.default.equal(typeof person2.tellMyAge, "function");
assert_1.default.equal(typeof person2.tellMyName, "function");
assert_1.default.equal(person1.tellMyName(), "I am Mary");
assert_1.default.equal(person1.tellMyAge(), "I am 35 years old");
assert_1.default.equal(person2.tellMyName(), "I am John");
assert_1.default.equal(person2.tellMyAge(), "I am 45 years old");
