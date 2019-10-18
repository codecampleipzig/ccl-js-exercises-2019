function eq (lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length){
      for ( var i = 0; i < lhs.length; i++) { // create a foor loo, bind the loob variable, define the loop check condition
         // (as long as i is leth than element.lengt) and enter the loop body. At the end we increment
         if ( !eq (lhs[i], rhs[i]) ) {
            return false;
         }
      } return true;  // after we exit the loop we always! have to give back a value. Also incrementing happens here (loop Step)
   }
   else {
      return lhs == rhs;
   }
 }

 function testEqual(name, testValue, expected) {
   if ( !eq(testValue, expected)) {
      console.log ("Test " + name + " failed. Expected : " + expected + " Actual value: " + testValue);
   }
   else {
      console.log ("Bravissimo!!!!!")
   }
 }

// Exercise 1.0
// Create a function which takes a number and returns true if it's positive or zero and false otherwise
// Example:
// isPositive (3) -> true
// isPositive (-5) -> false

function isPositive (num){
   if (num >= 0){
      return true;
   }
   return false;
}

testEqual ("function isPositive", isPositive (3), true);
testEqual ("function isPositive", isPositive (-5), false);

// Exercise 1. 1
// Create a function which takes an array of numbers and returns an array which just contains the numbers that are positive or zero from that array.
// Use the builtin Array method: filter
// Notes: Use the function isPositive from Exercise 4.0
// Example:
// filterPositive ([-3, 5, -7, 6]) -> [5, 6]

function filterPositive(array) {
   var result = [];
   result = array.filter(isPositive);
   return result;
}

testEqual ("function filterIsPositiv", filterPositive([-3, 5, -7, 6]), [5, 6]);

// Exercise 2.0
// Write a function which compares two numbers a and b
// if a is greater than b return 1
// if b is greater than a return -1
// if they are equal return 0

// Example:
// compareNumbers (3, 1) -> 1
// compareNumbers (1, 3) -> -1
// compareNumbers (3, 3) -> 0

function compareNumbers (a, b) {
   if (a > b) {
      return 1;
   }
   else {
      if (a == b) {
         return 0;
      }

      return -1
   }
}

testEqual ("Test compareNumbers", compareNumbers(3, 1), 1);
testEqual ("Test compareNumbers", compareNumbers(1, 3), -1);
testEqual ("Test compareNumbers", compareNumbers(3, 3), 0);


// Exercise 2.1
// The builtin array method sort() takes an optional argument:
// A compare function that itself takes two arguments and returns:
//    - a negative number, if the first value should go before the second one.
//    - a positive number if the first value should go after the first one.
//    - 0, if the order between the values is undefined.
// Write a function sortNumberArray, which takes an array of numbers and returns a sorted version of the array. It's ok if the function mutates the input array.
// Note:
// Use the function you implemented in Exercise 2.0

// Example:
// sortNumberArray ([6, 2, 4, 7]) -> [2, 4, 6, 7]
// sortNumberArray ([7, 10, 1]) -> [1, 7, 10]

function sortNumberArray(array) {
   array.sort (compareNumbers);
   return array;
}

testEqual ("sortNumberArray", sortNumberArray([6,2,4,7]), [2, 4, 6, 7]);
testEqual ("sortNumberArray", sortNumberArray([7, 10, 1]), [1, 7 , 10]);

// Exercise 3
// Create a function which takes an array of strings and returns a new array, which contains the same strings, but in uppercase. But don't use a loop.
// Use the builtin Array method: map
// Try using a function literal as the argument to map.

var array = ["nico", "lena", "sind", "super"]

// Exercise 4
// Create a function which takes an array of strings and returns the first Element in the array, which starts with 'A'
// If there's no element that satisfies that condition return null.
// Write this function, without writing a loop! Instead use the builtin array method: find
// Examples
// findA (['Orange', 'Apple', 'Banana']) -> 'Apple'
// findA (['B', 'C', 'D']) -> null

// Advanced:

// Exercise 5
// Write a function which takes an array of numbers and returns the sum of all the numbers in the array, but without writing a loop.
// Instead use the builtin array method reduce.
// Examples:
// accumulate ([1, 2, 3]) -> 6
// accumulate ([]) -> 0

// Exercise 6: Putting it all together
// Write a function, which takes an array of objects representing posts as an argument.
// [{title: "What I like about JS", likes: 2},
//  {title: "What I don't like about JS", likes: 34},
//  {title: "Everyday Git", likes: 52}]
// The function should return an array of strings, one for every post, with more than 10 likes. They should be sorted by number of likes, the one with the most likes first and have this format:
// "<div class='post-title'>Everyday Git</div><div class='like-count'>52</div>"

// Notes: use .filter .sort and .map

// Extra Exercise:

// Go back to Exercise 2.1 and make the function pure, i.e. the input array should not be mutated in any way by the function call. How can you test this?


