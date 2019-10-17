// Deep equality Function
function eq(lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length) {
      for (var i = 0; i < lhs.length; i++) {
         if (!eq(lhs[i], rhs[i])) { //compare elements at index i in both lhs and rhs.
            return false;
         }
      }
      return true;
   }
   else {
      return lhs == rhs;
   }
}

// Test function:
function testEqual (name, testValue, expectedValue) {
   if (!eq(testValue, expectedValue)) {
      console.log('Test ' + name + ' failed: Expected: ' + expectedValue + '. Actual value: ' + testValue);
   }
}


// Exercise 1.0
// Create a function which takes a number and returns true if it's positive or zero and false otherwise
// Example:
// isPositive (3) -> true
// isPositive (-5) -> false

function isPositive(number) {
   return number >= 0;
}

testEqual ('1. isPositive:', isPositive(3), true);
testEqual ('1. isPositive:', isPositive(-5), false);

// Exercise 1. 1
// Create a function which takes an array of numbers and returns an array which just contains the numbers that are positive or zero from that array.
// Use the builtin Array method: filter
// Notes: Use the function isPositive from Exercise 4.0
// Example:
// filterPositive ([-3, 5, -7, 6]) -> [5, 6]

function filterPositive(array){
   return array.filter (isPositive);
}

testEqual ('1.2. filterPositive', filterPositive([-3, 5, -7, 6]), [5, 6]);
// console.log (eq ([], []));


// Exercise 2.0
// Write a function which compares two numbers a and b
// if a is greater than b return 1
// if b is greater than a return -1
// if they are equal return 0

// Example:
// compareNumbers (3, 1) -> 1
// compareNumbers (1, 3) -> -1
// compareNumbers (3, 3) -> 0

function compare(a, b) {
   if (a == b) {
      return 0;
   } 
   else if (a < b) {
      return -1;
   }
   else {
      return 1;
   }
}

testEqual ('2. compare', compare(3,1), 1);
testEqual ('2. compare', compare(1,3), -1);
testEqual ('2. compare', compare(3,3), 0);

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

function sortNumberArray(array){
   return array.sort(compare);
}

testEqual ('2.1 sortNumberArray', sortNumberArray([6, 2, 4, 7]), [2, 4, 6, 7]);

// Exercise 3
// Create a function which takes an array of strings and returns a new array, which contains the same strings, but in uppercase. But don't use a loop.
// Use the builtin Array method: map
// Try using an *function* literal as the argument to map.

function convertUpperCase(strings) {
   return strings.map(function upperCase(strings){
      return strings.toUpperCase();
   });
}

testEqual ('3 convertUpperCase', convertUpperCase(['abc', 'def', 'ghi']), ['ABC', 'DEF', 'GHI']);

// Exercise 4
// Create a function which takes an array of strings and returns the first Element in the array, which starts with 'A'
// If there's no element that satisfies that condition return null.
// Write this function, without writing a loop! Instead use the builtin array method: find
// Examples
// findA (['Orange', 'Apple', 'Banana']) -> 'Apple'
// findA (['B', 'C', 'D']) -> null


function findA (array) {
   return array.find(function indexA (a){
      return a;
   });
}


testEqual ('4 findA', findA(['orange', 'apple', 'banana']), 'apple');


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


