// For Loop

// Exercise 1: Basic For Loop
// Use a for loop to log numbers 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 2: Loop Counting Backwards
// Use a for loop to log numbers from 5 down to 1.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Exercise 3: Loop with Step of 2
// Use a for loop to log even numbers from 2 to 10.
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Exercise 4: Sum of Numbers
// Create a variable sum = 0.
// Use a for loop to add numbers 1 to 5 into sum.
// Log the final value of sum.
let sum = 0;
for (let i = 1; i<= 5; i++) {
    sum += i;
}
console.log(sum);

// Exercise 5: Loop Through a String
// Create a variable text = "Java".
// Use a for loop to log each character one by one.
let text = "Java";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// Exercise 6: Loop with Condition
// Use a for loop from 1 to 10.
// Log only the numbers greater than 5.
for (let i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
}

// Exercise 7: Loop with If Statement
// Use a for loop from 1 to 10.
// For each number, log "Even" if the number is even.
// Otherwise, log "Odd".
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Exercise 8: Multiplication Table
// Create a variable n = 3.
// Use a for loop to print the multiplication table of 3:
// 3 × 1, 3 × 2, ..., 3 × 10.
let n = 3;
for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}

// Exercise 9: Loop with Break
// Use a for loop from 1 to 10.
// Stop the loop when the number reaches 4 using break.
// Log only numbers before 4.
for (let i = 1; i <=10; i++) {
    if (i === 4) { break; }
    console.log(i);
}

// Exercise 10: Loop with Continue
// Use a for loop from 1 to 5.
// Skip the number 3 using continue.
// Log the other numbers.
for (let i = 1; i <= 5; i++) {
    if (i === 3) { continue; }
    console.log(i);
}