// Array Iteration Methods

// Exercise 1: some() Basic
// Create an array named ages with values: 12, 16, 18, 20.
// Use some() to check if at least one age is 18 or above.
// Log the result.
const ages = [12, 16, 18, 20];
const newAges = ages.some(age => age >= 18);
console.log(newAges);

// Exercise 2: some() with Strings
// Create an array named fruits with values: "apple", "banana", "kiwi".
// Use some() to check if any fruit has more than 5 letters.
// Log the result.
const fruits = ["apple", "banana", "kiwi"];
const newFruits = fruits.some(fruit => fruit.length > 5);
console.log(newFruits);

// Exercise 3: Array.from() Basic
// Create a string named word = "HELLO".
// Use Array.from() to convert the string into an array of characters.
// Log the array.
const word = "HELLO";
const newWord = Array.from(word);
console.log(newWord);

// Exercise 4: Array.from() with Numbers
// Create a variable numStr = "12345".
// Use Array.from() to create an array of numbers from the string.
// Log the result.
const numStr = "12345";
const newNumStr = Array.from(numStr, Number);
console.log(newNumStr);

// Exercise 5: keys() Basic
// Create an array named colors with values: "red", "green", "blue".
// Use keys() to get all indexes of the array.
// Loop through them and log each index.
const colors = ["red", "green", "blue"];
const keys = colors.keys();
for (let x of keys) {
    console.log(x);
}

// Exercise 6: entries() Basic
// Using the same colors array,
// use entries() to loop and log index and value pairs.
const entries = colors.entries();
for (let x of entries) {
    console.log(x);
}

// Exercise 7: with() Basic
// Create an array named numbers with values: 10, 20, 30.
// Use with() to change the value at index 1 to 25
// without modifying the original array.
// Log both arrays.
const numbers = [10, 20, 30];
const newNumbers = numbers.with(1, 25);
console.log(numbers);
console.log(newNumbers);

// Exercise 8: Spread (...) with Arrays
// Create two arrays: a = [1, 2] and b = [3, 4].
// Use the spread operator to combine them into one array.
// Log the result.
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c);

// Exercise 9: Spread (...) to Copy Array
// Create an array named original with values: "x", "y", "z".
// Use spread (...) to create a copy of the array.
// Log both arrays.
const original = ["x", "y", "z"];
const newOriginal = [...original];
console.log(original);
console.log(newOriginal);

// Exercise 10: Rest (...) Parameter
// Create a function named collect(...items).
// Inside the function, log the items array.
// Call collect() with multiple arguments.
function collect(...items) {
    console.log(items);
}
collect("macbook", "iphone", "airpod");