// String Methods: Searching / Matching

// Exercise 1: Basic match()
// Create a variable text and set it to "Hello JavaScript".
// Use match() to find "Java" in the text.
// Log the result.
let text = "Hello JavaScript";
let result = text.match("Java");
console.log(result);

// Exercise 2: match() with No Match
// Create a variable message and set it to "Welcome to coding".
// Use match() to search for "Python".
// Log the result.
let message = "Welcome to coding";
result = message.match("Python");
console.log(result);

// Exercise 3: match() with Regular Expression
// Create a variable sentence and set it to "I have 2 cats and 3 dogs".
// Use match() with /\d/ to find the first number.
// Log the result.
let sentence = "I have 2 cats and 3 dogs";
result = sentence.match(/\d/);
console.log(result);

// Exercise 4: match() for All Numbers Using Regex Flag
// Create a variable info and set it to "Room 101, Level 5, Block 3".
// Use match() with /\d+/g to find all numbers.
// Log the result.
let info = "Room 101, Level 5, Block 3";
result = info.match(/\d+/g);
console.log(result);

// Exercise 5: match() for All Words Starting with Capital Letter
// Create a variable line and set it to "My name is James Bond".
// Use match() with /[A-Z]\w+/g to get all capitalized words.
// Log the result.
let line = "My name is James Bond";
result = line.match(/[A-Z]\w+/g);
console.log(result);

// Exercise 6: Basic matchAll()
// Create a variable fruits and set it to "apple, banana, apple, orange".
// Use matchAll() with /apple/g to find all "apple" occurrences.
// Convert the result to an array and log it.
let fruits = "apple, banana, apple, orange";
let matches = fruits.matchAll(/apple/g);
result = Array.from(matches);
console.log(result);

// Exercise 7: matchAll() to Track Positions
// Create a variable colors and set it to "red blue red green red".
// Use matchAll() with /red/g to find every match.
// Convert the result to an array and log it.
let colors = "red blue red green red";
matches = colors.matchAll(/red/g);
result = Array.from(matches);
console.log(result);

// Exercise 8: matchAll() with Groups
// Create a variable data and set it to "Item1: 20, Item2: 35".
// Use matchAll() with /Item(\d): (\d+)/g to capture item numbers and values.
// Convert the result to an array and log it.
let data  = "Item1: 20, Item2: 35";
matches = data.matchAll(/Item(\d): (\d+)/g);
result = Array.from(matches);
console.log(result);

// Exercise 9: matchAll() to Extract Words
// Create a variable text2 and set it to "Learn JS step by step".
// Use matchAll() with /\w+/g to find all words.
// Convert to an array and log the result.
let text2 = "Learn JS step by step";
matches = text2.matchAll(/\w+/g);
result = Array.from(matches);
console.log(result);

// Exercise 10: Combine match() and matchAll()
// Create a variable logText and set it to "error: 404, error: 500, error: 403".
// First use match() to get the first error code.
// Then use matchAll() to get all error codes.
// Convert matchAll() results to an array and log both outputs.
let logText = "error: 404, error: 500, error: 403";

let firstErrorCode = logText.match(/\d+/);
console.log(firstErrorCode);

matches = logText.matchAll(/\d+/g);
let allErrorCode = Array.from(matches);
console.log(allErrorCode);