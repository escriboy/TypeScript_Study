"use strict";
let age = 21;
age = 23;
age = "24";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.112 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("my age");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
calculateTax(45, 0.07);
calculateTax("$45", 0.07);
const nums = [];
const stuff = ["asd", 12];
const stuff2 = [1, 2, 3, "sdf"];
let zero = 0;
// zero = 2;
const giveAnswer = (answer) => {
    return `The answer is ${answer}.`;
};
let mood = "Happy";
mood = "Sad";
let today = "Mon";
