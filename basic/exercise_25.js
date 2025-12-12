// Number Static Methods

// Exercise 1: Basic Number.isNaN()
// Create a variable x and set it to NaN.
// Use Number.isNaN(x) and log the result.
let x = NaN;
let result = Number.isNaN(x);
console.log(result);

// Exercise 2: Number.isNaN() with String
// Create a variable value = "hello".
// Use Number.isNaN(value) and log the result.
// (Notice how it behaves differently from isNaN().)
let value = "hello";
result = Number.isNaN(value);
console.log(result);

// Exercise 3: Basic Number.isInteger()
// Create a variable age = 25.
// Use Number.isInteger(age) and log the result.
let age = 25;
result = Number.isInteger(age);
console.log(result);

// Exercise 4: Number.isInteger() with Decimal
// Create a variable height = 5.7.
// Use Number.isInteger(height) and log the result.
let height = 5.7;
result = Number.isInteger(height);
console.log(result);

// Exercise 5: Basic Number.parseInt()
// Create a variable str1 = "123px".
// Use Number.parseInt(str1) and log the result.
let str1 = "123px";
result = Number.parseInt(str1);
console.log(result);

// Exercise 6: Number.parseInt() with Negative Number
// Create a variable str2 = "-45kg".
// Use Number.parseInt(str2) and log the result.
let str2 = "-45kg";
result = Number.parseInt(str2);
console.log(result);

// Exercise 7: Basic Number.parseFloat()
// Create a variable str3 = "12.78m".
// Use Number.parseFloat(str3) and log the result.
let str3 = "12.78m";
result = Number.parseFloat(str3);
console.log(result);

// Exercise 8: Number.parseFloat() with Whole Number
// Create a variable str4 = "50".
// Use Number.parseFloat(str4) and log the result.
let str4 = 50;
result = Number.parseFloat(str4);
console.log(result);

// Exercise 9: Combine parseInt() and parseFloat()
// Create a variable numStr = "88.99".
// Use Number.parseInt() and Number.parseFloat() on the same value.
// Log both results.
let numStr = "88.99";
let result1 = Number.parseInt(numStr);
let result2 = Number.parseFloat(numStr);
console.log(result1);
console.log(result2);

// Exercise 10: Combine Static Methods
// Create a variable data = "100.5px".
// Use Number.parseFloat() to extract the number.
// Then use Number.isInteger() to check if it's an integer.
// Log both results.
let data = "100.5px";
result1 = Number.parseFloat(data);
result2 = Number.isInteger(result1);
console.log(result1);
console.log(result2);