// Sets

// Exercise 1: Create a Set
// Create a set named colors with values: "red", "green", "blue".
// Log the set.
const colors = new Set(["red", "green", "blue"]);
console.log(colors);

// Exercise 2: Create an Empty Set
// Create an empty set named numbers using new Set().
// Log the set.
const numbers = new Set();
console.log(numbers);

// Exercise 3: Add Values to a Set
// Using the numbers set,
// add the values 1, 2, and 3 using add().
// Log the updated set.
numbers.add(1);
numbers.add(2);
numbers.add(3);
console.log(numbers);

// Exercise 4: Add Duplicate Values
// Using the same numbers set,
// try adding the value 2 again.
// Log the set and observe what happens.
numbers.add(2);
console.log(numbers);

// Exercise 5: Create Set from Array
// Create an array named fruits with values: "apple", "banana", "apple", "orange".
// Create a set from the array using new Set().
// Log the set.
const fruits = ["apple", "banana", "apple", "orange"];
const newFruits = new Set(fruits);
console.log(newFruits);

// Exercise 6: List Set Elements using for...of
// Using the fruits set,
// use a for...of loop to log each element.
for (let element of newFruits) {
    console.log(element);
}

// Exercise 7: Check Set Size
// Create a set named ids with values: 101, 102, 103.
// Log the size of the set using size.
const ids = new Set([101, 102, 103]);
console.log(ids.size);

// Exercise 8: Add String Values
// Create a set named users.
// Add the names "Leon", "Claire", and "Leon" using add().
// Log the set.
const users = new Set();
users.add("Leon");
users.add("Claire");
users.add("Leon");
console.log(users);

// Exercise 9: Convert Set to Array
// Create a set named letters with values: "a", "b", "c".
// Convert the set into an array using spread (...).
// Log the array.
const letters = new Set(["a", "b", "c"]);
const newLetters = [...letters];
console.log(newLetters);

// Exercise 10: List Set Elements using forEach()
// Using the letters set,
// use forEach() to log each value.
newLetters.forEach(value => console.log(value));