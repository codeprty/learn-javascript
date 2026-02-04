// RegExp Metachars

// Exercise 1: Match any digit using \d
// Create a string named code with value "Room 101".
// Use a RegExp with \d to check if the string contains any digit.
// Log the result.
const code = "Room 101";
const checkCode = code.match(/\d/g);
console.log(checkCode);

// Exercise 2: Match any non-digit using \D
// Create a string named numberText with value "2026 is the year".
// Use a RegExp with \D to check if the string contains any non-digit character.
// Log the result.
const numberText = "2026 is the year";
const checkNumberText = numberText.match(/\D/g);
console.log(checkNumberText);

// Exercise 3: Match any word character using \w
// Create a string named username with value "user_123".
// Use a RegExp with \w to check if the string contains any word character (letters, digits, or underscore).
// Log the result.
const username = "user_123";
const checkUsername = username.match(/\w/g);
console.log(checkUsername);

// Exercise 4: Match any non-word character using \W
// Create a string named specialChars with value "hello!".
// Use a RegExp with \W to check if the string contains any non-word character.
// Log the result.
const specialChars = "hello!";
const checkSpecialChars = specialChars.match(/\W/g);
console.log(checkSpecialChars);

// Exercise 5: Match any whitespace character using \s
// Create a string named sentence with value "Hello World".
// Use a RegExp with \s to check if the string contains any whitespace character.
// Log the result (true/false).
const sentence = "Hello World";
const patternSentence = /\s/;
const matchSentence = patternSentence.test(sentence);
console.log(matchSentence);

// Exercise 6: Match any non-whitespace character using \S
// Create a string named greeting with value " Hi ".
// Use a RegExp with \S to check if the string contains any non-whitespace character.
// Log the result (true/false).
const greeting = " Hi ";
const patternGreeting = /\S/;
const matchGreeting = patternGreeting.test(greeting);
console.log(matchGreeting);

// Exercise 7: Match a character using an octal escape \ddd
// Create a string named octalText with value "Hello".
// Use a RegExp with an octal escape \101 (which represents 'A') to check if the string contains that character.
// Log the result (true/false).
const octalText = "Hello";
const patternOctalText = /\101/g;
const matchOctalText = patternOctalText.test(octalText);
console.log(matchOctalText);

// Exercise 8: Match a character using a hexadecimal escape \xhh
// Create a string named hexText with value "ABC".
// Use a RegExp with a hexadecimal escape \x41 (which represents 'A') to check if the string contains that character.
// Log the result (true/false).
const hexText = "ABC";
const patternHexText = /\x41/;
const matchHexText = patternHexText.test(hexText);
console.log(matchHexText);

// Exercise 9: Match a Unicode character using \uhhhh
// Create a string named unicodeText with value "π".
// Use a RegExp with \u03C0 (which represents 'π') to check if the string contains that character.
// Log the result (true/false).
const unicodeText = "π";
const patternUnicodeText = /\u03C0/g;
const matchUnicodeText = patternUnicodeText.test(unicodeText);
console.log(matchUnicodeText);

// Exercise 10: Combine multiple metacharacters
// Create a string named mixedText with value "User_1: Hello 2026!".
// Use a RegExp to check if the string contains a digit (\d), a word character (\w), and a whitespace (\s).
// Log the results separately for each check.
const mixedText = "User_1: Hello 2026!";

const hasDigit = /\d/.test(mixedText);
const hasWord = /\w/.test(mixedText);
const hasWhitespace = /\s/.test(mixedText);

console.log(hasDigit);
console.log(hasWord);
console.log(hasWhitespace);