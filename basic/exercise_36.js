// Array Basic Methods: Access / Search / Combine

// Exercise 1: Array length
// Create an array named numbers with values: 10, 20, 30, 40.
// Use the length property to log how many elements are in the array.
const numbers = [10, 20, 30, 40];
console.log(numbers.length);

// Exercise 2: Access First Element with at()
// Using the numbers array,
// use at(0) to get the first element.
// Log the result.
let firstElement = numbers.at(0);
console.log(firstElement);

// Exercise 3: Access Last Element with at()
// Using the numbers array,
// use at(-1) to get the last element.
// Log the result.
let lastElement = numbers.at(-1);
console.log(lastElement);

// Exercise 4: Change Element Using Bracket Notation
// Using the numbers array,
// access the element at index 1 and change it to 25.
// Log the updated array.
numbers[1] = 25;
console.log(numbers);

// Exercise 5: Check if Value is an Array
// Create a variable items and set it to [1, 2, 3].
// Use Array.isArray() to check if it is an array.
// Log the result.
const items = [1, 2, 3];
console.log(Array.isArray(items));

// Exercise 6: isArray() with Non-Array
// Create a variable value and set it to "Hello".
// Use Array.isArray() to check the value.
// Log the result.
const value = "Hello";
console.log(Array.isArray(value));

// Exercise 7: Basic concat()
// Create two arrays: a = [1, 2] and b = [3, 4].
// Use concat() to combine them into a new array.
// Log the result.
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c);

// Exercise 8: concat() with More Arrays
// Create three arrays: x = ["a"], y = ["b"], z = ["c"].
// Combine them using concat().
// Log the result.
const x = ["a"];
const y = ["b"];
const z = ["c"];
const arr = x.concat(y, z);
console.log(arr);

// Exercise 9: concat() with Values
// Create an array named base = [10, 20].
// Use concat() to add the values 30 and 40.
// Log the result.
const base = [10, 20];
const result = base.concat(30, 40);
console.log(result);

// Exercise 10: Combine length and concat()
// Create an array named list1 with values: "pen", "pencil".
// Create another array named list2 with values: "eraser".
// Concatenate both arrays.
// Log the new array and its length.
const list1 = ["pen", "pencil"];
const list2 = ["eraser"];
const newArr = list1.concat(list2);
console.log(newArr);
console.log(newArr.length);