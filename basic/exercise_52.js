// Iterators

// Exercise 1: next() Method – Basic
// Create an array named numbers with values: 1, 2, 3.
// Create an iterator from the array.
// Call next() once and log the result.
const numbers = [1, 2, 3];
const iteratorNumbers = Iterator.from(numbers);
console.log(iteratorNumbers.next());

// Exercise 2: next() Method – Multiple Calls
// Create an array named letters with values: "a", "b", "c".
// Create an iterator from the array.
// Call next() three times and log each result.
const letters = ["a", "b", "c"];
const iteratorLetters = Iterator.from(letters);
console.log(iteratorLetters.next());
console.log(iteratorLetters.next());
console.log(iteratorLetters.next());

// Exercise 3: iterator.from() Method – Basic
// Create an array named scores with values: 10, 20, 30.
// Use iterator.from() to create an iterator from the array.
// Use next() to get the first value and log it.
const scores = [10, 20, 30];
const iteratorScores = Iterator.from(scores);
console.log(iteratorScores.next());

// Exercise 4: map() Method – Basic
// Create an array named numbers with values: 1, 2, 3.
// Convert it to an iterator using iterator.from().
// Use map() to multiply each number by 2.
// Convert the result to an array and log it.
const nums = [1, 2, 3];
const iteratorNums = Iterator.from(nums).map(n => n * 2);
const newNums = [...iteratorNums];
console.log(newNums);

// Exercise 5: filter() Method – Basic
// Create an array named ages with values: 12, 18, 21.
// Convert it to an iterator using iterator.from().
// Use filter() to keep only values that are 18 or above.
// Convert the result to an array and log it.
const ages = [12, 18, 21];
const iteratorAges = Iterator.from(ages).filter(age => age >= 18);
const newAges = [...iteratorAges];
console.log(newAges);

// Exercise 6: some() Method – Basic
// Create an array named temperatures with values: 20, 25, 30.
// Convert it to an iterator using iterator.from().
// Use some() to check if at least one value is above 28.
// Log the result.
const temperatures = [20, 25, 30];
const iteratorTemperatures = Iterator.from(temperatures).some(value => value > 28);
console.log(iteratorTemperatures);

// Exercise 7: every() Method – Basic
// Create an array named marks with values: 60, 70, 80.
// Convert it to an iterator using iterator.from().
// Use every() to check if all values are above 50.
// Log the result.
const marks = [60, 70, 80];
const iteratorMarks = Iterator.from(marks).every(value => value > 50);
console.log(iteratorMarks);

// Exercise 8: reduce() Method – Basic
// Create an array named prices with values: 5, 10, 15.
// Convert it to an iterator using iterator.from().
// Use reduce() to calculate the total sum.
// Log the result.
const prices = [5, 10, 15];
const iteratorPrices = Iterator.from(prices).reduce((sum, value) => sum + value);
console.log(iteratorPrices);

// Exercise 9: take() Method – Basic
// Create an array named sequence with values: 1, 2, 3, 4, 5.
// Convert it to an iterator using iterator.from().
// Use take() to get the first 3 values.
// Convert the result to an array and log it.
const sequence = [1, 2, 3, 4, 5];
const iteratorSequence = Iterator.from(sequence).take(3);
const newSequence = [...iteratorSequence];
console.log(newSequence);

// Exercise 10: drop() Method – Basic
// Create an array named orders with values: 1, 2, 3, 4, 5.
// Convert it to an iterator using iterator.from().
// Use drop() to skip the first 2 values.
// Convert the result to an array and log it.
const orders = [1, 2, 3, 4, 5];
const iteratorOrders = Iterator.from(orders).drop(2);
const newOrders = [...iteratorOrders];
console.log(newOrders);