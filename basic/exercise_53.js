// Generators

// Exercise 1: Generator Function – Basic
// Create a generator function named simpleGenerator.
// Use yield to produce the value 1.
// Create a generator object and call next().
// Log the result.
function* simpleGenerator() {
    yield 1;
}

const objSimpleGen = simpleGenerator();
console.log(objSimpleGen.next());

// Exercise 2: Generator Object – Multiple Yields
// Create a generator function named numberGenerator.
// Use yield to produce the values 1, 2, and 3 (one at a time).
// Create a generator object.
// Call next() three times and log each result.
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const objNumberGen = numberGenerator();
console.log(objNumberGen.next());
console.log(objNumberGen.next());
console.log(objNumberGen.next());

// Exercise 3: yield Keyword – Pause and Resume
// Create a generator function named pauseGenerator.
// Use yield to return the string "First" and then "Second".
// Create a generator object.
// Call next() twice and log the results.
function* pauseGenerator() {
    yield "First";
    yield "Second";
}

const objPauseGen = pauseGenerator();
console.log(objPauseGen.next());
console.log(objPauseGen.next());

// Exercise 4: Generator next() Method – done Property
// Create a generator function named doneGenerator.
// Use yield to produce the value 10.
// Create a generator object.
// Call next() twice and log both results.
function* doneGenerator() {
    yield 10;
}

const objDoneGen = doneGenerator();
console.log(objDoneGen.next());
console.log(objDoneGen.next());

// Exercise 5: Generator return() Method – Basic
// Create a generator function named returnGenerator.
// Use yield to produce the value 1.
// Create a generator object.
// Call return("Finished") and log the result.
function* returnGenerator() {
    yield 1;
}

const objReturnGen = returnGenerator();
console.log(objReturnGen.return("Finished"));

// Exercise 6: Generator throw() Method – Basic
// Create a generator function named errorGenerator.
// Use yield to produce the value 1.
// Create a generator object.
// Use throw() to throw an error with the message "Something went wrong".
// Log what happens.
function* errorGenerator() {
    yield 1;
}

const objErrorGen = errorGenerator();
//console.log(objErrorGen.throw("Something went wrong"));

// Exercise 7: Generator Object – Iteration Order
// Create a generator function named letterGenerator.
// Use yield to produce "A", then "B".
// Create a generator object.
// Call next() until the generator is done.
// Log each result.
function* letterGenerator() {
    yield "A";
    yield "B";
}

const objLetterGen = letterGenerator();
console.log(objLetterGen.next());
console.log(objLetterGen.next());
console.log(objLetterGen.next());

// Exercise 8: Custom Iterator Using Generator – Basic
// Create an object named counter.
// Use a generator function to make it iterable from 1 to 3.
// Use next() to get values from the iterator.
// Log each value.
const counter = {
    [Symbol.iterator]: function* () {
        for (let i = 1; i <= 3; i++) {
            yield i;
        }
    }
};

const objCounterGen = counter[Symbol.iterator]();
console.log(objCounterGen.next());
console.log(objCounterGen.next());
console.log(objCounterGen.next());

// Exercise 9: Generator Function with Input
// Create a generator function named greetingGenerator.
// Use yield to produce the string "Hello".
// Accept input from next() and use it to produce the string "World, <name>".
// Create a generator object.
// Call next() twice, passing a name on the second call, and log the results.
function* greetingGenerator() {
    const name = yield "Hello";
    return `World, ${name}`;
}

const objGreetingGen = greetingGenerator();
console.log(objGreetingGen.next());
console.log(objGreetingGen.next("Anri"));

// Exercise 10: Generator Completion – Final State
// Create a generator function named finishGenerator.
// Use yield to produce the value "Start".
// Create a generator object.
// Call next() until the generator finishes.
// Log the final result.
function* finishGenerator() {
    yield "Start";
}

const objFinishGen = finishGenerator();
console.log(objFinishGen.next());
console.log(objFinishGen.next());