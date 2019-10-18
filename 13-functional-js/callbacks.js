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

// Exercise 1.0
// Create a function which takes a number and returns true if it's positive or zero and false otherwise
// Example:
// isPositive (3) -> true
// isPositive (-5) -> false

function isPositive(number) {
   if (number < 0) {
      return false;
   }
   return true;
}

testEqual("Exercise 1.0.1", isPositive(3), true);
testEqual("Exercise 1.0.2", isPositive(-5), false);
testEqual("Exercise 1.0.3", isPositive(0), true);
testEqual("Exercise 1.0.4", isPositive(-0), true);

// Exercise 1. 1
// Create a function which takes an array of numbers and returns an array which just contains the numbers that are positive or zero from that array.
// Use the builtin Array method: filter
// Notes: Use the function isPositive from Exercise 4.0
// Example:
// filterPositive ([-3, 5, -7, 6]) -> [5, 6]

function filterPositive(arrayOfNumbers) {
   return arrayOfNumbers.filter(isPositive);
}

testEqual("Exercise 1.1.1", filterPositive([-3, 5, -7, 6]), [5, 6]);
testEqual("Exercise 1.1.2", filterPositive([-3, 0, 5, -7, 6]), [0, 5, 6]);
testEqual("Exercise 1.1.3", filterPositive([-0, 5, -7, 6]), [0, 5, 6]);

// Exercise 2.0
// Write a function which compares two numbers a and b
// if a is greater than b return 1
// if b is greater than a return -1
// if they are equal return 0

// Example:
// compareNumbers (3, 1) -> 1
// compareNumbers (1, 3) -> -1
// compareNumbers (3, 3) -> 0

function compareNumbers(a, b) {
   if (a > b) {
      return 1;
   } else if (a < b) {
      return -1;
   }
   return 0;
}

function compareNumbers1(a, b) {
   if (a - b > 0) {
      return 1;
   } else if (a - b < 0) {
      return -1;
   }
   return 0;
}

testEqual("Exercise 2.0.1", compareNumbers(3, 1), 1);
testEqual("Exercise 2.0.2", compareNumbers(1, 3), -1);
testEqual("Exercise 2.0.3", compareNumbers(3, 3), 0);
testEqual("Exercise 2.0.4", compareNumbers(-3, -7), 1);
testEqual("Exercise 2.0.5", compareNumbers(-3, 2), -1);
testEqual("Exercise 2.0.6", compareNumbers(-0, 0), 0);

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
   array.sort(compareNumbers);
   return array;
}

// console.log(sortNumberArray([6, 2, 4, 7]), [2, 4, 6, 7]);
// console.log(sortNumberArray([7, 10, 1]), [1, 7, 10]);

// Exercise 3
// Create a function which takes an array of strings and returns a new array, which contains the same strings, but in uppercase. But don't use a loop.
// Use the builtin Array method: map
// Try using an array literal as the argument to map.

// exit: ?array, ?array elements strings, 
// parameters: array of strings
// output: array of uppercase strings
// main goal: convert array strings to uppercase and return them in a loop

function convertToUppercaseArray (array) {
   if (!Array.isArray(array)) {
      throw Error ("The input value is not an array.");
   }

   var upperCaseArray = array.map(toUpper);
   
   function toUpper (string) {
      return string.toUpperCase();
   };

return upperCaseArray;
}

// console.log(convertToUppercaseArray(["apples","bananas","Oranges","Plums"]));
// console.log(convertToUppercaseArray("apples"));


// function convertToUppercaseArray1 (array) {
//    if (!Array.isArray(array)) {
//       throw Error ("The input value is not an array.");
//    }

//    var upperCaseArray = array.map(function toUpper (string) {
//       return string.toUpperCase();
//    };)

// return upperCaseArray;
// }

// }

// Exercise 4
// Create a function which takes an array of strings and returns the first Element in the array, which starts with 'A'
// If there's no element that satisfies that condition return null.
// Write this function, without writing a loop! Instead use the builtin array method: find
// Examples
// findA (['Orange', 'Apple', 'Banana']) -> 'Apple'
// findA (['B', 'C', 'D']) -> null

// exit: ?array, ?array elements strings 
// parameters: array of strings
// output: string from the element in the array starting with A 
// main goal: use find method on the array to extract array element

function getFirstCharInString (string) {
   if (!typeof string) {
      throw Error ("The value is not a string.");
   }

   if (string.charAt(0) == "A") {
      return string;
   }
}

function findA (array) {
   if (!Array.isArray(array)){
      throw Error ("The input value is not an array.");
   }
   
   var stringStartingWithA = array.find(getFirstCharInString);

   if (typeof stringStartingWithA != "string" ) {
      return null;
   } 
   //else {
      return stringStartingWithA;
   //}
}

console.log(findA(['Orange', 'npple', 'Banana']));
// testEqual("Exercise 4.1", getFirstCharInString(['Orange', 'Apple', 'Banana']), 'Apple');
// testEqual("Exercise 4.2", getFirstCharInString(['B', 'C', 'D']), null);


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


