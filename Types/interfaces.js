"use strict";
// // type Point = {
// //   x: number;
// //   y: number;
// // };
// //
// // const pt: Point = { x: 213, y: 100 };
//
// interface Point {
//   x: number;
//   y: number;
// }
//
// const pt: Point = { x: 123, y: 1234 };
//
// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nickname?: string;
//   sayHi: () => string;
// }
//
// const choi: Person = {
//   first: "youngmin",
//   last: "choi",
//   id: 21837,
//   sayHi: () => {
//     return "Hello!";
//   },
// };
//
// choi.first = "sdfsdf";
// // choi.id = 211;
//
// interface Product {
//   name: string;
//   price: number;
//   applyDiscount(discount: number): number;
// }
//
// const shoes: Product = {
//   name: "Blue Suede Shoes",
//   price: 100,
//   applyDiscount(amount: number) {
//     const newPrice = this.price * (1 - amount);
//     this.price = newPrice;
//     return this.price;
//   },
// };
//
// console.log(shoes.applyDiscount(0.4));
//
// interface Dog {
//   name: string;
//   age: number;
// }
//
// interface Dog {
//   breed: string;
//   bark(): string;
// }
//
// const elton: Dog = {
//   name: "elton",
//   age: 0.5,
//   breed: "Shepherd",
//   bark() {
//     return "woof";
//   },
// };
//
// interface ServiceDog extends Dog {
//   job: "drug sniffer" | "bomb" | "guide dog";
// }
//
// const chewy: ServiceDog = {
//   name: "chewy",
//   age: 4.5,
//   breed: "Lab",
//   bark() {
//     return "Bark!";
//   },
//   job: "guide dog",
// };
const pierre = {
    name: "Pierre",
    id: 123122,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "PYTHON"],
};
