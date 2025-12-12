// Assignment Operators

// Exercise 1: Simple Assignment
// Create a variable named x.
// Assign it the value 10 using the assignment operator (=).
// Log x to the console.
let x = 10;
console.log(x);

// Exercise 2: Assignment (+=)
// Create a variable named a and set it to 5.
// Increase a by 3 using the += operator.
// Log the final value of a.
let a = 5;
a += 3;
console.log(a);

// Exercise 3: Subtraction Assignment (-=)
// Create a variable named b and set it to 10.
// Decrease b by 4 using the -= operator.
// Log the final value of b.
let b = 10;
b -= 4;
console.log(b);

// Exercise 4: Multiplication Assignment (*=)
// Create a variable named c and set it to 6.
// Multiply c by 3 using the *= operator.
// Log the final value of c.
let c = 6;
c *= 3;
console.log(c);

// Exercise 5: Division Assignment (/=)
// Create a variable named d and set it to 20.
// Divide d by 5 using the /= operator.
// Log the final value of d.
let d = 20;
d /= 5;
console.log(d);

// Exercise 6: Remainder Assignment (%=)
// Create a variable named e and set it to 17.
// Set e to e % 3 using the %= operator.
// Log the final value of e.
let e = 17;
e %= 3;
console.log(e);

// Exercise 7: Exponentiation Assignment (=)**
// Create a variable named f and set it to 2.
// Raise f to the power of 3 using the **= operator.
// Log the final value of f.
let f = 2;
f **= 3;
console.log(f);

// Exercise 8: Logical AND Assignment (&&=)
// Create a variable isAvailable and set it to true.
// Use &&= to set isAvailable to false only if it is currently true.
// Log the final value of isAvailable.
let isAvailable = true;
isAvailable &&= false;
console.log(isAvailable);

// Exercise 9: Logical OR Assignment (||=)
// Create a variable username and set it to an empty string "".
// Use ||= to assign "Guest" to username if it is currently falsy.
// Log the final value of username.
let username = "";
username ||= "Guest";
console.log(username);

// Exercise 10: Nullish Coalescing Assignment (??=)
// Create a variable inputValue and set it to null.
// Use ??= to assign 100 to inputValue if it is null or undefined.
// Log the final value of inputValue.
let inputValue = null;
inputValue ??= 100;
console.log(inputValue);