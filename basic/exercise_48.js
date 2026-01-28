// Maps

// Exercise 1: Create an Empty Map
// Create a Map named userRoles.
// Log the Map to the console.
const userRoles = new Map();
console.log(userRoles);

// Exercise 2: Create a Map with Initial Values
// Create a Map named fruitPrices.
// Add the following key-value pairs when creating the Map:
// "apple" → 3
// "banana" → 2
// "orange" → 4
// Log the Map.
const fruitPrices = new Map();
fruitPrices.set("apple", 3);
fruitPrices.set("banana", 2);
fruitPrices.set("orange", 4);
console.log(fruitPrices);

// Exercise 3: Add Values to a Map
// Create an empty Map named scores.
// Add the following entries using set():
// "Alice" → 85
// "Bob" → 90
// Log the Map.
const scores = new Map();
scores.set("Alice", 85);
scores.set("Bob", 90);
console.log(scores);

// Exercise 4: Change an Existing Map Value
// Using the scores Map from the previous exercise,
// update Bob’s score to 95.
// Log the updated Map.
scores.set("Bob", 95);
console.log(scores);

// Exercise 5: Use get() to Read a Value
// Using the scores Map,
// get Alice’s score using get().
// Log the value.
console.log(scores.get("Alice"));

// Exercise 6: Map Key Types
// Create a Map named mixedKeys.
// Use a string key, a number key, and an object key.
// Assign a value to each key.
// Log the Map.
const mixedKeys = new Map();
const user = { id: 101 };
mixedKeys.set("name", "warunee thanyaphu");
mixedKeys.set(1, "first item");
mixedKeys.set(user, "accountant");
console.log(mixedKeys);

// Exercise 7: Check Map Size
// Create a Map named tasks.
// Add three different task entries.
// Log the size of the Map using the size property.
const tasks = new Map();
tasks.set(1, "dinner");
tasks.set(2, "study");
tasks.set(3, "reading");
console.log(tasks.size);

// Exercise 8: Map Insertion Order
// Create a Map named colors.
// Add the keys in this order:
// "red", "green", "blue"
// Log the Map and observe the insertion order.
const colors = new Map();
colors.set("red", true);
colors.set("green", true);
colors.set("blue", true);
console.log(colors);

// Exercise 9: Iterate Over a Map
// Create a Map named countryCodes.
// Add three country-code pairs.
// Use a loop to log each key and value.
const countryCodes = new Map();
countryCodes.set("MYR", "Malaysia");
countryCodes.set("SGP", "Singapore");
countryCodes.set("THA", "Thailand");

for (const [key, value] of countryCodes) {
    console.log(key, value);
}

// Exercise 10: Objects vs Maps (Basic Comparison)
// Create an object named userObject with two key-value pairs.
// Create a Map named userMap with the same data.
// Log both to the console and observe the differences.
const userObject = { name: "Anri Okita", age: 40 };
const userMap = new Map();
userMap.set("name", "Anri Okita");
userMap.set("age", 40);
console.log(userObject);
console.log(userMap);