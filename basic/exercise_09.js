// Logical Operators

// Execersie 1: AND Operator (&&)
// Create two variables: isAdult = true, hasID = true.
// Use the && operator to check if both are true.
// Log the result to the console.
let isAdult = true;
let hasID = true;
let result = isAdult && hasID;
console.log(result);

// Execersie 2: AND with One False
// Create two variables: isMember = false, isVerified = true.
// Use the && operator to check if both are true.
// Log the result to the console.
let isMember = false;
let isVerified = true;
result = isMember && isVerified;
console.log(result);

// Execersie 3: OR Operator (||)
// Create two variables: isWeekend = false, isHoliday = true.
// Use the || operator to check if at least one is true.
// Log the result to the console.
let isWeekend = false;
let isHoliday = true;
result = isWeekend || isHoliday;
console.log(result);

// Execersie 4: OR with Both False
// Create two variables: hasMoney = false, hasCard = false.
// Use the || operator to check if either is true.
// Log the result to the console.
let hasMoney = false;
let hasCard = false;
result = hasMoney || hasCard;
console.log(result);

// Execersie 5: NOT Operator (!)
// Create a variable isOnline = false.
// Use the ! operator to invert the value.
// Log the result to the console.
let isOnline = false;
result = !isOnline;
console.log(result);

// Execersie 6: NOT in Condition
// Create a variable isLoggedIn = false.
// Use an if statement with the ! operator:
// If NOT isLoggedIn, log "Please log in".
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in");
}

// Execersie 7: AND + OR Combined
// Create three variables:
// age = 20, hasLicense = true, isTired = false.
// Use a logical expression to check:
// age >= 18 AND hasLicense is true OR isTired is false.
// Log the result to the console.
let age = 20;
let hasLicense = true;
let isTired = false;
result = age >= 18 && hasLicense || isTired;
console.log(result);

// Execersie 8: Nullish Coalescing Operator (??)
// Create a variable username and set it to null.
// Create a variable displayName that uses username ?? "Guest".
// Log displayName to the console.
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);

// Execersie 9: Nullish Coalescing with Undefined
// Create a variable value that is undefined.
// Use ?? to assign 100 if value is null or undefined.
// Log the final value.
let value = undefined;
value = value ?? 100;
console.log(value);

// Execersie 10: Logical OR vs Nullish Coalescing
// Create a variable score = 0.
// Create one variable result1 using score || 50.
// Create another variable result2 using score ?? 50.
// Log both result1 and result2 to compare the difference.
let score = 0;
let result1 = score || 50;
let result2 = score ?? 50;
console.log(result1);
console.log(result2);