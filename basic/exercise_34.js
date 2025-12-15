// Dates

// Exercise 1: Create a New Date Object
// Create a variable named today and set it to a new Date object.
// Log today to the console.
const today = new Date();
console.log(today);

// Exercise 2: Create Date with Specific Values
// Create a Date object for 1 January 2025.
// Log the date.
const specificDate = new Date(2025, 0, 1);
console.log(specificDate);

// Exercise 3: Raw Date Data
// Create a new Date object and log it directly.
// Observe the raw date and time data.
const rawDate = new Date();
console.log(rawDate);

// Exercise 4: Display Date as Readable String
// Create a new Date object.
// Use toDateString() to display only the date part.
// Log the result.
const readableDate = new Date();
console.log(readableDate.toDateString());

// Exercise 5: Display Date and Time
// Create a new Date object.
// Use toLocaleString() to display date and time in a readable format.
// Log the result.
const localeDateTime = new Date();
console.log(localeDateTime.toLocaleString());

// Exercise 6: Get Current Year
// Create a new Date object.
// Use getFullYear() to get the current year.
// Log the result.
const currentYear = new Date();
console.log(currentYear.getFullYear());

// Exercise 7: Get Current Month
// Create a new Date object.
// Use getMonth() to get the current month.
// Log the result.
// (Remember: months start from 0)
const currentMonth = new Date();
console.log(currentMonth.getMonth());

// Exercise 8: Get Current Day of Month
// Create a new Date object.
// Use getDate() to get today’s date (day of the month).
// Log the result.
const currentDay = new Date();
console.log(currentDay.getDate());

// Exercise 9: Set Year
// Create a new Date object.
// Use setFullYear(2030) to change the year.
// Log the updated date.
const dateSetYear = new Date();
dateSetYear.setFullYear(2030);
console.log(dateSetYear);

// Exercise 10: Set Month and Date
// Create a new Date object.
// Use setMonth(11) and setDate(25) to change it to 25 December.
// Log the updated date.
const dateSetMonthDay = new Date();
dateSetMonthDay.setMonth(11);
dateSetMonthDay.setDate(25);
console.log(dateSetMonthDay);