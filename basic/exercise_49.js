// Map Methods

// Exercise 1: Map.has() Basic
// Create a Map named userRoles.
// Add the following entries:
// "admin" → "Full Access"
// "editor" → "Edit Content"
// Use has() to check if the key "admin" exists.
// Log the result.
const userRoles = new Map();
userRoles.set("admin", "Full Access");
userRoles.set("editor", "Edit Content");
console.log(userRoles.has("admin"));

// Exercise 2: Map.get() + Map.delete()
// Create a Map named scores.
// Add these entries:
// "Alice" → 85
// "Bob" → 90
// Delete the entry with key "Alice" using delete().
// Log the Map after deletion.
const scores = new Map();
scores.set("Alice", 85);
scores.set("Bob", 90)
scores.delete("Alice");
console.log(scores);

// Exercise 3: Map.clear() Basic
// Create a Map named settings.
// Add at least two key-value pairs of your choice.
// Use clear() to remove all entries.
// Log the Map.
const settings = new Map();
settings.set("Mode", "Dark");
settings.set("Sound", "On");
settings.clear();
console.log(settings);

// Exercise 4: Map.keys()
// Create a Map named fruits.
// Add these entries:
// "apple" → 5
// "banana" → 3
// "orange" → 7
// Get all keys using keys().
// Log each key.
const fruits = new Map();
fruits.set("apple", 5);
fruits.set("banana", 3);
fruits.set("orange", 7);

for (const key of fruits.keys()) {
    console.log(key);
}

// Exercise 5: Map.values()
// Create a Map named prices.
// Add these entries:
// "pen" → 1.5
// "notebook" → 4
// "eraser" → 0.5
// Get all values using values().
// Log each value.
const prices = new Map();
prices.set("pen", 1.5);
prices.set("notebook", 4);
prices.set("eraser", 0.5);

for (const value of prices.values()) {
    console.log(value);
}

// Exercise 6: Map.entries()
// Create a Map named countries.
// Add these entries:
// "MY" → "Malaysia"
// "JP" → "Japan"
// Use entries() to loop through the Map.
// Log each key and value in this format:
// "Code: MY, Country: Malaysia"
const countries = new Map();
countries.set("MY", "Malaysia");
countries.set("JP", "Japan");

for (const [key, value] of countries.entries()) {
    console.log(`Code: ${key}, Country: ${value}`);
}

// Exercise 7: Map.forEach() Basic
// Create a Map named ages.
// Add these entries:
// "John" → 20
// "Sarah" → 22
// Use forEach() to log each name and age in this format:
// "John is 20 years old"
const ages = new Map();
ages.set("John", 20);
ages.set("Sarah", 22);

ages.forEach(function(value, key) {
    console.log(`${key} is ${value} years old`);
})

// Exercise 8: Map.has() Check Before Use
// Create a Map named inventory.
// Add these entries:
// "laptop" → 10
// "mouse" → 25
// Check if the key "keyboard" exists using has().
// Log a message saying whether it exists or not.
const inventory = new Map();
inventory.set("laptop", 10);
inventory.set("mouse", 25);
inventory.has("keyboard") ? console.log("exists") : console.log("does not exist");

// Exercise 9: Map.groupBy() Basic
// Create an array named numbers with values: 1, 2, 3, 4, 5, 6.
// Use Map.groupBy() to group the numbers into:
// "even" and "odd"
// Log the resulting Map.
const numbers = [1, 2, 3, 4, 5, 6];
const evenOrOdd = num => num % 2 === 0 ? "even" : "odd";
const result = Map.groupBy(numbers, evenOrOdd);
console.log(result);

// Exercise 10: Object.groupBy vs Map.groupBy
// Create an array named students with objects:
// { name: "Ali", grade: "A" }
// { name: "Siti", grade: "B" }
// { name: "John", grade: "A" }
// Use Object.groupBy() to group students by grade.
// Use Map.groupBy() to group students by grade.
// Log both results and observe the difference in output type.
const students = [
    { name: "Ali", grade: "A" },
    { name: "Siti", grade: "B" },
    { name: "John", grade: "A" }
];

const objectResult = Object.groupBy(students, student => student.grade);
const mapResult = Map.groupBy(students, student => student.grade);
console.log(objectResult);
console.log(mapResult);