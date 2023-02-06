function square(num: number) {
  return num * num;
}

square(3);
// square("asd");
// square(true);

const encourageStudent = (name: string) => {
  return `Hey, ${name}, you,re doing Great!`;
};

encourageStudent("you");
// encourageStudent(85);

function greet(person: string) {
  return `Hi there, ${person}~`;
}

// greet(8);
greet("Amy");

function square2(num: number): number {
  num * num;
}

square2(2);

// function randomNumber(num: number) {
//   if (Math.random() < 0.5) {
//     return num.toString();
//   }
//   return num;
// }

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

function makeError(msg: string): never {
  return undefined;
  throw new Error(msg);
}

function endlessLoop(): never {
  while (true) {
    console.log("LOOP RUNNING!");
  }
}
