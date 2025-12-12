// Function Parameters

// Exercise 1: Parameter vs Argument
// Create a function named showMessage(message).
// Inside, log the message parameter.
// Call the function and pass "Hello!" as an argument.
function showMessage(message) {
    console.log(message);
}
showMessage("Hello!");

// Exercise 2: Multiple Parameters
// Create a function named introduce(name, age).
// Inside, log "My name is ___ and I am ___ years old" using the parameters.
// Call the function with any name and age.
function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old`);
}
introduce("Anri Okita", 39);

// Exercise 3: Missing Arguments
// Create a function named display(a, b).
// Inside, log both a and b.
// Call display() without passing any arguments and observe the output.
function display(a, b) {
    console.log(a, b);
}
display();

// Exercise 4: Default Parameter Value
// Create a function named greet(name = "Guest").
// Log "Hello, " followed by the name.
// Call the function without an argument.
function greet(name = "Guest") {
    console.log("Hello, ", name);
}
greet();

// Exercise 5: Default Parameter for Numbers
// Create a function named add(x = 10, y = 5).
// Return the result of x + y.
// Log the result of calling add() with no arguments.
function add(x = 10, y = 5) {
    return x + y;
}
console.log(add());

// Exercise 6: Parameter Rules (Order Matters)
// Create a function named multiply(a, b = 2).
// Return a * b.
// Call multiply(5) and log the result.
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));

// Exercise 7: Basic Rest Parameter
// Create a function named sum(...numbers).
// Inside, log the array of numbers received.
// Call sum(1, 2, 3, 4).
function sum(...numbers) {
    console.log(numbers);
}
sum(1, 2, 3, 4);

// Exercise 8: Rest Parameter with Loop
// Create a function named printAll(...items).
// Use a loop to log each item individually.
// Call printAll("apple", "banana", "orange").
function printAll(...items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
printAll("apple", "banana", "orange");

// Exercise 9: Combine Normal + Rest Parameters
// Create a function named show(first, ...others).
// Log the first parameter, then log the others array.
// Call show("A", "B", "C", "D").
function show(first, ...others) {
    console.log(first);
    console.log(others);
}
show ("A", "B", "C", "D");

// Exercise 10: Parameters + Return Value
// Create a function named calculateTotal(price, quantity = 1, ...extraFees).
// Add price * quantity and then add all extraFees.
// Log the result of calling calculateTotal(10, 2, 1, 3).
function calculateTotal(price, quantity = 1, ...extraFees) {
    let total = price * quantity;
    for (let i = 0; i < extraFees.length; i++) {
        total += extraFees[i];
    }
    return total;
}
console.log(calculateTotal(10, 2, 1, 3));