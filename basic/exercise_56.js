// Math Methods: Min/Max & Absolute Value

// Exercise 1: Math.abs() Basic
// Create a variable named value with the value -8.
// Use Math.abs() to get the absolute value.
// Log the result.
const value = -8;
console.log(Math.abs(value));

// Exercise 2: Math.abs() with Positive Number
// Create a variable named number with the value 5.
// Use Math.abs() on the number.
// Log the result.
const number = 5;
console.log(Math.abs(number));

// Exercise 3: Math.min() with Two Numbers
// Create two variables with values 10 and 4.
// Use Math.min() to find the smaller number.
// Log the result.
const a = 10;
const b = 4;
console.log(Math.min(a, b));

// Exercise 4: Math.min() with Multiple Numbers
// Use Math.min() to find the smallest number from: 3, 7, 2, 9.
// Log the result.
const smallNum = [3, 7, 2, 9];
console.log(Math.min(...smallNum));

// Exercise 5: Math.max() with Two Numbers
// Create two variables with values 6 and 12.
// Use Math.max() to find the larger number.
// Log the result.
const x = 6;
const y = 12;
console.log(Math.max(x, y));

// Exercise 6: Math.max() with Multiple Numbers
// Use Math.max() to find the largest number from: 15, 8, 20, 4.
// Log the result.
const largeNum = [15, 8, 20, 4];
console.log(Math.max(...largeNum));

// Exercise 7: Math.sign() with Positive Number
// Create a variable named score with the value 10.
// Use Math.sign() to check the sign of the number.
// Log the result.
const score = 10;
console.log(Math.sign(score));

// Exercise 8: Math.sign() with Negative Number
// Create a variable named balance with the value -25.
// Use Math.sign() on the balance.
// Log the result.
const balance = -25;
console.log(Math.sign(balance));

// Exercise 9: Math.sign() with Zero
// Create a variable named zeroValue with the value 0.
// Use Math.sign() to check the sign.
// Log the result.
const zeroValue = 0;
console.log(Math.sign(zeroValue));

// Exercise 10: Mixed Math Methods Practice
// Create three variables with values: -12, 5, and 18.
// Use Math.abs(), Math.min(), and Math.max() at least once.
// Log all results.
const value1 = -12;
const value2 = 5;
const value3 = 18;
console.log(Math.abs(value1));
console.log(Math.min(value1, value2, value3));
console.log(Math.max(value1, value2, value3));