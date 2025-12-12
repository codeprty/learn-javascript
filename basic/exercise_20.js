// String Methods: Modifying / Transforming

// Exercise 1: Basic padStart()
// Create a variable id and set it to "45".
// Use padStart() to make it 5 characters long by adding zeros at the start.
// Log the result.
let id = "45";
let result = id.padStart(5, "0");
console.log(result);

// Exercise 2: padStart() for Formatting
// Create a variable code and set it to "7".
// Use padStart() to make it look like "007".
// Log the result.
let code = "7";
result = code.padStart(3, "0");
console.log(result);

// Exercise 3: Basic padEnd()
// Create a variable word and set it to "Hi".
// Use padEnd() to make it 6 characters long by adding dots at the end.
// Log the result.
let word = "Hi";
result = word.padEnd(6, ".");
console.log(result);

// Exercise 4: padEnd() for Table Formatting
// Create a variable label and set it to "Name".
// Use padEnd() to make it exactly 10 characters long by padding spaces.
// Log the result.
let label = "Name";
result = label.padEnd(10, " ");
console.log(result);

// Exercise 5: Basic toLowerCase()
// Create a variable country and set it to "MALAYSIA".
// Convert it to lowercase using toLowerCase().
// Log the result.
let country = "MALAYSIA";
result = country.toLowerCase();
console.log(result);

// Exercise 6: Basic toUpperCase()
// Create a variable city and set it to "kuala lumpur".
// Convert it to uppercase using toUpperCase().
// Log the result.
let city = "kuala lumpur";
result = city.toUpperCase();
console.log(result);

// Exercise 7: Combine toLowerCase() and includes()
// Create a variable text and set it to "Hello WORLD".
// Convert it to lowercase and then check if it includes "world".
// Log the result.
let text = "Hello WORLD";
result = text.toLowerCase().includes("world");
console.log(result);

// Exercise 8: Combine padStart() and toUpperCase()
// Create a variable code2 and set it to "ab".
// Convert it to uppercase, then pad it to 6 characters with "*", using padStart().
// Log the result.
let code2 = "ab";
result = code2.toUpperCase().padStart(6, "*");
console.log(result);

// Exercise 9: Combine padEnd() and toLowerCase()
// Create a variable username and set it to "USER".
// Convert it to lowercase and then pad it to 10 characters with "-".
// Log the result.
let username = "USER";
result = username.toLowerCase().padEnd(10, "-");
console.log(result);

// Exercise 10: Mix padStart(), padEnd(), toUpperCase(), toLowerCase()
// Create a variable product and set it to "phone".
// Convert it to uppercase.
// Then padStart() to length 8 using "#", and padEnd() to length 12 using ".".
// Log the final result.
let product = "phone";
result = product.toUpperCase().padStart(8, "#").padEnd(12, ".");
console.log(result);