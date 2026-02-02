// WeakMap

// Exercise 1: Create a WeakMap
// Create a WeakMap named userData.
// Log the WeakMap to the console.
const userData = new WeakMap();
console.log(userData);

// Exercise 2: WeakMap.set() Basic
// Create a WeakMap named secretInfo.
// Create an object named user.
// Use set() to store the value "Top Secret" for the user object.
// Log the WeakMap.
const secretInfo = new WeakMap();
const user = {};
secretInfo.set(user, "Top Secret");
console.log(secretInfo);

// Exercise 3: WeakMap.get() Basic
// Create a WeakMap named settings.
// Create an object named device.
// Use set() to assign the value "Dark Mode" to the device object.
// Use get() to retrieve the value.
// Log the retrieved value.
const settings = new WeakMap();
const device = {};
settings.set(device, "Dark Mode");
console.log(settings.get(device));

// Exercise 4: WeakMap.has() Basic
// Create a WeakMap named cache.
// Create an object named request.
// Store the value "Cached Data" for the request object.
// Use has() to check if the request exists in the WeakMap.
// Log the result.
const cache = new WeakMap();
const request = {};
cache.set(request, "Cached Data");
console.log(cache.has(request));

// Exercise 5: WeakMap.delete() Basic
// Create a WeakMap named sessionData.
// Create an object named session.
// Add session to the WeakMap with value "Active".
// Delete the session entry using delete().
// Use has() to check if it still exists.
// Log the result.
const sessionData = new WeakMap();
const session = {};
sessionData.set(session, "Active");
sessionData.delete(session);
console.log(sessionData.has(session));

// Exercise 6: WeakMap with Multiple Objects
// Create a WeakMap named userStatus.
// Create two objects: user1 and user2.
// Set user1 to "Online" and user2 to "Offline".
// Use get() to log the status of both users.
const userStatus = new WeakMap();
const user1 = {};
const user2 = {};
userStatus.set(user1, "Online");
userStatus.set(user2, "Offline");
console.log(userStatus.get(user1));
console.log(userStatus.get(user2));

// Exercise 7: WeakMap Only Accepts Objects as Keys
// Create a WeakMap named testMap.
// Create an object named validKey.
// Use set() to store the value "Allowed" using validKey.
// Log the WeakMap.
const testMap = new WeakMap();
const validKey = {};
testMap.set(validKey, "Allowed");
console.log(testMap);

// Exercise 8: Checking Before Getting a Value
// Create a WeakMap named preferences.
// Create an object named profile.
// Use has() to check if profile exists before calling get().
// Log an appropriate message based on the result.
const preferences = new WeakMap();
const profile = {};
preferences.has(profile) ? console.log("exists") : console.log("does not exist");

// Exercise 9: Updating a Value in WeakMap
// Create a WeakMap named accountInfo.
// Create an object named account.
// Set the value to "Basic Plan".
// Update the value to "Premium Plan" using set().
// Use get() to log the updated value.
const accountInfo = new WeakMap();
const account = {};
accountInfo.set(account, "Basic Plan");
accountInfo.set(account, "Premium Plan");
console.log(accountInfo.get(account));

// Exercise 10: WeakMap Key Reference
// Create a WeakMap named tempData.
// Create an object named task.
// Store the value "In Progress" for task.
// Use has() to confirm the key exists.
// Log the result.
const tempData = new WeakMap();
const task = {};
tempData.set(task, "In Progress");
console.log(tempData.has(task));