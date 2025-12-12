// String Methods: Extracting / Slicing

// Exercise 1: Basic slice()
// Create a variable text and set it to "JavaScript".
// Use slice() to get the first 4 characters.
// Log the result.
let text = "JavaScript";
let result = text.slice(0,4);
console.log(result);

// Exercise 2: slice() From Middle
// Create a variable word and set it to "Watermelon".
// Use slice() to extract characters from index 5 to the end.
// Log the result.
let word = "Watermelon";
result = word.slice(5);
console.log(result);

// Exercise 3: slice() with Negative Index
// Create a variable fruit and set it to "Pineapple".
// Use slice() to extract the last 3 characters.
// Log the result.
let fruit = "Pineapple";
result = fruit.slice(-3);
console.log(result);

// Exercise 4: slice() a Middle Section
// Create a variable name and set it to "Alexander".
// Use slice() to extract characters from index 2 to index 6.
// Log the result.
let name = "Alexander";
result = name.slice(2, 6);
console.log(result);

// Exercise 5: Basic substring()
// Create a variable city and set it to "Kuala Lumpur".
// Use substring() to extract the first 5 characters.
// Log the result.
let city = "Kuala Lumpur"
result = city.substring(0, 5);
console.log(result);

// Exercise 6: substring() Without Second Parameter
// Create a variable animal and set it to "Butterfly".
// Use substring() starting from index 4 to the end.
// Log the result.
let animal = "Butterfly";
result = animal.substring(4);
console.log(result);

// Exercise 7: substring() Swap Indices
// Create a variable phrase and set it to "Sunset".
// Use substring() with indices 4 and 1 (reverse order).
// Log the result to see how substring() handles swapped indices.
let phrase = "Sunset";
result = phrase.substring(4, 1);
console.log(result);

// Exercise 8: substring() Only Part of the Word
// Create a variable subject and set it to "Programming".
// Use substring() to extract "gram" from the word.
// Log the result.
let subject = "Programming";
result = subject.substring(3, 7);
console.log(result);

// Exercise 9: Combine length and slice()
// Create a variable country and set it to "Malaysia".
// Use the length property to get the last 4 characters using slice().
// Log the result.
let country = "Malaysia";
result = country.slice(country.length - 4);
console.log(result);

// Exercise 10: Combine slice() and substring()
// Create a variable sentence and set it to "Learning JavaScript".
// First use slice() to extract "Learning".
// Then use substring() to extract "Java".
// Log both results.
let sentence = "Learning JavaScript";
let result1 = sentence.slice(0, 8);
let result2 = sentence.substring(9, 13);
console.log(result1);
console.log(result2);