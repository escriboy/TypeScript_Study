let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = false;
gameOver = "true";

// Type Inference
let tvShow = "The Glory";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie: string;

for (const movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
foundMovie = 1;
foundMovie();
