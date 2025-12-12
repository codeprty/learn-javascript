// Functions

// Exercise 1: Basic Function
// Create a function named sayHello().
// Inside, log "Hello!" to the console.
// Do not call the function yet.
function sayHello() {
    console.log("Hello!");
}

// Exercise 2: Function Invocation
// Create a function named greet() that logs "Welcome!".
// Invoke the function after defining it.
function greet() {
    console.log("Welcome");
}
greet();

// Exercise 3: Function with Parameters
// Create a function named showName(name).
// Inside, log "Your name is: " followed by the name parameter.
// Invoke the function and pass any name as an argument.
function showName(name) {
    console.log("Your name is: ", name);
}
showName("Anri Okita");

// Exercise 4: Basic Arrow Function
// Create an arrow function named add that takes two parameters.
// Inside, return the sum of the two numbers.
// Log the returned value by calling the function.
const add = (a, b) => a + b;
console.log(add(2, 4));

// Exercise 5: Arrow Function with One Parameter
// Create an arrow function named square that takes one number.
// Return the number multiplied by itself.
// Log the result of calling the function.
const square = (num) => num * num;
console.log(square(4));

// Exercise 6: Local Variables Inside Function
// Create a function named printAge().
// Inside, create a variable age = 25.
// Log the value of age.
// Try logging age outside the function (write the line but comment it out).
function printAge() {
    let age = 25;
    console.log(age);
}
// console.log(age); // Error

// Exercise 7: Parameters vs Arguments
// Create a function named multiply(a, b).
// Inside, log the result of a * b.
// Call the function using arguments 4 and 5.
function multiply(a, b) {
    console.log(a * b);
}
multiply(4, 5);

// Exercise 8: Function Returning a Value
// Create a function named getMessage().
// Inside, return the string "Function returned this!".
// Log the returned value.
function getMessage() {
    return "Function returned this!";
}
console.log(getMessage());

// Exercise 9: Function Used as a Variable
// Create a function named double(n) that returns n * 2.
// Create a variable result and set it equal to double(10).
// Log result.
function double(n) {
    return n *2;
}
let result = double(10);
console.log(result);

// Exercise 10: Arrow Function Stored in Variable
// Create an arrow function stored in a variable called sayBye.
// The function should log "Goodbye!".
// Invoke sayBye() after defining it.
let sayBye = () => console.log("Goodbye!");
sayBye();