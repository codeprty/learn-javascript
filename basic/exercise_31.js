// Object Properties

// Exercise 1: Access Property Using Dot Notation
// Create an object named user with properties: name = "Makoto", age = 21.
// Access and log the name using dot notation.
const user = {
    name: "Makoto",
    age: 21
};
console.log(user.name);

// Exercise 2: Access Property Using Bracket Notation
// Using the same user object,
// access and log the age using bracket notation.
console.log(user["age"]);

// Exercise 3: Access Property Using Expression
// Create a variable key = "name".
// Use the variable to access the user object’s name property.
// Log the result.
const key = "name";
console.log(user[key]);

// Exercise 4: Adding New Property
// Create an object named product with properties: title = "Laptop", price = 3000.
// Add a new property stock = 10 after the object is created.
// Log the updated object.
const product = {
    title: "Laptop",
    price: 3000
};
product.stock = 10;
console.log(product);

// Exercise 5: Property Default Value
// Create an object named profile with properties: username = "guest".
// Access profile.email (which does not exist yet).
// Log the result to see the default value.
const profile = {
    username: "guest"
};
console.log(profile.email);

// Exercise 6: Set Default Value if Property Missing
// Using the profile object,
// set profile.email to "guest@yahoo.com" only if it does not exist.
// Log the updated object.
if (!profile.email) profile.email = 'guest@yahoo.com';
console.log(profile);

// Exercise 7: Deleting a Property
// Create an object named settings with properties: theme = "dark", notifications = true.
// Delete the notifications property.
// Log the object after deletion.
const settings = {
    theme: "dark",
    notifications: true
};
delete settings.notifications;
console.log(settings);

// Exercise 8: Basic Nested Object
// Create an object named student with properties:
// name = "Sara",
// address = { city = "Penang", postcode = "10000" }.
// Log the student object.
const student = {
    name: "Sara",
    address: {
        city: "Penang",
        postcode: "10000"
    }
};
console.log(student);

// Exercise 9: Access Nested Object Property
// Using the student object,
// access and log the city property.
console.log(student.address.city);

// Exercise 10: Modify Nested Object Property
// Using the student object,
// change the postcode to "10200".
// Log the updated object.
student.address.postcode = "10200";
console.log(student);