// Objects

// Exercise 1: Basic Object Literal
// Create an object named person with properties: name = "Makoto", age = 21.
// Log the object to the console.
const person = {
    name: "Makoto",
    age: 21
};
console.log(person);

// Exercise 2: Object with Multiple Properties
// Create an object named car with properties: brand, model, year.
// Assign any values you like.
// Log the object.
const car = {
    brand: "Toyota",
    model: "Vios",
    year: 2025
};
console.log(car);

// Exercise 3: Empty Object
// Create an empty object named user.
// Log the object.
const user = {};
console.log(user);

// Exercise 4: Add Properties Later
// Using the user object from Exercise 3,
// add properties: username = "voon", isAdmin = false.
// Log the updated object.
user.username = "voon";
user.isAdmin = false;
console.log(user);

// Exercise 5: Access Object Properties (Dot Notation)
// Create an object named book with properties: title = "JavaScript Basics", pages = 120.
// Access and log the title using dot notation.
const book = {
    title: "JavaScript Basics",
    pages: 120
};
console.log(book.title);

// Exercise 6: Access Object Properties (Bracket Notation)
// Using the book object,
// access and log the pages property using bracket notation.
console.log(book["pages"]);

// Exercise 7: Object Method (Function as Property)
// Create an object named calculator.
// Add a method named sayHello that logs "Hello from calculator".
// Call the method.
const calculator = {
    sayHello: function() {
        console.log("Hello from calculator");
    }
};
calculator.sayHello();

// Exercise 8: Object Method Using this
// Create an object named student with properties: name = "Jenna", score = 85.
// Add a method named showScore that logs "<name>'s score is <score>" using this.
// Call the method.
const student = {
    name: "Jenna",
    score: 85,
    showScore: function() {
        console.log(this.name + "'s score is " + this.score);
    }
};
student.showScore();

// Exercise 9: Display Object Properties
// Create an object named product with properties: name, price, stock.
// Log each property individually.
// Then log the whole object.
const product = {
    name: "iphone 17",
    price: 3999,
    stock: 100
}
console.log(product.name);
console.log(product.price);
console.log(product.stock);
console.log(product);

// Exercise 10: Object Constructor Function
// Create a constructor function named Person(name, age).
// Inside, assign name and age to this.
// Create two Person objects using new.
// Log both objects.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const myFather = new Person("Desmond", 60);
const myMother = new Person("May", 58);
console.log(myFather);
console.log(myMother);