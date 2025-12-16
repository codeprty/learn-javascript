// Array Sort Methods: Alphabetic

// Exercise 1: Basic sort()
// Create an array named fruits with values: "banana", "apple", "orange".
// Use sort() to arrange the items alphabetically.
// Log the sorted array.
const fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);

// Exercise 2: reverse() After sort()
// Using the fruits array,
// first sort it alphabetically, then reverse it.
// Log the result.
fruits.reverse();
console.log(fruits);

// Exercise 3: sort() Modifies Original Array
// Create an array named letters with values: "c", "a", "b".
// Use sort() on the array.
// Log the array to see that the original order has changed.
const letters = ["c", "a", "b"];
letters.sort();
console.log(letters);

// Exercise 4: toSorted() Without Modifying Original
// Create an array named cities with values: "Tokyo", "London", "Paris".
// Use toSorted() to sort the array alphabetically.
// Log both the new array and the original array.
const cities = ["Tokyo", "London", "Paris"];
console.log(cities.toSorted());
console.log(cities);

// Exercise 5: toReversed() Without Modifying Original
// Create an array named numbers with values: "one", "two", "three".
// Use toReversed() to reverse the array.
// Log both arrays.
const numbers = ["one", "two", "three"];
console.log(numbers.toReversed());
console.log(numbers);

// Exercise 6: reverse() Modifies Original
// Create an array named days with values: "Mon", "Tue", "Wed".
// Use reverse() on the array.
// Log the result.
const days = ["Mon", "Tue", "Wed"];
days.reverse();
console.log(days);

// Exercise 7: Sorting Objects by Property
// Create an array named users with objects containing name properties.
// Use sort() to sort the users alphabetically by name.
// Log the result.
const users = [
    { name: "Sarah" },
    { name: "Linda" },
    { name: "Anri" }
];
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);

// Exercise 8: Sorting Objects (Different Order)
// Using the users array,
// sort the users in reverse alphabetical order by name.
// Log the result.
users.sort((a, b) => b.name.localeCompare(a.name));
console.log(users);

// Exercise 9: Sorting Objects by String Property
// Create an array named products with objects containing a title property.
// Sort the products alphabetically by title.
// Log the result.
const products = [
    { title: "MacBook Pro" },
    { title: "iPhone 17" },
    { title: "AirPods Max" }
];
products.sort((a, b) => a.title.localeCompare(b.title));
console.log(products);

// Exercise 10: Combining toSorted() and Objects
// Using the products array,
// use toSorted() to create a new sorted array by title
// without changing the original array.
// Log both arrays.
const newProducts = products.toSorted(
    (a, b) => a.title.localeCompare(b.title)
);
console.log(newProducts);
console.log(products);