// Object Methods

// Exercise 1: Basic Object Method
// Create an object named user.
// Add a method named sayHello that logs "Hello!".
// Call the method.
const user = {
    sayHello: function() {
        console.log("Hello!");
    }
};
user.sayHello();

// Exercise 2: Accessing Object Method
// Create an object named car with a method getBrand.
// The method should log the car brand stored in the object.
// Call the method.
const car = {
    brand: "Toyota",
    getBrand: function() {
        console.log(this.brand);
    }
};
car.getBrand();

// Exercise 3: Using this Inside Method
// Create an object named student with properties name and score.
// Add a method showScore that logs "<name> scored <score>" using this.
// Call the method.
const student = {
    name: "Sara",
    score: 86,
    showScore: function() {
        console.log(this.name + " scored " + this.score);
    }
};
student.showScore();

// Exercise 4: Adding Method After Object Creation
// Create an object named calculator with properties a = 5, b = 3.
// Add a method add that returns a + b using this.
// Call the method and log the result.
const calculator = {
    a: 5,
    b: 3
};
calculator.add = function() {
    return this.a + this.b;
}
console.log(calculator.add());

// Exercise 5: Multiple Methods in One Object
// Create an object named counter with property count = 0.
// Add methods increase and decrease to change count.
// Call both methods and log count after each call.
const counter = {
    count: 0,
    increase: function() { return ++this.count; },
    decrease: function() { return --this.count; }
};
console.log(counter.increase());
console.log(counter.decrease());

// Exercise 6: Method Using Parameters
// Create an object named printer.
// Add a method print(message) that logs the message passed in.
// Call the method with different messages.
const printer = {
    print: function(message) {
        console.log(message);
    }
};
printer.print("Hello world");
printer.print("Coding is fun");

// Exercise 7: Method That Returns a Value
// Create an object named math.
// Add a method multiply(x, y) that returns x * y.
// Log the returned value.
const math = {
    multiply: function (x, y) {
        return x * y;
    }
};
console.log(math.multiply(3, 2));

// Exercise 8: Using Methods to Update Properties
// Create an object named cart with property total = 0.
// Add a method addItem(price) that increases total by price.
// Call the method multiple times and log total.
const cart = {
    total: 0,
    addItem: function(price) {
        return this.total += price;
    }
};
cart.addItem(2.00);
cart.addItem(0.99);
cart.addItem(10.00);
console.log(cart.total);

// Exercise 9: Access Method with Bracket Notation
// Create an object named alarm with a method ring that logs "Alarm ringing!".
// Call the method using bracket notation.
const alarm = {
    ring: function() {
        console.log("Alarm ringing!");
    }
};
alarm["ring"]();

// Exercise 10: Method as Action
// Create an object named light with property isOn = false.
// Add methods turnOn and turnOff that update isOn.
// Call both methods and log the object after each call.
const light = {
    isOn: false,
    turnOn: function() {
        return this.isOn = true;
    },
    turnOff: function() {
        return this.isOn = false;
    }
};
light.turnOn();
console.log(light);
light.turnOff();
console.log(light);