// While Loop & Do...While Loop

// Exercise 1: Basic While Loop
// Use a while loop to log numbers from 1 to 5.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Exercise 2: Counting Backwards
// Use a while loop to log numbers from 5 down to 1.
i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// Exercise 3: Sum of Numbers
// Create a variable total = 0.
// Use a while loop to add numbers 1 to 5 into total.
// Log the final value.
i = 1;
let total = 0;
while (i <= 5) {
    total += i;
    i++;
}
console.log(total);

// Exercise 4: Even Numbers
// Use a while loop to log even numbers from 2 to 10.
i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}

// Exercise 5: Loop Through a String
// Create a variable text = "JavaScript".
// Use a while loop to log each character one by one.
i = 0;
let text = "JavaScript";
while (i < text.length) {
    console.log(text[i]);
    i++;
}

// Exercise 6: Do...While Basic
// Use a do...while loop to log numbers 1 to 3.
i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 3);

// Exercise 7: Minimum One Execution
// Create a variable count = 10.
// Use a do...while loop to log "Running..." once,
// because the condition should be false after the first run.
i = 1;
let count = 10;
do {
    console.log("Running...");
}
while (false);

// Exercise 8: Countdown with Do...While
// Use a do...while loop to log numbers from 5 down to 1.
i = 5;
do {
    console.log(i);
    i--;
}
while (i >= 1);

// Exercise 9: Loop Until Condition
// Create a variable num = 0.
// Use a while loop that keeps running until num reaches 3.
// Inside the loop, log num and increase it by 1.
let num = 0;
while (i < 3) {
    console.log(num);
    num++;
}

// Exercise 10: Mixture of While and Do...While
// Part 1: Use a while loop to log "Looping..." 3 times.
// Part 2: Use a do...while loop to log numbers 1 to 3.
i = 1;
while (i <= 3) {
    console.log("Looping...");
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 3)