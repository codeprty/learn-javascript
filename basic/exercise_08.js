// Boolean

// Exercise 1: True or False
// Create a variable isRaining and set it to true.
// Log the value of isRaining to the console.
let isRaining = true;
console.log(isRaining);

// Exercise 2: Boolean from Comparison
// Create two variables: a = 10, b = 20.
// Create a variable result that stores a < b.
// Log result to the console.
let a = 10;
let b = 20;
let result = a < b;
console.log(result);

// Exercise 3: Boolean from Equality
// Create two variables: x = 5, y = "5".
// Create a variable isEqual that stores x == y.
// Log isEqual to the console.
let x = 5;
let y = "5";
let isEqual = x == y;
console.log(isEqual);

// Exercise 4: Boolean from Strict Equality
// Create two variables: x = 5, y = "5".
// Create a variable isStrictEqual that stores x === y.
// Log isStrictEqual to the console.
x = 5;
y = "5";
let isStrictEqual = x === y;
console.log(isStrictEqual);

// Exercise 5: Boolean in If Statement
// Create a variable isOnline and set it to true.
// Use an if statement to log "User is online" if isOnline is true.
let isOnline = true;
if (isOnline) {
    console.log("User is online");
}

// Exercise 6: Boolean in If Statement (False Case)
// Create a variable isLoggedIn and set it to false.
// Use an if statement to log "Access granted" if isLoggedIn is true.
// Test what happens when the value is false.
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Access granted");
}

// Exercise 7: Boolean() Function
// Create a variable value = 0.
// Use the Boolean() function to convert value to true or false.
// Log the result to the console.
let value = 0;
result = Boolean(value);
console.log(result);

// Exercise 8: Truthy Values
// Create a variable name = "John".
// Convert it to boolean using Boolean().
// Log the result to the console.
// (Notice that non-empty strings are true.)
let name = "John";
result = Boolean(name);
console.log(result);

// Exercise 9: Falsy Values
// Create a variable emptyString = "".
// Convert it to boolean using Boolean().
// Log the result to the console.
// (Notice that empty strings are false.)
let emptyString = "";
result = Boolean(emptyString);
console.log(result);

// Exercise 10: Boolean in a Simple Expression
// Create two variables: age = 20, requiredAge = 18.
// Create a variable canVote = age >= requiredAge.
// Log canVote to the console.
// (It should return true or false based on the comparison.)
let age = 20;
let requiredAge = 18;
let canVote = age >= requiredAge;
console.log(canVote);