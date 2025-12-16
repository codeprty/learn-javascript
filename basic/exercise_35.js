// Arrays

// Exercise 1: Create an Array
// Create an array named fruits with values: "apple", "banana", "orange".
// Log the array.
const fruits = ["apple", "banana", "orange"];
console.log(fruits);

// Exercise 2: Access Array Elements
// Using the fruits array,
// access and log the first element.
// Access and log the last element.
let firstElement = fruits[0];
let lastElement = fruits[fruits.length - 1];
console.log(firstElement);
console.log(lastElement);

// Exercise 3: Change an Array Element
// Using the fruits array,
// change "banana" to "mango".
// Log the updated array.
fruits[1] = "mango";
console.log(fruits);

// Exercise 4: Array Length
// Using the fruits array,
// log how many elements it has using length.
console.log(fruits.length);

// Exercise 5: Convert Array to String
// Create an array named colors with values: "red", "green", "blue".
// Convert the array to a string using toString().
// Log the result.
const colors = ["red", "green", "blue"];
let convertStr = colors.toString();
console.log(convertStr);

// Exercise 6: Array with Object Elements
// Create an array named users.
// Each element should be an object with name and age properties.
// Log the array.
const users = [
    { name: "Tera", age: 25 },
    { name: "Jenna", age: 30 },
    { name: "Amber", age: 22 }
];
console.log(users);

// Exercise 7: Access Object Inside Array
// Using the users array,
// access and log the name of the first user.
console.log(users[0].name);

// Exercise 8: Difference Between Array and Object
// Create an array named numbers with values 1, 2, 3.
// Create an object named numberObj with properties a = 1, b = 2, c = 3.
// Log both and observe the difference.
const numbers = [1, 2, 3];
const numberObj = {a: 1, b: 2, c: 3};
console.log(numbers);
console.log(numberObj);

// Exercise 9: Nested Array
// Create an array named matrix with values: [1, 2], [3, 4].
// Access and log the number 4.
const matrix = [[1, 2], [3, 4]];
console.log(matrix[1][1]);

// Exercise 10: Nested Objects in Array
// Create an array named products.
// Each product should be an object with name and price.
// Access and log the price of the second product.
const products = [
    { name: "macbook", price: 4499 },
    { name: "iphone", price: 3999 },
    { name: "airpods", price: 999 }
];
console.log(products[1].price);