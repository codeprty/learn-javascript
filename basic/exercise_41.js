// Array Sort Methods: Numeric

// Exercise 1: Basic Numeric Sort (Ascending)
// Create an array named numbers with values: 40, 10, 100, 25.
// Sort the numbers in ascending order.
// Log the result.
const numbers = [40, 10, 100, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Exercise 2: Numeric Sort (Descending)
// Using the same numbers array,
// sort the numbers in descending order.
// Log the result.
numbers.sort((a, b) => b - a);
console.log(numbers);

// Exercise 3: Numeric Sort Does Not Work Like Alphabetic
// Create an array named testNums with values: 1, 20, 3, 100.
// Sort the array without a compare function.
// Log the result and observe the order.
const testNums = [1, 20, 3, 100];
testNums.sort();
console.log(testNums);

// Exercise 4: Random Sort
// Create an array named items with values: 1, 2, 3, 4, 5.
// Use sort() with Math.random() to shuffle the array.
// Log the result.
const items = [1, 2, 3, 4, 5];
items.sort(() => 0.5 - Math.random());
console.log(items);

// Exercise 5: Using Math.min()
// Create an array named scores with values: 88, 92, 76, 95.
// Use Math.min() with the spread operator to find the smallest value.
// Log the result.
const scores = [88, 92, 76, 95];
let smallest = Math.min(...scores);
console.log(smallest);

// Exercise 6: Using Math.max()
// Using the same scores array,
// use Math.max() to find the largest value.
// Log the result.
let largest = Math.max(...scores);
console.log(largest);

// Exercise 7: Find Minimum (Home Made)
// Create an array named values with values: 5, 3, 9, 1.
// Write a loop to find the smallest number manually.
// Log the smallest number.
const values = [5, 3, 9, 1];
let min = values[0];
for (let i = 1; i < values.length; i++) {
    if (values[i] < min) {
        min = values[i];
    }
}
console.log(min);

// Exercise 8: Find Maximum (Home Made)
// Using the same values array,
// write a loop to find the largest number manually.
// Log the largest number.
let max = values[0];
for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}
console.log(max);

// Exercise 9: Compare Math.min() vs Home Made
// Create an array named data with values: 12, 45, 7, 30.
// Find the minimum using Math.min().
// Then find the minimum using your own loop.
// Log both results.
const data = [12, 45, 7, 30];

let minimum1 = Math.min(...data);
console.log(minimum1);

let minimum2 = data[0];
for (let i = 1; i < data.length; i++) {
    if (data[i] < minimum2) {
        minimum2 = data[i];
    }
}
console.log(minimum2);

// Exercise 10: Combine Sorting and Min/Max
// Create an array named prices with values: 300, 150, 450, 200.
// Sort the array numerically.
// Log the sorted array.
// Then log the minimum and maximum values.
const prices = [300, 150, 450, 200];

prices.sort((a, b) => a - b);
console.log(prices);

let minimum = Math.min(...prices);
console.log(minimum);

let maximum = Math.max(...prices);
console.log(maximum);