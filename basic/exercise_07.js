// Switch Statement

// Exercise 1: Basic Switch Case
// Create a variable day and set it to 3.
// Use a switch statement to log the day of the week:
// 1 = Monday, 2 = Tuesday, 3 = Wednesday, etc.
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

// Exercise 2: Using Break
// Create a variable fruit and set it to "Apple".
// Use a switch statement to log the fruit color:
// "Apple" = "Red", "Banana" = "Yellow", "Orange" = "Orange".
// Make sure to use break after each case.
let fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("Red");
        break;
    case "Banana":
        console.log("Yellow");
        break;
    case "Orange":
        console.log("Orange");
        break;
}

// Exercise 3: Using Default
// Create a variable fruit and set it to "Mango".
// Use a switch statement to log the fruit name.
// Provide default case that logs "Unknown fruit" if fruit is not listed.
fruit = "Mango";
switch (fruit) {
    case "Papaya":
        console.log("Papaya");
        break;
    default:
        console.log("Unknown fruit");
}

// Exercise 4: Multiple Cases Same Code Block
// Create a variable grade and set it to "B".
// Use a switch statement:
// Case "A": log "Excellent"
// Case "B" or "C": log "Good"
// Case "D": log "Needs Improvement"
// Default: log "Invalid grade"
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Invalid grade");
}

// Exercise 5: Strict Comparison
// Create a variable number and set it to "2" (string).
// Use a switch statement with cases 1, 2, 3 (numbers).
// Log "Number matched" if matches, else default "No match".
// Observe strict comparison behavior.
let number = "2";
switch (number) {
    case 1:
    case 2:
    case 3:
        console.log("Number matched");
        break;
    default:
        console.log("No match");
}

// Exercise 6: Switch with Numbers
// Create a variable month and set it to 12.
// Use a switch statement to log the season:
// 12, 1, 2 = "Winter"
// 3, 4, 5 = "Spring"
// 6, 7, 8 = "Summer"
// 9, 10, 11 = "Autumn"
let month = 12;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
}

// Exercise 7: Switch with Strings
// Create a variable color and set it to "Blue".
// Use a switch statement to log a message for each color:
// "Red" = "Stop", "Yellow" = "Caution", "Green" = "Go", default = "Unknown color"
let color = "Blue";
switch (color) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Caution");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Unknown color");
}

// Exercise 8: Common Code Block
// Create a variable level and set it to "Beginner".
// Use a switch statement:
// Case "Beginner" or "Novice": log "Level 1"
// Case "Intermediate": log "Level 2"
// Case "Advanced": log "Level 3"
// Default: log "Unknown level"
let level = "Beginner";
switch (level) {
    case "Beginner":
    case "Novice":
        console.log("Level 1");
        break;
    case "Intermediate":
        console.log("Level 2");
        break;
    case "Advanced":
        console.log("Level 3");
        break;
    default:
        console.log("Unknown level");
}

// Exercise 9: Using Break Properly
// Create a variable score and set it to 90.
// Use a switch statement to log grade:
// 90 = "A", 80 = "B", 70 = "C"
// Ensure each case has a break to prevent fall-through.
let score = 90;
switch (score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
}

// Exercise 10: Default Only
// Create a variable option and set it to "X".
// Use a switch statement with no matching cases.
// Add a default case that logs "Option not valid".
let option = "X";
switch (option) {
    case "Triangle":
        console.log("Option selected");
        break;
    case "Circle":
        console.log("Option selected");
        break;
    case "Square":
        console.log("Option selected");
        break;
    default:
        console.log("Option not valid");
}