// WeakSet

// Exercise 1: Create a WeakSet
// Create a WeakSet named visitedObjects.
// Log the WeakSet.
const visitedObjects = new WeakSet();
console.log(visitedObjects);

// Exercise 2: WeakSet Only Stores Objects
// Create an object named user.
// Add the object to the visitedObjects WeakSet.
// Log a message explaining what was added.
const user = {};
visitedObjects.add(user);
console.log("Added user object to visitedObjects");

// Exercise 3: Invalid WeakSet Value
// Create a WeakSet named data.
// Try to add a number or string to it.
// Observe what happens.
const data = new WeakSet();
// data.add("a"); // Error

// Exercise 4: add() Method
// Create two objects: obj1 and obj2.
// Create a WeakSet named cache.
// Add both objects using add().
const obj1 = {};
const obj2 = {};
const cache = new WeakSet();
cache.add(obj1);
cache.add(obj2);

// Exercise 5: has() Method
// Using the same cache WeakSet,
// check if obj1 exists in the WeakSet.
// Log the result.
let hasObj = cache.has(obj1);
console.log(hasObj);

// Exercise 6: delete() Method
// Using the cache WeakSet,
// delete obj2 from the WeakSet.
// Log the result of delete().
let deleteObj = cache.delete(obj2);
console.log(deleteObj);

// Exercise 7: WeakSet vs Set (Concept)
// Create a Set and a WeakSet.
// Add the same object to both.
// Log both collections and observe the difference.
const set = new Set();
const weakSet = new WeakSet();
const obj = {};
set.add(obj);
weakSet.add(obj);
console.log(set);       // Set(1) { {} }
console.log(weakSet);   // WeakSet { <items unknown> }

// Exercise 8: Tracking Objects
// Create an object named session.
// Add it to a WeakSet named activeSessions.
// Use has() to check if it is being tracked.
const session = {};
const activeSessions = new WeakSet();
activeSessions.add(session);
let track = activeSessions.has(session);
console.log(track);

// Exercise 9: Automatic Cleanup (Concept)
// Create an object inside a block {}.
// Add it to a WeakSet.
// After the block ends, explain what happens to the object reference.
const cleanup = new WeakSet();
{
    const object = {};
    cleanup.add(object);
}

// Exercise 10: Limited Methods
// Create a WeakSet named logs.
// List the available methods you can use on a WeakSet
// and try using add(), has(), and delete().
const logs = new WeakSet();
const object1 = {};
const object2 = {};
logs.add(object1);
logs.add(object2);
let hasObject = logs.has(object1);
let deleteObject = logs.delete(object2);