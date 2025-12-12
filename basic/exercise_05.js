// If Conditions

// Exercise 1: Simple If
// Create a variable named age and set it to 18.
// Use an if statement to check if age is greater than or equal to 18.
// If true, log "You are an adult" to the console.
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// Exercise 2: Simple If (False Case)
// Create a variable named temperature and set it to 25.
// Use an if statement to check if temperature is greater than 30.
// If true, log "It's hot today" to the console.
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot today");
}

// Exercise 3: If Else
// Create a variable named number and set it to 10.
// Use an if-else statement to check if number is even.
// If even, log "Even number".
// Else, log "Odd number".
let number = 10;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Exercise 4: Nested If
// Create a variable named score and set it to 85.
// Use a nested if statement:
//   If score is greater than 80:
//       If score is less than or equal to 90:
//           Log "Good score" to the console.
let score = 85;
if (score > 80) {
    if (score <= 90) {
        console.log("Good score");
    }
}

// Exercise 5: If Else If
// Create a variable named marks and set it to 75.
// Use if-else if-else:
//   If marks >= 90: log "Excellent"
//   Else if marks >= 70: log "Good"
//   Else: log "Needs Improvement"
let marks = 75;
if (marks >= 90) {
    console.log("Excellent");
} else if (marks >= 70) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

// Exercise 6: Nested If Else
// Create a variable named num and set it to -5.
// Use nested if-else:
//   If num > 0: log "Positive"
//   Else:
//       If num < 0: log "Negative"
//       Else: log "Zero"
let num = -5;
if (num > 0) {
    console.log("Positive");
} else {
    if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Exercise 7: Checking Multiple Conditions
// Create two variables: age = 20, hasID = true.
// Use if statement with logical AND (&&) to check:
//   If age >= 18 AND hasID is true, log "Allowed entry".
age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Allowed entry");
}

// Exercise 8: Using Logical OR
// Create two variables: isWeekend = true, isHoliday = false.
// Use if statement with logical OR (||) to check:
//   If either isWeekend OR isHoliday is true, log "No school today".
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("No school today");
}

// Exercise 9: Simple Comparison in If
// Create a variable named temperature and set it to 15.
// Use if-else to check:
//   If temperature < 20: log "Cold"
//   Else: log "Warm"
temperature = 15;
if (temperature < 20) {
    console.log("Cold");
} else {
    console.log("Warm");
}

// Exercise 10: Nested Conditions with Multiple Levels
// Create a variable named marks and set it to 95.
// Use nested if-else:
//   If marks >= 90:
//       log "Grade A"
//       If marks == 100:
//           log "Perfect Score"
//   Else:
//       log "Keep Trying"
marks = 95;
if (marks >= 90) {
    console.log("Grade A");
    if (marks == 100) {
        console.log("Perfect Score");
    }
} else {
    console.log("Keep Trying");
}