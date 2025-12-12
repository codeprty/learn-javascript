// Break & Continue

// Exercise 1: Basic Break
// Use a for loop to log numbers from 1 to 10.
// When the number reaches 5, use break to stop the loop completely.
// Log only the numbers before 5.
for (let i = 1; i <= 10; i++) {
    if (i === 5) { break; }
    console.log(i);
}

// Exercise 2: Break in While Loop
// Create a variable count = 1.
// Use a while loop to log the value of count.
// Use break to stop the loop when count becomes 4.
// Increase count inside the loop.
let count = 1;
while (true) {
    if (count === 4) { break; }
    console.log(count);
    count++;
}

// Exercise 3: Break in Switch
// Create a variable color = "Green".
// Use a switch statement to check the value of color.
// Case "Red": log "Stop".
// Case "Yellow": log "Wait".
// Case "Green": log "Go".
// Add break after every case.
let color = "Green";
switch (color) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Wait");
        break;
    case "Green":
        console.log("Go");
        break;
}

// Exercise 4: Break After Condition
// Use a for loop from 1 to 10.
// Log each number inside the loop.
// When you find the first even number, use break to stop the loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i % 2=== 0) { break; }
}

// Exercise 5: Basic Continue
// Use a for loop from 1 to 5.
// If the number is 3, skip it using continue.
// Log all other numbers.
for (let i = 1; i <= 5; i++) {
    if (i === 3) { continue; }
    console.log(i);
}

// Exercise 6: Continue in While Loop
// Create a variable i = 0.
// Use a while loop that runs while i is less than 5.
// Increase i inside the loop.
// If i equals 2, use continue to skip logging that number.
// Log all other values of i.
let i = 0;
while (i < 5) {
    if (i === 2) { i++; continue; }
    console.log(i);
    i++;
}

// Exercise 7: Continue for Even Numbers
// Use a for loop from 1 to 10.
// If the number is odd, skip it using continue.
// Log only the even numbers.
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { continue; }
    console.log(i);
}

// Exercise 8: Continue for Specific Condition
// Use a for loop from 1 to 7.
// Use continue to skip logging the numbers 3 and 5.
// Log all other numbers.
for (let i = 1; i <= 7; i++) {
    if (i === 3) { continue; }
    if (i === 5) { continue; }
    console.log(i);
}

// Exercise 9: Break with User Simulation
// Create a variable attempts = 1.
// Use a while loop to simulate login attempts.
// Log "Attempt X" for each attempt.
// When attempts reaches 3, log "Too many attempts" and use break.
// Increase attempts in each loop iteration.
let attempts = 1;
while (true) {
    if (attempts === 3) {
        console.log("Too many attempts");
        break;
    }
    console.log("Attempt " + attempts);
    attempts++;
}

// Exercise 10: Mixture of Break and Continue
// Use a for loop from 1 to 10.
// If the number is 4, skip it using continue.
// If the number is 8, stop the loop using break.
// Log all other numbers that are not skipped or stopped.
for (let i = 1; i <= 10; i++) {
    if (i === 4) { continue; }
    if (i === 8) { break; }
    console.log(i);
}