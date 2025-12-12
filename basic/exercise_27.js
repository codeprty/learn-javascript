// Function Expressions

// Exercise 1: Function Declaration Syntax
// Create a function named greet() using a normal function declaration.
// Inside, log "Hello from a declared function!".
// Do not invoke it yet.
function greet() {
    console.log("Hello from a declared function!");
}

// Exercise 2: Function Expression Syntax
// Create a variable called greetExpr and assign it a function expression.
// The function should log "Hello from a function expression!".
// Do not invoke it yet.
const greetExpr = function() {
    console.log("Hello from a function expression!")
};

// Exercise 3: Hoisting with Function Declarations
// Call a function named testDecl() BEFORE defining it.
// Then create testDecl() as a function declaration that logs "Function declaration works before definition".
testDecl();
function testDecl() {
    console.log("Function declaration works before definition");
}

// Exercise 4: Hoisting with Function Expressions
// Try calling a function expression named testExpr() BEFORE defining it (write the call but comment it out).
// Then create testExpr as a function expression and log "Function expression defined after usage (but not hoisted)".
// testExpr(); // Error
const testExpr = function() {
    console.log("Function expression defined after usage (but not hoisted)")
};

// Exercise 5: Comparing Syntax (Declaration)
// Create a function declaration named addNumbers(a, b).
// Inside, return the sum of a and b.
// Log the result of calling it.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(8, 2));

// Exercise 6: Comparing Syntax (Expression)
// Create a function expression named subtractNumbers that takes two numbers.
// Return the result of subtracting the second number from the first.
// Log the result.
const subtractNumbers = function(a, b) { return a - b };
console.log(subtractNumbers(6, 3));

// Exercise 7: Flexibility of Function Expressions
// Create a variable operation and assign it a function expression that logs "Run operation".
// Then invoke operation().
const operation = function() { console.log("Run operation") };
operation();

// Exercise 8: Reassign Function Expression
// Create a variable action and assign it a function expression that logs "First action".
// Invoke action().
// Reassign action to a new function expression that logs "Second action".
// Invoke action() again.
let action = function() { console.log("First action") };
action();
action = function() { console.log("Second action") };
action();

// Exercise 9: Using Function Declaration as a Callback
// Create a function declaration named showMessage() that logs "Callback message".
// Then create a function run(callback) that calls the callback.
// Call run(showMessage).
function showMessage() {
    console.log("Callback message");
}

function run(callback) {
    callback();
}

run(showMessage);

// Exercise 10: Using Function Expression as a Callback
// Create a function expression called sayHi that logs "Hi there!".
// Create another function execute(fn) that invokes fn().
// Call execute(sayHi).
const sayHi = function() { console.log("Hi there!") };

function execute(fn) {
    fn();
}

execute(sayHi);