// Exercise 1
// Create a function which returns the current year as a number
// currentYear() -> 2019
// Look at the MDN documentation for Date

// Exercise 2
// The first moon landing was on July 20, 1969, at 20:17 UTC
// Create a binding moonlandingDate and bind it to a Date object which represents that instance.


function currentYear () {
   var today = new Date;
    return today.getFullYear();
}
console.log (currentYear());

var moonLandingDate = new Date('July 20, 1969 20:17:00');
console.log (moonLandingDate.getFullYear());