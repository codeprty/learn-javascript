// Array Iteration Methods

// Exercise 1: forEach() Basic
// Create an array named numbers with values: 1, 2, 3, 4.
// Use forEach() to log each number to the console.
const values = [1, 2, 3, 4];
values.forEach(num => console.log(num));

// Exercise 2: map() Basic
// Create an array named prices with values: 10, 20, 30.
// Use map() to create a new array where each value is doubled.
// Log the new array.
const prices = [10, 20, 30];
const newPrices = prices.map(value => value *2);
console.log(newPrices);

// Exercise 3: map() with Strings
// Create an array named names with values: "hiromi", "kaito", "makoto".
// Use map() to convert each name to uppercase.
// Log the new array.
const names = ["hiromi", "kaito", "makoto"];
const newNames = names.map(name => name.toUpperCase());
console.log(newNames);

// Exercise 4: flatMap() Basic
// Create an array named words with values: ["hello world", "good day"].
// Use flatMap() to split each string into words.
// Log the result.
const words = ["hello world", "good day"];
const newWords = words.flatMap(str => str.split(" "));
console.log(newWords);

// Exercise 5: filter() Basic
// Create an array named ages with values: 12, 18, 25, 16, 30.
// Use filter() to keep only ages that are 18 or above.
// Log the new array.
const ages = [12, 18, 25, 16, 30];
const newAges = ages.filter(age => age >= 18);
console.log(newAges);

// Exercise 6: filter() with Strings
// Create an array named fruits with values: "apple", "banana", "kiwi", "orange".
// Use filter() to keep fruits with more than 4 letters.
// Log the result.
const fruits = ["apple", "banana", "kiwi", "orange"];
const newFruits = fruits.filter(letters => letters.length > 4);
console.log(newFruits);

// Exercise 7: reduce() Basic Sum
// Create an array named numbers with values: 5, 10, 15.
// Use reduce() to calculate the total sum.
// Log the result.
const numbers = [5, 10, 15];
const sum = numbers.reduce((a, b) => a + b);
console.log(sum);

// Exercise 8: reduce() with Strings
// Create an array named sentence with values: "I", "love", "JS".
// Use reduce() to combine them into one sentence with spaces.
// Log the result.
const sentence = ["I", "love", "JS"];
const newSentence = sentence.reduce((a, b) => a + " " + b);
console.log(newSentence);

// Exercise 9: reduceRight() Basic
// Create an array named letters with values: ["a", "b", "c"].
// Use reduceRight() to combine the letters into a string.
// Log the result.
const letters = ["a", "b", "c"];
const newLetters = letters.reduceRight((a, b) => a + b);
console.log(newLetters);

// Exercise 10: every() Basic
// Create an array named scores with values: 60, 70, 80, 90.
// Use every() to check if all scores are 50 or above.
// Log the result.
const scores = [60, 70, 80, 90];
const newScores = scores.every(score => score >= 50);
console.log(newScores);