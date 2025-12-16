// Array Basic Methods: Convert / Transform / Copy

// Exercise 1: Basic toString()
// Create an array named fruits with values: "apple", "banana", "orange".
// Convert the array to a string using toString().
// Log the result.
const fruits = ["apple", "banana", "orange"];
const newFruits = fruits.toString();
console.log(newFruits);

// Exercise 2: toString() with Numbers
// Create an array named scores with values: 80, 90, 70.
// Use toString() to convert it into a string.
// Log the result.
const scores = [80, 90, 70];
const newScores = scores.toString();
console.log(newScores);

// Exercise 3: Basic join()
// Create an array named colors with values: "red", "green", "blue".
// Use join(", ") to combine the elements into one string.
// Log the result.
const colors = ["red", "green", "blue"];
const newColors = colors.join(", ");
console.log(newColors);

// Exercise 4: join() with Different Separator
// Create an array named words with values: "Learn", "JavaScript", "Now".
// Use join(" - ") to join the elements.
// Log the result.
const words = ["Learn", "JavaScript", "Now"];
const newWords = words.join(" - ");
console.log(newWords);

// Exercise 5: Basic flat()
// Create a nested array named numbers = [1, [2, 3], [4, 5]].
// Use flat() to flatten the array one level.
// Log the result.
const numbers = [1, [2, 3], [4, 5]];
const newNumbers = numbers.flat();
console.log(newNumbers);

// Exercise 6: flat() with Multiple Nested Arrays
// Create an array named matrix = [[1, 2], [3, 4], [5, 6]].
// Use flat() to convert it into a single array.
// Log the result.
const matrix = [[1, 2], [3, 4], [5, 6]];
const newMatrix = matrix.flat();
console.log(newMatrix);

// Exercise 7: Basic toSpliced()
// Create an array named items with values: "pen", "pencil", "eraser".
// Use toSpliced() to remove "pencil" without changing the original array.
// Log the new array and the original array.
const items = ["pen", "pencil",  "eraser"];
const newItems = items.toSpliced(1, 1);
console.log(items);
console.log(newItems);

// Exercise 8: toSpliced() to Add Item
// Create an array named days with values: "Mon", "Tue", "Thu".
// Use toSpliced() to insert "Wed" at index 2.
// Log the new array.
const days = ["Mon", "Tue", "Thu"];
const newDays = days.toSpliced(2, 0, "Wed");
console.log(newDays);

// Exercise 9: Basic slice()
// Create an array named letters with values: "a", "b", "c", "d", "e".
// Use slice() to get elements from index 1 to 4.
// Log the result.
const letters = ["a", "b", "c", "d", "e"];
const newLetters = letters.slice(1, 4);
console.log(newLetters);

// Exercise 10: slice() Without Changing Original
// Create an array named nums with values: 10, 20, 30, 40.
// Use slice() to copy the first two elements.
// Log the new array and the original array.
const nums = [10, 20, 30, 40];
const newNums = nums.slice(0, 2);
console.log(nums);
console.log(newNums);