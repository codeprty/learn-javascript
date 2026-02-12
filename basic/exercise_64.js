// Errors

// Exercise 1: Reference Error (Undefined Variable)
// Create a variable named message and assign it the value "Hello World".
// Log message to the console.
// Then try to log a variable named greeting (without declaring it).
// Observe what error appears.
const message = "Hello World";
console.log(message);
//console.log(greeting); /* ReferenceError: greeting is not defined */

// Exercise 2: Reference Error (Misspelled Variable)
// Create a variable named total and assign it the value 100.
// Log totl to the console (notice the spelling).
// Observe the error in the console.
const total = 100;
//console.log(totl); /* ReferenceError: totl is not defined */

// Exercise 3: Type Error (Calling Number as Function)
// Create a variable named count and assign it the value 5.
// Try to call count as if it is a function.
// Observe the error message.
const count = 5;
//count(); /* TypeError: count is not a function */

// Exercise 4: Type Error (Access Property of Undefined)
// Create a variable named user but do not assign any value.
// Try to access user.name.
// Log it to the console and observe the error.
let user;
//console.log(user.name); /* TypeError: Cannot read properties undefined (reading 'name') */

// Exercise 5: Range Error (Invalid Array Length)
// Create an array with a negative length using: new Array(-1).
// Observe the error shown in the console.
//let arr = new Array(-1); /* RangeError: Invalid array length */

// Exercise 6: Range Error (toFixed with Invalid Digits)
// Create a variable named price and assign it the value 10.123.
// Use toFixed() with a very large number like 200.
// Log the result and observe the error.
let price = 10.123;
//console.log(price.toFixed(200)); /* RangeError: toFixed digits argument must be between 0 and 100 */

// Exercise 7: URI Error (Invalid decodeURI)
// Create a string with invalid URI format: "%"
// Use decodeURI() on the string.
// Log the result and observe the error.
let str = "%";
//console.log(decodeURI(str)); /* URIERROR: URI malformed */

// Exercise 8: URI Error (Invalid decodeURIComponent)
// Create a string with invalid encoded value: "%E0%A4%A"
// Use decodeURIComponent() on the string.
// Log the result and observe the error.
let string = "%E0%A4%A";
//console.log(decodeURIComponent(string)); /* URIERROR: URI malformed */

// Exercise 9: Syntax Error (Missing Bracket)
// Write a console.log statement but forget to close the parenthesis.
// Run the code and observe the error.
//console.log("hello world"; /* SyntaxError: missing ) after argument list */

// Exercise 10: Syntax Error (Missing Quote)
// Create a string variable named name but forget to close the quotation mark.
// Run the code and observe the error.
//const name = "anri; /* SyntaxError: Invalid or unexpected token */