let age: number | string = 21;

age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.112 };

function printAge(age: number | string) {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("my age");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

calculateTax(45, 0.07);
calculateTax("$45", 0.07);

const nums: number[] = [];
const stuff: (number | string)[] = ["asd", 12];
const stuff2: number[] | string[] = [1, 2, 3, "sdf"];

let zero: 0 = 0;
// zero = 2;

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}.`;
};

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

let today: DayOfWeek = "Mon";
