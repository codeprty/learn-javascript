// RegExp Quantifiers

// Exercise 1: One or more occurrences using x+
// Create a string named text with value "hellooo".
// Use a RegExp with o+ to check if the string contains one or more letter "o".
// Log the result (true/false).
const text = "hellooo";
const patternText = /o+/;
const matchText = patternText.test(text);
console.log(matchText);

// Exercise 2: Zero or more occurrences using x*
// Create a string named sound with value "hmm".
// Use a RegExp with o* to check if the string contains zero or more letter "o".
// Log the result (true/false).
const sound = "hmm";
const patternSound = /o*/;
const matchSound = patternSound.test(sound);
console.log(matchSound);

// Exercise 3: Zero or one occurrence using x?
// Create a string named color with value "color".
// Use a RegExp with u? to check if the letter "u" appears zero or one time.
// Log the result (true/false).
const color = "color";
const patternColor = /u?/;
const matchColor = patternColor.test(color);
console.log(matchColor);

// Exercise 4: Exactly n occurrences using x{n}
// Create a string named pin with value "1234".
// Use a RegExp with \d{4} to check if the string contains exactly 4 digits.
// Log the result (true/false).
const pin = "1234";
const patternPin = /\d{4}/;
const matchPin = patternPin.test(pin);
console.log(matchPin);

// Exercise 5: Exactly n occurrences of a character
// Create a string named word with value "book".
// Use a RegExp with o{2} to check if the letter "o" appears exactly 2 times.
// Log the result (true/false).
const word = "book";
const patternWord = /o{2}/;
const matchWord = patternWord.test(word);
console.log(matchWord);

// Exercise 6: Between n and m occurrences using x{n,m}
// Create a string named laugh with value "hahaha".
// Use a RegExp with ha{2,4} to check if "a" appears between 2 and 4 times after "h".
// Log the result (true/false).
const laugh = "hahaha";
const patternLaugh = /ha{2,4}/;
const matchLaugh = patternLaugh.test(laugh);
console.log(matchLaugh);

// Exercise 7: Between n and m digits using x{n,m}
// Create a string named code with value "789".
// Use a RegExp with \d{2,4} to check if the string contains 2 to 4 digits.
// Log the result (true/false).
const code = "789";
const patternCode = /\d{2,4}/;
const matchCode = patternCode.test(code);
console.log(matchCode);

// Exercise 8: At least n occurrences using x{n,}
// Create a string named stars with value "***".
// Use a RegExp with \*{2,} to check if the string contains at least 2 asterisks.
// Log the result (true/false).
const stars = "***";
const patternStars = /\*{2,}/;
const matchStars = patternStars.test(stars);
console.log(matchStars);

// Exercise 9: Optional character using x?
// Create a string named filename with value "file1".
// Use a RegExp with \d? to check if the string optionally ends with a digit.
// Log the result (true/false).
const filename = "file1";
const patternFilename = /\d?/;
const matchFilename = patternFilename.test(filename);
console.log(matchFilename);

// Exercise 10: Combine quantifiers with letters
// Create a string named message with value "helloooo".
// Use a RegExp with o{3,} to check if the letter "o" appears at least 3 times.
// Log the result (true/false).
const message = "helloooo";
const patternMessage = /o{3,}/;
const matchMessage = patternMessage.test(message);
console.log(matchMessage);