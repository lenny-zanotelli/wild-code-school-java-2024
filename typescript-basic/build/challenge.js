"use strict";
// challenge.ts
const prettyPrintWilder = (users) => {
    users.map((user) => {
        console.log(`${user.name} is ${user.age} years old`);
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", age: 34, birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
console.log(prettyPrintWilder(wilders));
