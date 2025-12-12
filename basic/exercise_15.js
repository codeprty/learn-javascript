// String Methods: Searching / Matching

// Exercise 1: Check Word with includes()
// Create a variable sentence and set it to "I love learning JavaScript".
// Use includes() to check if the word "love" exists in the sentence.
// Log the result.
let sentence = "I love learning JavaScript";
let result = sentence.includes("love");
console.log(result);

// Exercise 2: Check Missing Word with includes()
// Create a variable text and set it to "Frontend development is fun".
// Use includes() to check if "backend" is in the text.
// Log the result.
let text = "Frontend development is fun";
result = text.includes("backend");
console.log(result);

// Exercise 3: Case Sensitivity with includes()
// Create a variable message and set it to "Hello World".
// Use includes() to check if "world" exists (lowercase).
// Log the result.
let message = "Hello World";
result = message.includes("world");
console.log(result);

// Exercise 4: First Position with indexOf()
// Create a variable phrase and set it to "banana".
// Use indexOf() to find the position of "a".
// Log the result.
let phrase = "banana";
result = phrase.indexOf("a");
console.log(result);

// Exercise 5: Word Position with indexOf()
// Create a variable quote and set it to "Practice makes perfect".
// Use indexOf() to find the starting index of "makes".
// Log the result.
let quote = "Practice makes perfect";
result = quote.indexOf("makes");
console.log(result);

// Exercise 6: Check Not Found with indexOf()
// Create a variable story and set it to "The quick brown fox".
// Use indexOf() to search for "cat".
// Log the result.
let story = "The quick brown fox";
result = story.indexOf("cat");
console.log(result);

// Exercise 7: Last Position with lastIndexOf()
// Create a variable fruit and set it to "pineapple".
// Use lastIndexOf() to find the last occurrence of "p".
// Log the result.
let fruit = "pineapple";
result = fruit.lastIndexOf("p");
console.log(result);

// Exercise 8: Track Duplicates with lastIndexOf()
// Create a variable word and set it to "programming".
// Use lastIndexOf() to find the last index of "m".
// Log the index.
let word = "programming";
result = word.lastIndexOf("m");
console.log(result);

// Exercise 9: Find Last Word Position
// Create a variable sentence2 and set it to "I am who I am".
// Use lastIndexOf() to find the last occurrence of "am".
// Log the index.
let sentence2 = "I am who I am";
result = sentence2.lastIndexOf("am");
console.log(result);

// Exercise 10: Combine indexOf() and includes()
// Create a variable text2 and set it to "JavaScript is powerful".
// First, use includes() to check if "Java" exists.
// Then, use indexOf() to find where "Java" starts.
// Log both results.
let text2 = "JavaScript is powerful";
let result1 = text2.includes("Java");
let result2 = text2.indexOf("Java");
console.log(result1);
console.log(result2);