// Reduce Aufgaben

// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
  return arr.reduce((prev, elem) => prev + elem, 0);
}

console.log(total([1, 2, 3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
  return arr.reduce((prev, elem) => prev + elem, "");
}

console.log(stringConcat([1, 2, 3])); // "123"

// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
  return arr.reduce((prev, elem) => prev + elem.voted, 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
  return arr.reduce((prev, elem) => prev + elem.price, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
  return arr.reduce((prev, elem) => prev.concat(elem), []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//Note: Take a look at Array.concat() to help with this one

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// function voterResults(arr) {
//   return arr.reduce((prev, elem) => {
//     if (prev.numYoungPeople === undefined) prev.numYoungPeople = 0;
//     if (elem.age >= 18 && elem.age <= 25) prev.numYoungPeople++;
//     return prev;
//   }, {});
// }

const voterResults = (arr) => {
  const reducedObj = arr.reduce(
    (prev, curr) => {
      if (curr.age >= 18 && curr.age <= 25 && curr.voted) {
        prev.numYoungVotes++;
      }
      if (curr.age >= 18 && curr.age <= 25) {
        prev.numYoungPeople++;
      }
      if (curr.age >= 26 && curr.age <= 35 && curr.voted) {
        prev.numMidVotesPeople++;
      }
      if (curr.age >= 26 && curr.age <= 35) {
        prev.numMidsPeople++;
      }
      if (curr.age >= 36 && curr.age <= 55 && curr.voted) {
        prev.numOldVotesPeople++;
      }
      if (curr.age >= 36 && curr.age <= 55) {
        prev.numOldsPeople++;
      }
      return { ...prev };
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
  return reducedObj;
};

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

/* Return an object where each property is the name of the an ice cream flavor and each value is an integer that is the total count of that flavor. * Store the returned data in a new iceCreamTotals variable. */

const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];

function iceCreamTotals(obj) {
  return obj.reduce((prev, curr) => {
    curr.favoriteIceCreams.forEach(
      (elem) => (prev[elem] = (prev[elem] || 0) + 1)
    );
    return prev;
  }, {});
}

console.log(iceCreamTotals(data));
/*{  Strawberry: 3,  Vanilla: 4,  Chocolate: 5,  'Cookies & Cream': 2,  'Mint Chocolate Chip': 3,  'Rocky Road': 1,  Pistachio: 1,  Banana: 1,  'French Vanilla': 1,  'Vanilla Bean': 1}*/
