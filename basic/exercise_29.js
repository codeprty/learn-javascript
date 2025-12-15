// Arrow Functions

// Exercise 1: Before Arrow Function (Normal Function)
// Create a normal function named sayHello.
// Inside, return the string "Hello!".
// Call the function and log the result.
function sayHello() {
    return "Hello!";
}
console.log(sayHello());

// Exercise 2: With Arrow Function
// Rewrite Exercise 1 using an arrow function named sayHelloArrow.
// Call the arrow function and log the result.
let sayHelloArrow = () => {
    return "Hello!";
}
console.log(sayHelloArrow());

// Exercise 3: Arrow Function with One Parameter
// Create an arrow function named greet that takes one parameter name.
// Return "Hello, " followed by the name.
// Call the function with any name and log the result.
let greet = (name) => {
    return "Hello, " + name;
}
console.log(greet("Anri Okita"));

// Exercise 4: Arrow Function with Multiple Parameters
// Create an arrow function named add that takes two numbers.
// Return their sum.
// Call the function and log the result.
let add = (a, b) => {
    return a + b;
}
console.log(add(4, 2));

// Exercise 5: Arrow Function Default Return (No Curly Brackets)
// Create an arrow function named double that takes one number.
// Return the number multiplied by 2 without using curly brackets.
// Log the result of calling it.
let double = (num) => num * 2;
console.log(double(4));

// Exercise 6: Arrow Function with Curly Brackets and return
// Create an arrow function named square that takes one number.
// Return the squared number using the return keyword and curly brackets.
// Log the result of calling the function.
let square = (num) => { return num * num; }
console.log(square(2));

// Exercise 7: Arrow Function Must Be Defined First
// Try calling an arrow function named showMessage before defining it (write the call but comment it out).
// Then define showMessage as an arrow function that logs "Arrow function defined first".
//showMessage();
let showMessage = () => console.log("Arrow function defined first");

// Exercise 8: Arrow Function Stored in a Variable
// Create a variable sayBye and assign it an arrow function.
// The function should log "Goodbye!".
// Call sayBye().
let sayBye = () => console.log("GoodBye!");
sayBye();

// Exercise 9: Arrow Function as a Value
// Create an arrow function named multiply that returns a * b.
// Store the result of multiply(3, 4) in a variable result.
// Log result.
let multiply = (a, b) => a * b;
let result = multiply(3, 4);
console.log(result);

// Exercise 10: Comparing Return Styles
// Create two arrow functions:
// one named getFive that returns 5 without curly brackets,
// another named getTen that returns 10 using curly brackets and return.
// Call both functions and log their results.
let getFive = () => 5;
let getTen = () => { return 10; }
console.log(getFive());
console.log(getTen());