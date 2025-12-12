// String Methods: Modifying / Transforming

// Exercise 1: Basic trim()
// Create a variable message and set it to "   Hello World   ".
// Use trim() to remove spaces at the start and end.
// Log the result.
let message = "   Hello World   ";
let result = message.trim();
console.log(result);

// Exercise 2: trim() Before Comparison
// Create a variable input and set it to "   yes   ".
// Trim the value and check if it equals "yes".
// Log the result.
let input = "   yes   ";
result = input.trim() === "yes";
console.log(result);

// Exercise 3: Basic trimStart()
// Create a variable greeting and set it to "   Welcome".
// Use trimStart() to remove spaces only at the beginning.
// Log the result.
let greeting = "   Welcome";
result = greeting.trimStart();
console.log(result);

// Exercise 4: trimStart() for Formatting
// Create a variable line and set it to "     Item: Book".
// Use trimStart() to clean up the left spacing.
// Log the result.
let line = "     Item: Book";
result = line.trimStart();
console.log(result);

// Exercise 5: Basic trimEnd()
// Create a variable note and set it to "Done     ".
// Use trimEnd() to remove trailing spaces.
// Log the result.
let note = "Done     ";
result = note.trimEnd();
console.log(result);

// Exercise 6: trimEnd() for Cleaning User Input
// Create a variable username and set it to "User123   ".
// Use trimEnd() to remove the spaces at the end.
// Log the result.
let username = "User123   ";
result = username.trimEnd();
console.log(username);

// Exercise 7: Combine trimStart() and trimEnd()
// Create a variable text and set it to "   Hello   ".
// First use trimStart(), then use trimEnd().
// Log the final result.
let text = "   Hello   ";
result = text.trimStart().trimEnd();
console.log(result);

// Exercise 8: Using trim() Before Storing
// Create a variable rawName and set it to "   Anri   ".
// Use trim() to clean the value before logging or storing it.
// Log the result.
let rawName = "   Anri   ";
result = rawName.trim();
console.log(result);

// Exercise 9: Comparing Trimmed Length
// Create a variable phrase and set it to "   JavaScript   ".
// Use trim() to remove spaces.
// Log the length before trimming and after trimming.
let phrase = "   JavaScript   ";

let before = phrase.length;
console.log(before);

let after = phrase.trim().length;
console.log(after);

// Exercise 10: Combine trim(), startsWith(), endsWith()
// Create a variable data and set it to "   hello   ".
// Trim the string.
// Then check if it starts with "h" and ends with "o".
// Log both results.
let data = "   hello   ";
let trimData = data.trim();
let result1 = trimData.startsWith("h");
let result2 = trimData.endsWith("o");
console.log(result1);
console.log(result2);