// Number Basic Methods

// Exercise 1: Basic toString()
// Create a variable num and set it to 123.
// Use toString() to convert it into a string.
// Log the result.
let num = 123;
let result = num.toString();
console.log(result);

// Exercise 2: toString() with Decimal
// Create a variable price and set it to 49.99.
// Convert it to a string using toString().
// Log the result.
let price = 49.99;
result = price.toString();
console.log(result);

// Exercise 3: toString() and Check Type
// Create a variable value = 100.
// Convert it to a string using toString().
// Log typeof before and after conversion.
let value = 100;
console.log(typeof value);
let after = value.toString();
console.log(typeof after);

// Exercise 4: Basic toFixed()
// Create a variable score = 7.456.
// Use toFixed(2) to round it to 2 decimal places.
// Log the result.
let score = 7.456;
result = score.toFixed(2);
console.log(result);

// Exercise 5: toFixed() for Formatting Money
// Create a variable amount = 123.5.
// Use toFixed(2) to format it like a currency value.
// Log the result.
let amount = 123.5;
result = amount.toFixed(2);
console.log(result);

// Exercise 6: Long Decimal with toFixed()
// Create a variable measurement = 0.1234567.
// Use toFixed(4) and log the result.
let measurement = 0.1234567;
result = measurement.toFixed(4);
console.log(result);

// Exercise 7: Basic valueOf()
// Create a variable numObj = new Number(50).
// Use valueOf() to get the primitive number value.
// Log the result.
let numObj = new Number(50);
result = numObj.valueOf();
console.log(result);

// Exercise 8: valueOf() on a Normal Number
// Create a variable x = 200.
// Use valueOf() and log the output.
let x = 200;
result = x.valueOf();
console.log(result);

// Exercise 9: Combine toString() and toFixed()
// Create a variable temp = 36.789.
// First use toFixed(1), then convert the result to a string using toString().
// Log the final value.
let temp = 36.789;
result = temp.toFixed(1).toString();
console.log(result);

// Exercise 10: Combine valueOf() with Math Operation
// Create a variable n = new Number(5).
// Use valueOf() and add 10 to it.
// Log the result.
let n = new Number(5);
result = n.valueOf() + 10;
console.log(result);