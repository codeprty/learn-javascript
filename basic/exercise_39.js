// Array Search Methods

// Exercise 1: indexOf() Basic
// Create an array named fruits with values: "apple", "banana", "orange".
// Use indexOf() to find the index of "banana".
// Log the result.
const fruits = ["apple", "banana", "orange"];
let result = fruits.indexOf("banana");
console.log(result);

// Exercise 2: indexOf() Not Found
// Using the same fruits array,
// use indexOf() to search for "grape".
// Log the result.
result = fruits.indexOf("grape");
console.log(result);

// Exercise 3: lastIndexOf() Basic
// Create an array named numbers with values: 1, 2, 3, 2, 1.
// Use lastIndexOf() to find the last position of number 2.
// Log the result.
const numbers = [1, 2, 3, 2, 1];
result = numbers.lastIndexOf(2);
console.log(result);

// Exercise 4: includes() Basic
// Create an array named colors with values: "red", "green", "blue".
// Use includes() to check if "green" exists in the array.
// Log the result.
const colors = ["red", "green", "blue"];
result = colors.includes("green");
console.log(result);

// Exercise 5: includes() with Missing Value
// Using the same colors array,
// check if "yellow" exists.
// Log the result.
let findYellow = colors.includes("yellow");
console.log(findYellow);

// Exercise 6: find() Basic
// Create an array named ages with values: 12, 18, 25, 30.
// Use find() to get the first age that is 18 or above.
// Log the result.
const ages = [12, 18, 25, 30];
result = ages.find(age => age >= 18);
console.log(result);

// Exercise 7: findIndex() Basic
// Using the ages array,
// use findIndex() to find the index of the first age that is 18 or above.
// Log the result.
result = ages.findIndex(age => age >= 18);
console.log(result);

// Exercise 8: find() with Objects
// Create an array named users containing objects with name and age.
// Use find() to get the user whose age is greater than 20.
// Log the result.
const users = [
    { name: "Tera", age: 20 },
    { name: "Jenna", age: 22 },
    { name: "Amber", age: 19 }
];

result = users.find(users => users.age > 20);
console.log(result);

// Exercise 9: findLast() Basic
// Create an array named scores with values: 60, 70, 80, 70, 90.
// Use findLast() to find the last score that is greater than 70.
// Log the result.
const scores = [60, 70, 80, 70, 90];
result = scores.findLast(score => score > 70);
console.log(result);

// Exercise 10: findLastIndex() Basic
// Using the scores array,
// use findLastIndex() to find the index of the last score that is greater than 70.
// Log the result.
result = scores.findLastIndex(score => score > 70);
console.log(result);