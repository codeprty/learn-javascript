// Array Basic Methods: Add / Remove Elements

// Exercise 1: Basic push()
// Create an array named fruits with values: "apple", "banana".
// Use push() to add "orange" to the end.
// Log the updated array.
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

// Exercise 2: push() Multiple Values
// Create an array named numbers with values: 1, 2.
// Use push() to add 3 and 4.
// Log the array.
const numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers);

// Exercise 3: Basic pop()
// Create an array named colors with values: "red", "green", "blue".
// Use pop() to remove the last element.
// Log the removed value and the updated array.
const colors = ["red", "green", "blue"];
let removedColors = colors.pop();
console.log(removedColors);
console.log(colors);

// Exercise 4: pop() on Single-Item Array
// Create an array named tasks with one value: "Homework".
// Use pop() to remove it.
// Log the array after popping.
const tasks = ["Homework"];
tasks.pop();
console.log(tasks);

// Exercise 5: Basic shift()
// Create an array named queue with values: "first", "second", "third".
// Use shift() to remove the first element.
// Log the removed value and the updated array.
const queue = ["first", "second", "third"];
let removedQueue = queue.shift();
console.log(removedQueue);
console.log(queue);

// Exercise 6: Basic unshift()
// Create an array named animals with values: "cat", "dog".
// Use unshift() to add "bird" to the beginning.
// Log the updated array.
const animals = ["cat", "dog"];
animals.unshift("bird");
console.log(animals);

// Exercise 7: unshift() Multiple Values
// Create an array named days with values: "Wed", "Thu".
// Use unshift() to add "Mon" and "Tue" at the start.
// Log the array.
const days = ["Wed", "Thu"];
days.unshift("Mon", "Tue");
console.log(days);

// Exercise 8: Basic splice() Remove
// Create an array named items with values: "pen", "pencil", "eraser".
// Use splice() to remove "pencil".
// Log the updated array.
const items = ["pen", "pencil", "eraser"];
items.splice(1, 1);
console.log(items);

// Exercise 9: splice() Add Element
// Create an array named months with values: "Jan", "Feb", "Apr".
// Use splice() to insert "Mar" at index 2.
// Log the array.
const months = ["Jan", "Feb", "Apr"];
months.splice(2, 0, "Mar");
console.log(months);

// Exercise 10: splice() Replace Element
// Create an array named scores with values: 50, 60, 70.
// Use splice() to replace 60 with 65.
// Log the updated array.
const scores = [50, 60, 70];
scores.splice(1, 1, 65);
console.log(scores);