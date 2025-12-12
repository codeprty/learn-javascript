// String Methods: Access Characters

// Exercise 1: First Character with at()
// Create a variable named word and set it to "JavaScript".
// Use the at(0) method to get the first character.
// Log the result to the console.
let word = "JavaScript";
let result = word.at(0);
console.log(result);

// Exercise 2: Last Character with at()
// Create a variable named city and set it to "Kuala Lumpur".
// Use the at() method with a negative index to get the last character.
// Log the result.
let city = "Kuala Lumpur";
result = city.at(-1);
console.log(result);

// Exercise 3: Character in the Middle with at()
// Create a variable named fruit and set it to "Banana".
// Use the at() method to read the 3rd character.
// Log the result.
let fruit = "Banana";
result = fruit.at(2);
console.log(result);

// Exercise 4: First Character with charAt()
// Create a variable named name and set it to "Anri".
// Use charAt() to get the first character.
// Log the result.
let name = "Anri";
result = name.charAt(0);
console.log(result);

// Exercise 5: Last Character with charAt()
// Create a variable sentence and set it to "Hello World".
// Use charAt() with sentence.length - 1 to get the last character.
// Log the result.
let sentence = "Hello World";
result = sentence.charAt(sentence.length - 1);
console.log(result);

// Exercise 6: Random Position with charAt()
// Create a variable food and set it to "Burger".
// Use charAt() to get the character at index 2.
// Log the result.
let food = "Burger";
result = food.charAt(2);
console.log(result);

// Exercise 7: Using length to Count Characters
// Create a variable title and set it to "JavaScript Basics".
// Log the number of characters using the length property.
let title = "JavaScript Basics";
result = title.length;
console.log(result);

// Exercise 8: Last Character Using Only length
// Create a variable item and set it to "Laptop".
// Use the length property to calculate the last index.
// Log the last character using either at() or charAt().
let item = "Laptop";
result = item.at(item.length - 1);
console.log(result);

// Exercise 9: Check If String is Empty Using length
// Create a variable emptyStr and set it to "".
// Use the length property to check if it has 0 characters.
// Log "Empty" if true.
let emptyStr = "";
if (emptyStr.length === 0) {
    console.log("Empty");
}

// Exercise 10: Middle Character Using length
// Create a variable country and set it to "Malaysia".
// Use the length property to find the middle index.
// Log the character at that index.
let country = "Malaysia";
result = country.charAt(country.length / 2);
console.log(result);