/**
 *
 * 일반적인 자바스크립트의 객체 리터럴은 다음과 같이 이루어진다.
 *
 * const dog = {
 * 	name: 'Elton',
 * 	breed: "Australian Shepherd",
 * 	age: 0.5
 * }
 *
 * TypeScript에서는 객체를 설명하는 애너테이션을 만들 수 있다. 객체의 형테를 설명하는 것이다.
 *
 */

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

// let coordinate: { x: number; y: number } = { x: 34, y: 23 };
//
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: "Mick", last: "Jagger", age: 47 });
const singer = { first: "Mick", last: "Jagger", age: 47 };
printName(singer);

// type Point = {
//   x: number;
//   y: number;
// };
//
// let coordinate: Point = { x: 34, y: 23 };
//
// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }
//
// function doublePoint(point: Point): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

type MyNum = number;
let age: MyNum = 24421;

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12888,
  username: "cat",
};

console.log(user.id);
// user.id = 2312312;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 12,
};
