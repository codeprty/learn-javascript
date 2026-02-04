// RegExp Flags

// Exercise 1: Global Flag (/g)
// Create a string variable named `text` with the value "cat cat dog".
// Create a RegExp that matches the word "cat" and uses the global flag.
// Log whether the RegExp has the global flag enabled.
// Use the RegExp on the string, get all matches, and log the matches.
const text = "cat cat dog";

const patternText = /cat/g;
console.log(patternText.global);

const matchText = text.match(patternText);
console.log(matchText);

// Exercise 2: Ignore Case Flag (/i)
// Create a string variable named `word` with the value "Hello".
// Create a RegExp that matches "hello" and ignores letter casing.
// Log whether the RegExp ignores case.
// Use the RegExp to test the string and log the result.
const word = "Hello";

const patternWord = /hello/i;
console.log(patternWord.ignoreCase);

const matchWord = word.match(patternWord);
console.log(matchWord);

// Exercise 3: Multiline Flag (/m)
// Create a string variable named `lines` with the value "apple\nbanana".
// Create a RegExp that matches "banana" only if it appears at the start of a line.
// Use the multiline flag.
// Log whether the RegExp has the multiline flag enabled.
// Use the RegExp to test the string and log the result.
const lines = "apple\nbanana";

const patternLines = /^banana/m;
console.log(patternLines.multiline);

const matchLines = lines.match(patternLines);
console.log(matchLines);

// Exercise 4: Dot All Flag (/s)
// Create a string variable named `message` with the value "Hello\nWorld".
// Create a RegExp that matches "Hello.World" where the dot can match a newline.
// Use the dotAll flag.
// Log whether the RegExp has the dotAll flag enabled.
// Use the RegExp to test the string and log the result.
const message = "Hello\nWorld";

const patternMessage = /Hello.World/s;
console.log(patternMessage.dotAll);

const matchMessage = message.match(patternMessage);
console.log(matchMessage);

// Exercise 5: Sticky Flag (/y)
// Create a string variable named `input` with the value "123abc".
// Create a RegExp that matches numbers and uses the sticky flag.
// Log whether the RegExp has the sticky flag enabled.
// Use the RegExp to execute a match and log the result.
const input = "123abc";

const patternInput = /[0-9]/y;
console.log(patternInput.sticky);

const matchInput = patternInput.exec(input);
console.log(matchInput);

// Exercise 6: Unicode Flag (/u)
// Create a string variable named `emoji` with the value "😊".
// Create a RegExp that matches the emoji using the unicode flag.
// Log whether the RegExp has the unicode flag enabled.
// Use the RegExp to test the string and log the result.
const emoji = "😊";

const patternEmoji = /😊/u;
console.log(patternEmoji.unicode);

const matchEmoji = emoji.match(patternEmoji);
console.log(matchEmoji);

// Exercise 7: Has Indices Flag (/d)
// Create a string variable named `data` with the value "apple".
// Create a RegExp that matches "pp" and uses the hasIndices flag.
// Log whether the RegExp has the hasIndices flag enabled.
// Use the RegExp to execute a match and log the result.
const data = "apple";

const patternData = /pp/d;
console.log(patternData.hasIndices);

const matchData = data.match(patternData);
console.log(matchData);

// Exercise 8: Unicode Sets Flag (/v)
// Create a string variable named `letters` with the value "a".
// Create a RegExp that matches "a" using the unicode sets flag.
// Log whether the RegExp has the unicodeSets flag enabled.
// Use the RegExp to test the string and log the result.
const letters = "a";

const patternLetters = /a/v;
console.log(patternLetters.unicodeSets);

const matchLetters = letters.match(patternLetters);
console.log(matchLetters);

// Exercise 9: Multiple Flags Properties
// Create a string variable named `phrase` with the value "Test test TEST".
// Create a RegExp that matches "test" using both global and ignore case flags.
// Log whether the RegExp has the global and ignores case flags enabled.
// Use the RegExp on the string, get all matches, and log the matches.
const phrase = "Test test TEST";

const patternPhrase = /test/gi;
console.log(patternPhrase.global);
console.log(patternPhrase.ignoreCase);

const matchPhrase = phrase.match(patternPhrase);
console.log(matchPhrase);

// Exercise 10: Multiline + DotAll Flags
// Create a string variable named `sentence` with the value "Line1: Hello\nLine2: World".
// Create a RegExp that matches any character (including newlines) at the start of each line.
// Use both the multiline (/m) and dotAll (/s) flags.
// Log whether the RegExp has the multiline and dotAll flag enabled.
// Use the RegExp on the string to find all matches and log the result.
const sentence = "Line1: Hello\nLine2: World";

const patternSentence = /^.+/ms;
console.log(patternSentence.multiline);
console.log(patternSentence.dotAll);

const matchSentence = sentence.match(patternSentence);
console.log(matchSentence);