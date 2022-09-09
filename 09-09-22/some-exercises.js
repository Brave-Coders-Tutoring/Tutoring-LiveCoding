// hasOddNumber

// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

const hasOddNumber = (array) => {
  return array.some((elem) => elem % 2 !== 0);
};

console.log("has odd number");
console.log(hasOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(hasOddNumber([2, 4, 6, 8, 10]));
console.log("-----------");

// ----------------------------------------------------------------

// hasAZero

// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

const hasAZero = (number) => {
  return number
    .toString()
    .split("")
    .some((elem) => elem == 0);
};

console.log("has a zero");
console.log(hasAZero(33321232131012));
console.log(hasAZero(1212121));
console.log("-----------");

// ----------------------------------------------------------------

// hasOnlyOddNumbers

// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

const hasOnlyOddNumbers = (array) => {
  return array.every((elem) => elem % 2 !== 0);
};

console.log("has only odd number");
console.log(hasOnlyOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(hasOnlyOddNumbers([9, 7, 5, 3, 1]));
console.log("-----------");

// ----------------------------------------------------------------

// hasNoDuplicates

// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

const hasNoDuplicates = (array) => {
  return array.every(function (val) {
    return array.indexOf(val) === array.lastIndexOf(val);
  });
};

console.log(hasNoDuplicates([1, 2, 1, 3])); // false
console.log(hasNoDuplicates([1, 2, 3])); // true
