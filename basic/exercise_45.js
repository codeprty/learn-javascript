// Set Methods

// Exercise 1: clear() Basic
// Create a set named numbers with values: 1, 2, 3.
// Use clear() to remove all elements from the set.
// Log the set.
const numbers = new Set([1, 2, 3]);
numbers.clear();
console.log(numbers);

// Exercise 2: delete() Existing Value
// Create a set named fruits with values: "apple", "banana", "orange".
// Use delete() to remove "banana".
// Log the set.
const fruits = new Set(["apple", "banana", "orange"]);
fruits.delete("banana");
console.log(fruits);

// Exercise 3: delete() Return Value
// Using the same fruits set,
// store the result of delete("apple") in a variable.
// Log the result and the updated set.
const deleteFruit = fruits.delete("apple");
console.log(deleteFruit);
console.log(fruits);

// Exercise 4: has() Basic
// Create a set named users with values: "Leon", "Claire".
// Use has() to check if "Claire" exists in the set.
// Log the result.
const users = new Set(["Leon", "Claire"]);
let result = users.has("Claire");
console.log(result);

// Exercise 5: has() Missing Value
// Using the same users set,
// check if "John" exists.
// Log the result.
result = users.has("John");
console.log(result);

// Exercise 6: forEach() Basic
// Create a set named colors with values: "red", "green", "blue".
// Use forEach() to log each value.
const colors = new Set(["red", "green", "blue"]);
colors.forEach(value => console.log(value));

// Exercise 7: values() Method
// Create a set named ids with values: 101, 102, 103.
// Use values() to get an iterator.
// Loop through it and log each value.
const ids = new Set([101, 102, 103]);
const iterator1 = ids.values();
for (let value of iterator1) {
    console.log(value);
}

// Exercise 8: keys() Method
// Using the ids set,
// use keys() to list all values.
// Log each value.
// (Note: keys() works the same as values() for sets)
const iterator2 = ids.keys();
for (let value of iterator2) {
    console.log(value);
}

// Exercise 9: entries() Method
// Create a set named letters with values: "a", "b", "c".
// Use entries() to get value-value pairs.
// Loop through and log each pair.
const letters = new Set(["a", "b", "c"]);
const iterator3 = letters.entries();
for (let value of iterator3) {
    console.log(value);
}

// Exercise 10: Combine has() and delete()
// Create a set named tasks with values: "read", "code", "sleep".
// Check if "code" exists.
// If it exists, delete it.
// Log the final set.
const tasks = new Set(["read", "code", "sleep"]);
tasks.has("code") && tasks.delete("code");
console.log(tasks);