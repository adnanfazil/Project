'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// const [players1, players2] = game.players;
// console.log(players1, players2);


// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {odds : {team1, x: draw, team2}}= game;
// console.log(team1, draw, team2);

// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
//   for(let i=0; i<players.length; i++) {
//     console.log(players[i]);
//   }
// }

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const game = {
//   team1: 'Los Angeles Lakers',
//   team2: 'Golden State Warriors',
//   players: [
//     ['LeBron', 'Davis', 'Russell', 'Hachimura', 'Vanderbilt'],
//     ['Curry', 'Thompson', 'Wiggins', 'Green', 'Looney'],
//   ],
//   score: '112:108',
//   scored: ['Curry', 'Thompson', 'LeBron', 'Davis', 'Curry'],
//   date: 'Feb 25th, 2025',
//   odds: {
//     team1: 1.55,
//     x: 3.85,
//     team2: 2.75,
//   },
// };


// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [captain, ...fieldPlayers] = players1;
// console.log(captain, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const lakersPlayers = [...players1, 'Reaves', 'Vanderbilt'];
// console.log(lakersPlayers);

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// const printScores = function(...players) {
//   console.log(`${players.length} players scored points`);
//   for(let i=0; i<players.length; i++) {
//     console.log(players[i]);
//   }
// } 

// printScores('Lebron');

// const match = {
//   team1: 'Real Madrid',
//   team2: 'Barcelona',
//   players: [
//     ['Courtois', 'Carvajal', 'Alaba', 'Militao', 'Mendy', 'Modric', 'Kroos', 'Valverde', 'Vinicius', 'Benzema', 'Rodrygo'],
//     ['Ter Stegen', 'Araujo', 'Christensen', 'Kounde', 'Balde', 'De Jong', 'Pedri', 'Gavi', 'Raphinha', 'Lewandowski', 'Ferran Torres']
//   ],
//   odds: { team1: 2.1, draw: 3.3, team2: 1.8 }
// };

// const [players1, players2] = match.players;
// console.log(`Array 1: ${players1}`, `Array 2: ${players2}`);

// const [gk, ...fieldPlayers] = players1;
// console.log(`Goalkeeper: ${gk},  `, `Field Players: ${fieldPlayers}`);

// const allPlayers = [...players1, ...players2];
// console.log(`All players: ${allPlayers}`);

// const totalPlayers = [...players1, 'Brahim', 'Mendy', 'Rodrygo'];
// console.log(totalPlayers);

// const sensor1 = [22, 'error', 19, 25, 28, 21, 24];
// const sensor2 = [26, 18, 'error', 20, 23, 22, 27];

// const monitoringSystem = function(temps1, temps2) {
//   const temps = [...temps1, ...temps2];

//   let max = temps[0];
//   let min = temps[0];

//   for (let i=0;i<temps.length; i++) {
//     const curTemp = temps[i];

//     if(typeof curTemp !== 'number') continue;

//     if(curTemp > max) max = curTemp;
//     if(curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// console.log(monitoringSystem(sensor1, sensor2)); // Output: 28 - 18 = 10

// const workHours = [8, 6.5, 0, 9, "error", 7, 3.5, 0];


// let totalHours = 0;
// let avgDailyHours = 0;
// let mostHoursWorkedDay = workHours[0];
// let daysWorked = 0;
// let workedFullTime = false;

// for(let i=0; i<workHours.length; i++) {
//   const hour = workHours[i];
//   if(typeof(workHours[i]) !== 'error') {
//     continue;
//   }
//   const hours = workHours[i];
//   totalHours += hours;

//   avgDailyHours = totalHours/ workHours.length;

//   if(hours > mostHoursWorkedDay) {
//     mostHoursWorkedDay = hours;
//   }

//   if(hours > 0) {
//     daysWorked++;
//   }

//   if(totalHours >= 40) {
//     workedFullTime = true;
//     break;
//   }

  
// }

// const person = {
//   name: "Alice",
//   age: 30,
//   job: "Engineer",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA"
//   }
// }

// person.hobbies = ["reading", "painting", "swimming"];

// // console.log(person.name);
// // console.log(person.address.city);
// // console.log(person.hobbies[0]);

// for(let key in person) {
//   console.log(person[key]);
// }

// const book = {
//   title: "Harry Potter",
//   author: "J.K. Rowling",
//   pages: 500, 
//   chapters: [
//     {
//       title: "1",
//       pages: 10,
//       characters: ["Harry", "Ron", "Hermione"]
//     },
//     {
//       title: "2",
//       pages: 15,
//       characters: ["Dumbledore", "Snape"]
//     },
//     {
//       title: "3",
//       pages: 12,
//       characters: ["Hagrid", "Draco"]
//     }
//   ]
// };

// // for(let key in book.chapters) {
// //   console.log(`Chapter: ${book.chapters[key].title}, Pages: ${book.chapters[key].pages}, Character: ${book.chapters[key].characters}`);
// // }

// let longestChapter = book.chapters[0];
// for(let key in book.chapters) {
//   if(book.chapters[key].pages > longestChapter.pages) {
//     longestChapter = book.chapters[key];
//   }
 
// }

// console.log(longestChapter);

// let totalPages = 0;

// for(let key in book.chapters) {
//   totalPages += book.chapters[key].pages;
// }

// console.log(totalPages);



// for(let key in book.chapters) {
//   book.chapters[key].wordcount = book.chapters[key].pages * 250;
// }

// console.log(book);

// const library = [
//   {
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     pages: 500,
//     chapters: [
//       { title: "1", pages: 10, characters: ["Harry", "Ron", "Hermione"] },
//       { title: "2", pages: 15, characters: ["Dumbledore", "Snape"] },
//       { title: "3", pages: 12, characters: ["Hagrid", "Draco"] }
//     ]
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     pages: 310,
//     chapters: [
//       { title: "1", pages: 8, characters: ["Bilbo", "Gandalf", "Thorin"] },
//       { title: "2", pages: 14, characters: ["Gollum", "Bilbo"] },
//       { title: "3", pages: 18, characters: ["Elrond", "Dwarves"] }
//     ]
//   },
//   {
//     title: "Percy Jackson",
//     author: "Rick Riordan",
//     pages: 400,
//     chapters: [
//       { title: "1", pages: 12, characters: ["Percy", "Grover", "Annabeth"] },
//       { title: "2", pages: 16, characters: ["Chiron", "Luke"] },
//       { title: "3", pages: 14, characters: ["Poseidon", "Percy"] }
//     ]
//   }
// ];

// for(let key in library) {
//   console.log(library[key].title);
//   console.log(library[key].pages);
// }

// // Find the book with the most pages.

// let mostPages = library[0];

// for(let key in library) {
//   if(library[key].pages > mostPages){
//     mostPages = library[key].pages;
//   }
// }
// console.log(mostPages);

// //Calculate the total number of pages in the library.

// let totalPages = 0;

// for (let key in library) {
//   totalPages += library[key].pages;
// }

// console.log(`Total Pages in the library are: ${totalPages}`);


// for(let key in library) {
//   library[key].wordcount = library[key].pages * 250;
//   console.log(`Word count: ${library[key].wordcount}`);
// }

// //Find the book with the most characters across all chapters.

// let maxCharactersBook = null;
// let mostCharacters = 0;

// for (let key in library) {
//   let totalCharacters = 0;

//   for (let key2 in library[key].chapters) {
//     totalCharacters += library[key].chapters[key2].characters.length;
//   }

//   if (totalCharacters > mostCharacters) {
//     mostCharacters = totalCharacters;
//     maxCharactersBook = library[key]; // Update book with most characters
//   }
// }

// console.log(`Book with most characters: ${maxCharactersBook.title}`, mostCharacters);

// const directors = [
//   {
//     name: "Christopher Nolan",
//     movies: [
//       { title: "Inception", year: 2010 },
//       { title: "Interstellar", year: 2014 },
//       { title: "Dunkirk", year: 2017 }
//     ]
//   },
//   {
//     name: "Steven Spielberg",
//     movies: [
//       { title: "Jurassic Park", year: 1993 },
//       { title: "E.T.", year: 1982 },
//       { title: "Jaws", year: 1975 },
//       { title: "Indiana Jones", year: 1981 }
//     ]
//   },
//   {
//     name: "Quentin Tarantino",
//     movies: [
//       { title: "Pulp Fiction", year: 1994 },
//       { title: "Kill Bill", year: 2003 }
//     ]
//   }
// ];

// console.log(directors[1].movies.length);

// let directorName = null;
// let directorMovies = 0;

// for(let key in directors) {
//   if(directors[key].movies.length > directorMovies) {
//     directorName = directors[key].name;
//     directorMovies = directors[key].movies.length;
//   }
// }

// console.log(`${directorName} has directed ${directorMovies} movies`);


// const authors = [
//   {
//     name: "George Orwell",
//     books: [
//       { title: "1984", pages: 328 },
//       { title: "Animal Farm", pages: 112 }
//     ]
//   },
//   {
//     name: "J.K. Rowling",
//     books: [
//       { title: "Harry Potter and the Sorcerer's Stone", pages: 309 },
//       { title: "Harry Potter and the Chamber of Secrets", pages: 341 },
//       { title: "Harry Potter and the Prisoner of Azkaban", pages: 435 }
//     ]
//   },
//   {
//     name: "J.R.R. Tolkien",
//     books: [
//       { title: "The Hobbit", pages: 310 },
//       { title: "The Lord of the Rings", pages: 1178 }
//     ]
//   }
// ];

// let mostBooks = 0;
// let mostBooksAuthor = null;


// for(let key in authors) {
//   if(authors[key].books.length > mostBooks) {
//     mostBooks = authors[key].books.length;
//     mostBooksAuthor = authors[key].name;
//   }

 
// }

// //console.log(`${mostBooksAuthor} has written ${mostBooks} books`);


// let authorHighestBook = null;
// let longestBook = null;
// let totalPages = 0;

// for(let key2 in authors) {
//   for(let key3 in authors[key2].books) {
//     if(authors[key2].books[key3].pages > longestBook) {
//       longestBook = authors[key2].books[key3].pages;
//       authorHighestBook = authors[key2].name;
//     }
//   }
// }

// //console.log(`${authorHighestBook} has the longest book with ${longestBook} pages`);





// for (let key4 in authors) {
//   let authorName = null;
//   let totalPagesPerAuthor = 0;
//   for(let key5 in authors[key4].books) {
//     totalPagesPerAuthor += authors[key4].books[key5].pages;
//     authorName = authors[key4].name;
//   }
//   console.log(`${authorName} has written ${totalPagesPerAuthor} pages`);
// }

const manCity = {
  "Erling Haaland": {
    position: "Striker",
    matches: [
      { match: "vs Liverpool", rating: 9 },
      { match: "vs Arsenal", rating: 8 },
      { match: "vs Chelsea", rating: 10 },
    ],
  },
  "Kevin De Bruyne": {
    position: "Midfielder",
    matches: [
      { match: "vs Liverpool", rating: 8 },
      { match: "vs Arsenal", rating: 9 },
      { match: "vs Chelsea", rating: 9 },
    ],
  },
  "Rodri": {
    position: "Defensive Midfielder",
    matches: [
      { match: "vs Liverpool", rating: 7 },
      { match: "vs Arsenal", rating: 8 },
      { match: "vs Chelsea", rating: 9 },
    ],
  },
  "Phil Foden": {
    position: "Winger",
    matches: [
      { match: "vs Liverpool", rating: 8 },
      { match: "vs Arsenal", rating: 7 },
      { match: "vs Chelsea", rating: 8 },
    ],
  },
};

let highestAvgRating = 0;
let highestRatingPlayer = null;

for(let key in manCity) {
  let totalRating = 0;
  for(let key2 in manCity[key].matches) {
    totalRating += manCity[key].matches[key2].rating;
  
  }
 

   let avgRating = totalRating / manCity[key].matches.length;

   if(highestAvgRating < avgRating) {
    highestAvgRating = avgRating;
    highestRatingPlayer = key;
   }
}
console.log(`${highestRatingPlayer} has the highest average rating of ${highestAvgRating}`);

console.log(manCity);

// let highestRating = 0;

// let highestRatingPlayer = null;


console.log("Tutorial");









