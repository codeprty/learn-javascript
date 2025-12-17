// Set Logic Methods

// Exercise 1: union() Basic
// Create two sets: setA = new Set([1, 2, 3]) and setB = new Set([3, 4, 5]).
// Use union() to combine both sets into a new set.
// Log the result.
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const setC = setA.union(setB);
console.log(setC);

// Exercise 2: union() with Strings
// Create two sets: colors1 = new Set(["red", "green"]) and colors2 = new Set(["green", "blue"]).
// Use union() and log the combined set.
const colors1 = new Set(["red", "green"]);
const colors2 = new Set(["green", "blue"]);
const colors3 = colors1.union(colors2);
console.log(colors3);

// Exercise 3: difference() Basic
// Create two sets: a = new Set([1, 2, 3, 4]) and b = new Set([3, 4]).
// Use difference() to get values that exist only in set a.
// Log the result.
const a = new Set([1, 2, 3, 4, 5]);
const b = new Set([3, 4]);
const c = a.difference(b);
console.log(c);

// Exercise 4: difference() with Strings
// Create two sets: fruitsA = new Set(["apple", "banana", "orange"])
// and fruitsB = new Set(["banana"]).
// Use difference() and log the result.
const fruitsA = new Set(["apple", "banana", "orange"]);
const fruitsB = new Set(["banana"]);
const fruitsC = fruitsA.difference(fruitsB);
console.log(fruitsC);

// Exercise 5: intersection() Basic
// Create two sets: x = new Set([1, 2, 3]) and y = new Set([2, 3, 4]).
// Use intersection() to get common values.
// Log the result.
const x = new Set([1, 2, 3]);
const y = new Set([2, 3, 4]);
const z = x.intersection(y);
console.log(z);

// Exercise 6: intersection() with Words
// Create two sets: words1 = new Set(["js", "html", "css"])
// and words2 = new Set(["css", "python"]).
// Use intersection() and log the result.
const words1 = new Set(["js", "html", "css"]);
const words2 = new Set(["css", "python"]);
const words3 = words1.intersection(words2);
console.log(words3);

// Exercise 7: isDisjointFrom() Basic
// Create two sets: p = new Set([1, 2]) and q = new Set([3, 4]).
// Use isDisjointFrom() to check if they share no common values.
// Log the result.
const p = new Set([1, 2]);
const q = new Set([3, 4]);
const r = p.isDisjointFrom(q);
console.log(r);

// Exercise 8: isSubsetOf() Basic
// Create two sets: small = new Set([1, 2]) and big = new Set([1, 2, 3, 4]).
// Use isSubsetOf() to check if small is a subset of big.
// Log the result.
const small = new Set([1, 2]);
const big = new Set([1, 2, 3, 4]);
let result = small.isSubsetOf(big);
console.log(result);

// Exercise 9: isSupersetOf() Basic
// Using the same small and big sets,
// use isSupersetOf() to check if big contains all values of small.
// Log the result.
result = big.isSupersetOf(small);
console.log(result);

// Exercise 10: symmetricDifference() Basic
// Create two sets: left = new Set([1, 2, 3]) and right = new Set([3, 4, 5]).
// Use symmetricDifference() to get values that exist in only one of the sets.
// Log the result.
const left = new Set([1, 2, 3]);
const right = new Set([3, 4, 5]);
result = left.symmetricDifference(right);
console.log(result);