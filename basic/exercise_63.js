// RegExp Methods

// Exercise 1: Using test()
// Create a RegExp named catPattern with value /cat/.
// Create a string named catText with value "The cat is sleeping".
// Use test() to check if catPattern matches catText.
// Log the result (true/false).
const catPattern = /cat/;
const catText = "The cat is sleeping";
console.log(catPattern.test(catText));

// Exercise 2: Using exec()
// Create a RegExp named dogPattern with value /dog/.
// Create a string named dogText with value "My dog is cute".
// Use exec() to find a match in dogText.
// Log the result array.
const dogPattern = /dog/;
const dogText = "My dog is cute";
console.log(dogPattern.exec(dogText));

// Exercise 3: Using source
// Create a RegExp named helloPattern with value /hello/i.
// Access the source property of helloPattern.
// Log the returned pattern text.
const helloPattern = /hello/i;
console.log(helloPattern.source);

// Exercise 4: Using flags
// Create a RegExp named abcPattern with value /abc/gi.
// Access the flags property of abcPattern.
// Log the returned flags.
const abcPattern = /abc/gi;
console.log(abcPattern.flags);

// Exercise 5: Using toString()
// Create a RegExp named testPattern with value /test/i.
// Use toString() to convert testPattern to a string.
// Log the result.
const testPattern = /test/i;
const newTestStr = testPattern.toString();
console.log(newTestStr);

// Exercise 6: Using constructor
// Create a RegExp named numberPattern with value /123/.
// Access the constructor property of numberPattern.
// Log the result.
const numberPattern = /123/;
console.log(numberPattern.constructor);

// Exercise 7: Using lastIndex with global flag
// Create a RegExp named aGlobalPattern with value /a/g.
// Create a string named bananaText with value "banana".
// Use exec() once on bananaText.
// Log the value of aGlobalPattern.lastIndex after the match.
const aGlobalPattern = /a/g;
const bananaText = "banana";
aGlobalPattern.exec(bananaText);
console.log(aGlobalPattern.lastIndex);

// Exercise 8: Setting lastIndex manually
// Create a RegExp named letterPattern with value /a/g.
// Set letterPattern.lastIndex to 2.
// Log the value of letterPattern.lastIndex.
const letterPattern = /a/g;
letterPattern.lastIndex = 2;
console.log(letterPattern.lastIndex);

// Exercise 9: Using RegExp.escape()
// Create a string named specialString with value "hello.*world".
// Use RegExp.escape() to escape the special characters in specialString.
// Log the escaped result.
const specialString = "hello.*world";
const escapeString = RegExp.escape(specialString);
console.log(escapeString);

// Exercise 10: Combining exec() and flags
// Create a RegExp named islandPattern with value /is/g.
// Create a string named islandText with value "This is his island".
// Use exec() to find the first match in islandText.
// Log the result array.
// Log the value of islandPattern.lastIndex after the match.
const islandPattern = /is/g;
const islandText = "This is his island";
const result = islandPattern.exec(islandText);
console.log(result);
console.log(islandPattern.lastIndex);