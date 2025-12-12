// String Methods: Modifying / Transforming

// Exercise 1: Basic concat()
// Create two variables: firstName = "John" and lastName = "Doe".
// Use concat() to join them into one string with a space in between.
// Log the result.
let firstName = "John";
let lastName = "Doe";
let result = firstName.concat(" ", lastName);
console.log(result);

// Exercise 2: concat() Multiple Parts
// Create three variables: part1 = "Good", part2 = "Morning", part3 = "Everyone".
// Use concat() to combine them into one full sentence.
// Log the result.
let part1 = "Good";
let part2 = "Morning";
let part3 = "Everyone";
result = part1.concat(" ", part2, " ", part3);
console.log(result);

// Exercise 3: Basic repeat()
// Create a variable word and set it to "Hi".
// Use repeat() to repeat it 3 times.
// Log the result.
let word = "Hi";
result = word.repeat(3);
console.log(result);

// Exercise 4: repeat() for Formatting
// Create a variable dash and set it to "-".
// Use repeat() to create a line of 20 dashes.
// Log the result.
let dash = "-";
result = dash.repeat(20);
console.log(result);

// Exercise 5: Basic replace()
// Create a variable message and set it to "I like cats".
// Use replace() to change "cats" to "dogs".
// Log the result.
let message = "I like cats";
result = message.replace("cats", "dogs");
console.log(result);

// Exercise 6: replace() Only Replaces First Match
// Create a variable text and set it to "apple banana apple".
// Use replace() to replace the first "apple" with "orange".
// Log the result.
let text = "apple banana apple";
result = text.replace("apple", "orange");
console.log(result);

// Exercise 7: Basic replaceAll()
// Create a variable fruits and set it to "apple apple apple".
// Use replaceAll() to replace all "apple" with "mango".
// Log the result.
let fruits = "apple apple apple";
result = fruits.replaceAll("apple", "mango");
console.log(result);

// Exercise 8: replaceAll() with Partial Words
// Create a variable sentence and set it to "This is amazing and amazingly fun".
// Use replaceAll() to replace "amaz" with "WOW".
// Log the result.
let sentence = "This is amazing and amazingly fun";
result = sentence.replaceAll("amaz", "WOW");
console.log(result);

// Exercise 9: Combine concat() and repeat()
// Create a variable title and set it to "Chapter".
// Use concat() to add a number, like " 1", then use repeat() to repeat the final string twice.
// Log the result.
let title = "Chapter";
result = title.concat(" ", "1").repeat(2);
console.log(result);

// Exercise 10: Combine replace() and replaceAll()
// Create a variable description and set it to "red blue red green red".
// First, use replace() to replace only the first "red" with "yellow".
// Then, use replaceAll() to replace all remaining "red" with "white".
// Log both results.
let description = "red blue red green red";
let result1 = description.replace("red", "yellow");
let result2 = result1.replaceAll("red", "white");
console.log(result1);
console.log(result2);