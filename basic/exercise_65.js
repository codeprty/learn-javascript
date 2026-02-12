// Error Statements

// Exercise 1: Basic try and catch
// Write a try block.
// Inside the try block, throw a new Error with the message "Something went wrong".
// Write a catch block that logs the error message.
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error.message);
}

// Exercise 2: try block with Reference Error
// Write a try block.
// Inside the try block, log a variable that has not been declared.
// Write a catch block that logs "Error caught".
// Observe what happens.
try {
    console.log(test);
} catch (error) {
    console.log("Error caught");
}

// Exercise 3: catch Error Object
// Write a try block.
// Inside the try block, throw a new Error with the message "Invalid value".
// In the catch block, log the entire error object.
try {
    throw new Error("Invalid value");
} catch (error) {
    console.log(error);
}

// Exercise 4: finally block basic
// Write a try block.
// Inside the try block, throw a new Error with the message "Test error".
// Add a catch block that logs "Error handled".
// Add a finally block that logs "Done".
try {
    throw new Error("Test error");
} catch (error) {
    console.log("Error handled");
} finally {
    console.log("Done");
}

// Exercise 5: try without error
// Write a try block.
// Inside the try block, log "No error here".
// Add a catch block that logs "This will not run".
// Add a finally block that logs "Finished".
try {
    console.log("No error here");
} catch (error) {
    console.log("This will not run");
} finally {
    console.log("Finished");
}

// Exercise 6: throw custom string
// Write a try block.
// Inside the try block, throw the string "Custom error message".
// Write a catch block that logs the caught value.
try {
    throw "Custom error message";
} catch (error) {
    console.log(error);
}

// Exercise 7: throw based on condition
// Create a variable named age and assign it the value 15.
// Write a try block.
// Inside the try block, if age is less than 18, throw a new Error with the message "Underage".
// Write a catch block that logs the error message.
const age = 15;
try {
    if (age < 18) throw new Error("Underage");
} catch (error) {
    console.log(error.message);
}

// Exercise 8: Multiple throw statements
// Create a variable named score and assign it the value -5.
// Write a try block.
// Inside the try block:
// If score is less than 0, throw a new Error with the message "Score cannot be negative".
// If score is greater than 100, throw a new Error with the message "Score cannot exceed 100".
// Add a catch block that logs the error message.
const score = -5;
try {
    if (score < 0) throw new Error("Score cannot be negative");
    else if (score > 100) throw new Error("Score cannot exceed 100");
} catch (error) {
    console.log(error.message);
}

// Exercise 9: finally always runs
// Write a try block.
// Inside the try block, throw a new Error with the message "Force error".
// Add a catch block that logs "Error was caught".
// Add a finally block that logs "This always runs".
try {
    throw new Error("Force error");
} catch (error) {
    console.log("Error was caught ");
} finally {
    console.log("This always runs");
}

// Exercise 10: Manual validation with throw
// Create a variable named username and assign it an empty string.
// Write a try block.
// Inside the try block, if username is an empty string, throw a new Error with the message "Username is required".
// Add a catch block that logs the error message.
// Add a finally block that logs "Validation complete".
const username = "";
try {
    if (username === "") throw new Error("Username is required");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Validation complete");
}