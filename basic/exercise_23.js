// Number Properties

// Exercise 1: Using Number.MAX_VALUE
// Log Number.MAX_VALUE to the console.
// Create a variable num and set it to Number.MAX_VALUE + 1.
// Log the result to see if it changes.
console.log(Number.MAX_VALUE);
let num = Number.MAX_VALUE + 1;
console.log(num);

// Exercise 2: Using Number.MIN_VALUE
// Log Number.MIN_VALUE to the console.
// Create a variable tiny and set it to Number.MIN_VALUE / 2.
// Log the result.
console.log(Number.MIN_VALUE);
let tiny = Number.MIN_VALUE / 2;
console.log(tiny);

// Exercise 3: Using Number.MAX_SAFE_INTEGER
// Log Number.MAX_SAFE_INTEGER.
// Create a variable safeTest and set it to Number.MAX_SAFE_INTEGER + 1.
// Log the result.
console.log(Number.MAX_SAFE_INTEGER);
let safeTest = Number.MAX_SAFE_INTEGER + 1;
console.log(safeTest);

// Exercise 4: Using Number.MIN_SAFE_INTEGER
// Log Number.MIN_SAFE_INTEGER.
// Create a variable safeTest2 and set it to Number.MIN_SAFE_INTEGER - 1.
// Log the result.
console.log(Number.MIN_SAFE_INTEGER);
let safeTest2 = Number.MIN_SAFE_INTEGER - 1;
console.log(safeTest2);

// Exercise 5: Using Number.POSITIVE_INFINITY
// Create a variable posInf and set it to Number.POSITIVE_INFINITY.
// Log the value.
let posInf = Number.POSITIVE_INFINITY;
console.log(posInf);

// Exercise 6: Using Number.NEGATIVE_INFINITY
// Create a variable negInf and set it to Number.NEGATIVE_INFINITY.
// Log the value.
let negInf = Number.NEGATIVE_INFINITY;
console.log(negInf);

// Exercise 7: Infinity Comparison
// Compare Number.POSITIVE_INFINITY > 999999.
// Log the result.
let result = Number.POSITIVE_INFINITY > 999999;
console.log(result);

// Exercise 8: Using Number.NaN
// Create a variable notNum and set it to Number.NaN.
// Log the value.
let notNum = Number.NaN;
console.log(notNum);

// Exercise 9: Checking NaN Behavior
// Create a variable testNaN = Number.NaN.
// Compare testNaN === Number.NaN and log the result (see what happens).
let testNaN = Number.NaN;
result = testNaN === Number.NaN;
console.log(result);

// Exercise 10: Combine Multiple Properties
// Log Number.MAX_VALUE and Number.POSITIVE_INFINITY.
// Then create a variable example = Number.MAX_VALUE * 2.
// Log example to see if it becomes infinity.
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
let example = Number.MAX_VALUE * 2;
console.log(example);