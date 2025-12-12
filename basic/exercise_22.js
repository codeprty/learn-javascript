// Numbers

// Exercise 1: Number Types (Integer)
// Create a variable age and set it to an integer value (example: 20).
// Log the variable to the console.
let age = 20;
console.log(age);

// Exercise 2: Number Types (Decimal)
// Create a variable price and set it to a decimal number (example: 19.99).
// Log the variable.
let price = 19.99;
console.log(price);

// Exercise 3: Adding Numbers
// Create two variables: a = 5 and b = 10.
// Add them together and log the result.
let a = 5;
let b = 10;
let result = a + b;
console.log(result);

// Exercise 4: Adding Number + String (String Wins)
// Create a variable num = 5 and str = "10".
// Add them together and log the result to see how JavaScript handles it.
let num = 5;
let str = "10";
result = num + str;
console.log(result);

// Exercise 5: Numeric Strings (Converted Automatically)
// Create a variable x = "7" and y = "3".
// Add them using the + operator.
// Then subtract them using the - operator.
// Log both results.
let x = "7";
let y = "3";
let sum1 = x + y;
let sum2 = x - y;
console.log(sum1);
console.log(sum2);

// Exercise 6: NaN (Not a Number)
// Create a variable output and set it to "hello" * 5.
// Log the output to see what happens.
let output = "hello" * 5;
console.log(output);

// Exercise 7: Checking NaN
// Create a variable value = "abc".
// Use isNaN(value) to check if it’s not a number.
// Log the result.
let value = "abc";
result = isNaN(value);
console.log(result);

// Exercise 8: Infinity from Division
// Create a variable number = 5.
// Divide it by 0 and log the result.
let number = 5;
result = number / 0;
console.log(result);

// Exercise 9: Infinity from Very Large Number
// Create a variable bigNum and set it to 1e309.
// Log the value to see how JavaScript handles extremely large numbers.
let bigNum = 1e309;
console.log(bigNum);

// Exercise 10: Combining Concepts
// Create a variable numStr = "50".
// Convert numStr into a number using Number().
// Add it to another number, then divide the result by 0.
// Log the final output.
let numStr = "50";
let convertNum = Number(numStr);
let addNum = convertNum + 8;
output = addNum / 0;
console.log(output);