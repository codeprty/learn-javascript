// Object Display

// Exercise 1: Display Object Property in a String
// Create an object named User with properties: name = "Makoto", age = 21.
// Create a string that says: "User Makoto is 21 years old" using object properties.
// Log the string.
const user = {
    name: "Makoto",
    age: 21
}
let text = "User " + user.name + " is " + user.age + " years old";
console.log(text); 

// Exercise 2: Display Multiple Properties in a String
// Create an object named product with properties: name = "iphone", price = 4000.
// Display a sentence using both properties.
// Log the result.
const product = {
    name: "iphone",
    price: 4000
};
let sentence = "The new " + product.name + "'s price is " + product.price;
console.log(sentence);

// Exercise 3: for...in Loop Basics
// Create an object named car with properties: brand, model, year.
// Use a for...in loop to log each property name.
const car = {
    brand: "Toyota",
    model: "Vios",
    year: 2025
};
for (let x in car) {
    console.log(x);
}

// Exercise 4: for...in Loop Values
// Using the same car object,
// use a for...in loop to log each property value.
for (let x in car) {
    console.log(car[x]);
}

// Exercise 5: for...in Loop Key + Value
// Using the car object,
// use a for...in loop to log "key: value" for each property.
for (let x in car) {
    console.log(x + ": " + car[x])
}

// Exercise 6: Using Object.values()
// Create an object named scores with properties: math = 80, english = 75, science = 90.
// Use Object.values() to get all values.
// Log the result.
const scores =  {
    math: 80,
    english: 75,
    science: 90
};
let result = Object.values(scores);
console.log(result);

// Exercise 7: Loop Through Object.values()
// Using the scores object,
// use Object.values() and a loop to log each value.
let value = Object.values(scores);
for (let i = 0; i < value.length; i++) {
    console.log(value[i]);
}

// Exercise 8: Using Object.entries()
// Create an object named settings with properties: theme = "dark", sound = true.
// Use Object.entries() to get key-value pairs.
// Log the result.
const settings = {
    theme: "dark",
    sound: true
};
let keyValue = Object.entries(settings);
console.log(keyValue);

// Exercise 9: Loop Through Object.entries()
// Using the settings object,
// loop through Object.entries() and log each key and value separately.
for (let i = 0; i < keyValue.length; i++) {
    console.log(keyValue[i]);
}

// Exercise 10: Using JSON.stringify()
// Create an object named student with properties: name, age, course.
// Convert the object to a JSON string using JSON.stringify().
// Log the result.
const student = {
    name: "Jean Grey",
    age: 25,
    course: "Bachelor Degree in Computer Science"
};
result = JSON.stringify(student);
console.log(result);