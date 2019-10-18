// HELPER TESTING FUNCTION
function eq(lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length) {
      for (var i = 0; i < lhs.length; i++) {
         if (!eq(lhs[i], rhs[i])) { // if(!eq(lhs[i], rhs[i])) === if(eq(lhs[i], rhs[i]) == false)
            return false;
         }
      }
      return true;
   }
   else {
      return lhs == rhs;
   }
}

function testEqual(name, testValue, expectedValue) {
   if (!eq(testValue, expectedValue)) {
      console.log("Test " + name + " failed: Expected value: " + expectedValue + ". Actual value: " + testValue);
   }
}

// exit: ?array, ?array elements are numbers, ?array.length>0;
// parameters: array, searchTerm
// output: true/false
// main goal: for --> array[i] == searchTerm; if no --> false; true

///////////////////////////////////////////////////////////////

// Pre-Exercise 0
// Create a function called addTwo that accepts one input and adds 2 to it

function addTwo (input) {
   // if needed, add validation for input to be number
   return input + 2;
}

testEqual("Pre-Exercise 0.1", addTwo(1), 3);
testEqual("Pre-Exercise 0.2", addTwo("test"), "test2");

// Pre-Exercise 1
// Create a function addS that accepts one input argument and adds an "s" to it

function addS (input) {
   return input + "s";
}
testEqual("Pre-Exercise 1.1", addS(1), "1s");
testEqual("Pre-Exercise 1.1", addS("test"), "tests");

// Challenge 1
// Create a function called map that takes two inputs:
// 1. an array of numbers
// 2. a 'callback' function - a function that is applied to each element of the array inside of the function map
// Have map return a new array filled with numbers that are the result of using the callback function on each element of the input array.
// Don't use Array.prototype.map

// Example
// map ([1, 2, 3, 4], addTwo) -> [3, 5, 7, 9]
// map (['apple', 'orange', 'banana'], addS) -> ['apples', 'oranges', 'bananas']

// exit: ?array, ?array elements are numbers, ?array.length>0;
// parameters: array, callback function
// output: array
// main goal: for --> array[i] == searchTerm; if no --> false; true

// Challenge 2
// Create a function called forEach, that takes an array and a callback and runs the callback on each element of the array.
// Don't use Array.prototype.forEach

// Example
// var alphabet = "";
// forEach (['a', 'b', 'c'], function (char) {
//    alphabet += char;
// });
// console.log (alphabet); // prints 'abc'

// Challenge 3
// Create a function called filter that takes an array and a test-callback function.
// filter should return an array that contains all the elements from the input array, for which the test function returns true, if applied to the element.
// Don't use Array.prototype.filter

// Example
// filter ([2, 5, 3, 8, 10], function (num) {
//    return num >= 5;
// })    // -> [5, 8, 10]
