// Conditional (Ternary) Operator

// Exercise 1: Basic Ternary
// Create a variable age and set it to 18.
// Use a ternary operator to check if age >= 18.
// If true, log "Adult", else log "Minor".
let age = 18;
age = (age >= 18) ? "Adult" : "Minor";
console.log(age);

// Exercise 2: Ternary with Numbers
// Create a variable num and set it to 10.
// Use a ternary operator to check if num is even.
// Log "Even" or "Odd" accordingly.
let num = 10;
num = (num % 2 === 0) ? "Even" : "Odd";
console.log(num);

// Exercise 3: Ternary with Strings
// Create a variable username and set it to "" (empty string).
// Use a ternary operator to check if username is empty.
// If empty, log "Guest", else log username.
let username = "";
username = (username === "") ? "Guest" : username;
console.log(username);

// Exercise 4: Ternary with Positive/Negative Check
// Create a variable number and set it to -5.
// Use a ternary operator to check if number is positive.
// Log "Positive" or "Negative".
let number = -5;
number = (number > 0) ? "Positive" : "Negative";
console.log(number);

// Exercise 5: Nested Ternary
// Create a variable marks and set it to 85.
// Use a nested ternary operator:
//   If marks >= 90, log "Excellent"
//   Else if marks >= 70, log "Good"
//   Else log "Needs Improvement"
let marks = 85;
marks = (marks >= 90) ? "Excellent" : (marks >= 70) ? "Good" : "Needs Improvement";
console.log(marks);

// Exercise 6: Ternary with Boolean
// Create a variable isOnline and set it to true.
// Use a ternary operator to log "User is online" or "User is offline".
let isOnline = true;
isOnline = (isOnline) ? "User is online" : "User is offline";
console.log(isOnline);

// Exercise 7: Ternary with Multiple Conditions
// Create a variable temperature and set it to 30.
// Use a ternary operator:
//   If temperature > 35: "Hot"
//   Else if temperature >= 25: "Warm"
//   Else: "Cold"
let temperature = 30;
temperature = (temperature > 35) ? "Hot" : (temperature >= 25) ? "Warm" : "Cold";
console.log(temperature);

// Exercise 8: Ternary with Comparison
// Create a variable a = 15, b = 20.
// Use a ternary operator to log the larger number.
let a = 15;
let b = 20;
console.log((a > b) ? a : b);

// Exercise 9: Ternary with String Length
// Create a variable text = "Hello".
// Use a ternary operator to check if text length > 5.
// Log "Long text" or "Short text".
let text = "Hello";
text = (text.length > 5) ? "Long text" : "Short text";
console.log(text);

// Exercise 10: Nested Ternary with Zero Check
// Create a variable num and set it to 0.
// Use a nested ternary operator:
//   If num > 0: log "Positive"
//   Else if num < 0: log "Negative"
//   Else: log "Zero"
num = 0;
num = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(num);