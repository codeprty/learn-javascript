// Iterations

// Exercise 1: for Loop – Count Up
// Use a for loop to log numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 2: while Loop – Count Down
// Use a while loop to log numbers from 5 down to 1.
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// Exercise 3: do...while Loop – Run at Least Once
// Use a do...while loop to log the number 1 until it reaches 3.
let n = 1;
do {
    console.log(n);
    n++;
}
while (n <= 3);

// Exercise 4: for...of Loop – Iterate Over an Array
// Create an array named colors with values: "red", "green", "blue".
// Use a for...of loop to log each color.
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// Exercise 5: forEach() – Iterate Over an Array
// Create an array named numbers with values: 10, 20, 30.
// Use forEach() to log each number.
const numbers = [10, 20, 30];
numbers.forEach(n => console.log(n));

// Exercise 6: Iterating Over a String
// Create a string named word with the value "Hello".
// Use a for...of loop to log each character in the string.
const word = "Hello";
for (let char of word) {
    console.log(char);
}

// Exercise 7: for...in Loop – Iterate Over Object Properties
// Create an object named user with properties: name = "Makoto", age = 21.
// Use a for...in loop to log each property name.
const user = { name: "Makoto", age: 21 };
for (let key in user) {
    console.log(key);
}

// Exercise 8: Iterating Over a Set
// Create a Set named fruits with values: "apple", "banana", "orange".
// Use a for...of loop to log each fruit.
const fruits = new Set(["apple", "banana", "orange"]);
for (let value of fruits) {
    console.log(value);
}

// Exercise 9: Iterating Over a Map
// Create a Map named scores with entries: ("Alice", 80), ("Bob", 90).
// Use a for...of loop to log each key and value.
const scores = new Map([["Alice", 80], ["Bob", 90]]);
for (let [key, value] of scores) {
    console.log(key, value);
}

// Exercise 10: Homemade Iterable (Basic)
// Create an object named counter that can be iterated from 1 to 3.
// Use a for...of loop to log each value.
const counter = {
    // Symbol.iterator allows the object to be used in a for...of loop
    [Symbol.iterator]: function* () {
        for (let i = 1; i <= 3; i++) {
            yield i;
        }
    }
};

for (let value of counter) {
    console.log(value);
}