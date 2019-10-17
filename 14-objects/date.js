// Exercise 1
// Create a function which returns the current year as a number
// currentYear() -> 2019
// Look at the MDN documentation for Date
// date() returns current date

function currentYear() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    return year;
}
console.log(currentYear());
    
// console.log(year);

// Exercise 2
// The first moon landing was on July 20, 1969, at 20:17 UTC
// Create a binding moonlandingDate and bind it to a Date object which represents that instance.

var moonlandingDate = new Date(Date.UTC(2019, 6, 20, 20, 17));

console.log(moonlandingDate.toUTCString());