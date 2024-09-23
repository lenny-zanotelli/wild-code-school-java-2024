import assert from "assert";
import { Person } from "../person";

const person1 = new Person("Mary", 35);
const person2 = new Person("John", 45);

assert.equal(typeof person1.tellMyAge, "function");
assert.equal(typeof person1.tellMyName, "function");
assert.equal(typeof person2.tellMyAge, "function");
assert.equal(typeof person2.tellMyName, "function");
assert.equal(person1.tellMyName(), "I am Mary");
assert.equal(person1.tellMyAge(), "I am 35 years old");
assert.equal(person2.tellMyName(), "I am John");
assert.equal(person2.tellMyAge(), "I am 45 years old");
