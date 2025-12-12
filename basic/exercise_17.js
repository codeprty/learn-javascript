// String Methods: Searching / Matching

// Exercise 1: Basic search()
// Create a variable text and set it to "JavaScript is fun".
// Use search() to find the position of "Script".
// Log the result.
let text = "JavaScript is fun";
let result = text.search("Script");
console.log(result);

// Exercise 2: search() with No Match
// Create a variable message and set it to "Learning to code".
// Use search() to look for "Python".
// Log the result.
let message = "Learning to code";
result = message.search("Python");
console.log(result);

// Exercise 3: search() with Regex
// Create a variable line and set it to "Today is 28th of June".
// Use search() with /\d+/ to find the position of the first number.
// Log the result.
let line = "Today is 28th of June";
result = line.search(/\d+/);
console.log(result);

// Exercise 4: startsWith() Basic
// Create a variable phrase and set it to "Hello World".
// Use startsWith() to check if it starts with "Hello".
// Log the result.
let phrase = "Hello World";
result = phrase.startsWith("Hello");
console.log(result);

// Exercise 5: startsWith() Case Sensitivity
// Create a variable greeting and set it to "Welcome Home".
// Use startsWith() to check if it starts with "welcome".
// Log the result.
let greeting = "Welcome Home";
result = greeting.startsWith("welcome");
console.log(result);

// Exercise 6: startsWith() at a Specific Position
// Create a variable text2 and set it to "I love JavaScript".
// Use startsWith() to check if "love" starts at index 2.
// Log the result.
let text2 = "I love JavaScript";
result = text2.startsWith("love", 2);
console.log(result);

// Exercise 7: endsWith() Basic
// Create a variable filename and set it to "photo.png".
// Use endsWith() to check if it ends with ".png".
// Log the result.
let filename = "photo.png";
result = filename.endsWith(".png");
console.log(result);

// Exercise 8: endsWith() Case Sensitivity
// Create a variable title and set it to "MyReport.PDF".
// Use endsWith() to check if it ends with ".pdf".
// Log the result.
let title = "MyReport.PDF";
result = title.endsWith(".pdf");
console.log(result);

// Exercise 9: endsWith() with Length Limit
// Create a variable word and set it to "javascript".
// Use endsWith() to check if it ends with "script" using the length parameter.
// Log the result.
let word = "javascript";
result = word.endsWith("script", 10);
console.log(result);

// Exercise 10: Combine search(), startsWith(), and endsWith()
// Create a variable sentence and set it to "Coding starts now".
// Use startsWith() to check if it starts with "Coding".
// Use endsWith() to check if it ends with "now".
// Use search() to find the position of "starts".
// Log all results.
let sentence = "Coding starts now";
let result1 = sentence.startsWith("Coding");
let result2 = sentence.endsWith("now");
let result3 = sentence.search("starts");
console.log(result1);
console.log(result2);
console.log(result3);