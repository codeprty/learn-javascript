// Debugging

// Exercise 1: Basic console.log
// Create a variable named message with the value "Hello Debugging".
// Use console.log to display the message in the console.
const message = "Hello Debugging";
console.log(message);

// Exercise 2: Using console.warn
// Create a variable named temperature with the value 45.
// If the temperature is greater than 40, use console.warn to display "High temperature warning!".
const temperature = 45;
if (temperature > 40) {
    console.warn("High temperature warning!");
} 

// Exercise 3: Using console.error
// Create a variable named username with the value "" (empty string).
// If the username is empty, use console.error to display "Username cannot be empty".
const username = "";
if (!username) {
    console.error("Username cannot be empty");
} 

// Exercise 4: Using console.table with Array
// Create an array named fruits with values: "Apple", "Banana", "Orange".
// Use console.table to display the fruits array in table format.
const fruits = ["Apple", "Banana", "Orange"];
console.table(fruits);

// Exercise 5: Using console.table with Object
// Create an object named student with properties: name = "Warunee", age = 20, course = "SE".
// Use console.table to display the student object.
const student = { name: "Warunee", age: 20, course: "SE" };
console.table(student);

// Exercise 6: Setting a Breakpoint in VSCode
// Create a variable named number with the value 10.
// Use console.log to display the number.
// Set a breakpoint on the console.log line in VSCode.
// Run the program and observe where execution pauses.
const number = 10;
console.log(number);

// Exercise 7: Using debugger Statement
// Create a variable named score with the value 80.
// Add a debugger statement on the next line.
// After the debugger statement, use console.log to display the score.
// Run the program in debug mode and observe what happens.
const score = 80;
debugger;
console.log(score);

// Exercise 8: Step Over (F10)
// Create a function named greet that logs "Hello Student" using console.log.
// Call the greet function.
// Set a breakpoint on the function call.
// Use Step Over (F10) in VSCode and observe how it executes.
function greet() {
    console.log("Hello Student");
}

greet();

// Exercise 9: Step Into (F11)
// Create a function named calculate that logs "Inside function" using console.log.
// Call the calculate function.
// Set a breakpoint on the function call.
// Use Step Into (F11) to enter the function and observe the execution.
function calculate() {
    console.log("Inside function");
}

calculate();

// Exercise 10: Step Out (Shift + F11) and Continue (F5)
// Create a function named showMessage that logs "Start" and then logs "End".
// Call the showMessage function.
// Set a breakpoint inside the function.
// Use Step Out (Shift + F11) to exit the function.
// Then use Continue (F5) to run until the next breakpoint or end of program.
function showMessage() {
    console.log("Start");
    console.log("End");
}

showMessage();