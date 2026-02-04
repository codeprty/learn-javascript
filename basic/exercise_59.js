// RegExp Classes

// Exercise 1: Match single character 'a' using [a]
// Create a string named text with value "apple".
// Use a RegExp with [a] to check if the string contains the character 'a'.
// Log the result (true/false).
const text = "apple";
const patternText = /[a]/;
const matchText = patternText.test(text);
console.log(matchText);

// Exercise 2: Exclude character 'a' using [^a]
// Create a string named word with value "banana".
// Use a RegExp with [^a] to check if the string contains any character except 'a'.
// Log the result (true/false).
const word = "banana";
const patternWord = /[^a]/;
const matchWord = patternWord.test(word);
console.log(matchWord);

// Exercise 3: Match any character 'a', 'b', or 'c' using [abc]
// Create a string named letters with value "cab".
// Use a RegExp with [abc] to check if the string contains either 'a', 'b', or 'c'.
// Log the result (true/false).
const letters = "cab";
const patternLetters = /[abc]/;
const matchLetters = patternLetters.test(letters);
console.log(matchLetters);

// Exercise 4: Exclude characters 'a', 'b', 'c' using [^abc]
// Create a string named pet with value "dog".
// Use a RegExp with [^abc] to check if the string contains any character except 'a', 'b', or 'c'.
// Log the result (true/false).
const pet = "dog";
const patternPet = /[^abc]/;
const matchPet = patternPet.test(pet);
console.log(matchPet);

// Exercise 5: Match lowercase letters from 'a' to 'z' using [a-z]
// Create a string named message with value "hello123".
// Use a RegExp with [a-z] to check if the string contains any lowercase letter from 'a' to 'z'.
// Log the result (true/false).
const message = "hello123";
const patternMessage = /[a-z]/;
const matchMessage = patternMessage.test(message);
console.log(matchMessage);

// Exercise 6: Exclude lowercase letters from 'a' to 'z' using [^a-z]
// Create a string named shout with value "HELLO123".
// Use a RegExp with [^a-z] to check if the string contains any character that is NOT a lowercase letter.
// Log the result (true/false).
const shout = "HELLO123";
const patternShout = /[^a-z]/;
const matchShout = patternShout.test(shout);
console.log(matchShout);

// Exercise 7: Match any digit from 0 to 9 using [0-9]
// Create a string named year with value "year2026".
// Use a RegExp with [0-9] to check if the string contains any digit from 0 to 9.
// Log the result (true/false).
const year = "year2026";
const patternYear = /[0-9]/;
const matchYear = patternYear.test(year);
console.log(matchYear);

// Exercise 8: Exclude digits from 0 to 9 using [^0-9]
// Create a string named price with value "price$".
// Use a RegExp with [^0-9] to check if the string contains any character that is NOT a digit.
// Log the result (true/false).
const price = "price$";
const patternPrice = /[^0-9]/;
const matchPrice = patternPrice.test(price);
console.log(matchPrice);

// Exercise 9: Match only letters 'a', 'b', 'c' in a string using [abc]
// Create a string named mixedLetters with value "abcxyz".
// Use a RegExp with [abc] to extract all characters that are either 'a', 'b', or 'c'.
// Log the extracted characters.
const mixedLetters = "abcxyz";
const matchMixedLetters = mixedLetters.match(/[abc]/g);
console.log(matchMixedLetters);

// Exercise 10: Exclude letters 'a', 'b', 'c' in a string using [^abc]
// Create a string named alphabet with value "abcdef".
// Use a RegExp with [^abc] to extract all characters that are NOT 'a', 'b', or 'c'.
// Log the extracted characters.
const alphabet = "abcdef";
const matchAlphabet = alphabet.match(/[^abc]/g);
console.log(matchAlphabet);