// RegExp Assertions

// Exercise 1: Match start of string using ^
// Create a string named text with value "Hello world".
// Use a RegExp with ^Hello to check if the string starts with "Hello".
// Log the result (true/false).
const text = "Hello world";
const patternText = /^Hello/;
const matchText = patternText.test(text);
console.log(matchText);

// Exercise 2: Match end of string using $
// Create a string named message with value "Welcome home".
// Use a RegExp with home$ to check if the string ends with "home".
// Log the result (true/false).
const message = "Welcome home";
const patternMessage = /home$/;
const matchMessage = patternMessage.test(message);
console.log(matchMessage);

// Exercise 3: Match a word boundary using \b
// Create a string named sentence with value "I like cats".
// Use a RegExp with \bcats\b to check if "cats" is a whole word.
// Log the result (true/false).
const sentence = "I like cats";
const patternSentence = /\bcats\b/;
const matchSentence = patternSentence.test(sentence);
console.log(matchSentence);

// Exercise 4: Match a non-word boundary using \B
// Create a string named wordText with value "category".
// Use a RegExp with cat\B to check if "cat" is NOT at a word boundary.
// Log the result (true/false).
const wordText = "category";
const patternWordText = /cat\B/;
const matchWordText = patternWordText.test(wordText);
console.log(matchWordText);

// Exercise 5: Positive lookahead using (?=...)
// Create a string named priceText with value "100USD".
// Use a RegExp with \d+(?=USD) to check if digits are followed by "USD".
// Log the result (true/false).
const priceText = "100USD";
const patternPriceText = /\d+(?=USD)/;
const matchPriceText = patternPriceText.test(priceText);
console.log(matchPriceText);

// Exercise 6: Negative lookahead using (?!...)
// Create a string named fileName with value "image.png".
// Use a RegExp with \w+\.(?!exe) to check the file is NOT an ".exe" file.
// Log the result (true/false).
const fileName = "image.png";
const patternFileName = /\w+\.(?!exe$)/;
const matchFileName = patternFileName.test(fileName);
console.log(matchFileName);

// Exercise 7: Positive lookbehind using (?<=...)
// Create a string named emailText with value "user@gmail.com".
// Use a RegExp with (?<=@)gmail to check if "gmail" comes after "@".
// Log the result (true/false).
const emailText = "user@gmail.com";
const patternEmailText = /(?<=@)gmail/;
const matchEmailText = patternEmailText.test(emailText);
console.log(matchEmailText);

// Exercise 8: Negative lookbehind using (?<!...)
// Create a string named idText with value "A123".
// Use a RegExp with (?<!B)\d+ to check digits are NOT preceded by "B".
// Log the result (true/false).
const idText = "A123";
const patternIdText = /(?<!B)\d+/;
const matchIdText = patternIdText.test(idText);
console.log(matchIdText);

// Exercise 9: Start and end string assertion using ^ and $
// Create a string named numberText with value "12345".
// Use a RegExp with ^\d+$ to check if the string contains only digits.
// Log the result (true/false).
const numberText = "12345";
const patternNumberText = /^\d+$/;
const matchNumberText = patternNumberText.test(numberText);
console.log(matchNumberText);

// Exercise 10: Word boundary with lookahead
// Create a string named tagText with value "JS_is_fun".
// Use a RegExp with \bJS(?=_) to check if "JS" is followed by "_".
// Log the result (true/false).
const tagText = "JS_is_fun";
const patternTagText = /\bJS(?=_)/;
const matchTagText = patternTagText.test(tagText);
console.log(matchTagText);