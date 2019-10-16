function eq(lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) &&
      lhs.length == rhs.length) {
      for (var i = 0; i < lhs.length; i++) {
         if (!eq(lhs[i], rhs[i])) {
            return false;
         }
      }
      return true;
   }
   else {
      return lhs === rhs;
   }
}

function testEqual(testName, testValue, expectedValue) {
   if (!eq(testValue, expectedValue)) {
      console.log("Test failed: " + testName + " Expected: " + expectedValue +
         " Actual: " + testValue);
   }
}

// Exercise 1
// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reverse(array) {
   if (Array.isArray(array) == false) {
      throw Error("Error in Reverse!!!");
   }
   var result = [];
   for (var i = array.length - 1; i >= 0; i = i - 1) {
      result.push(array[i]);
   }
   return result;
}

var myArray = [1, 2, 3, 4];
testEqual("testEqual", [4, 3, 2, 1], [4, 3, 2, 1]);
testEqual("reverse", reverse(myArray), [4, 3, 2, 1]);
testEqual("reverse is pure", myArray, [1, 2, 3, 4]);

testEqual("reverse", reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9]);
testEqual("reverse", reverse([]), []);


// Exercise 2
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

function getLastItem(array) {
   return array[array.length - 1];
}

testEqual('getLastItem', getLastItem([1, 2, 3]), 3);

// Exercise 3
// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check(array, num) {
   for (var i = 0; i < array.length; i++) {
      if (array[i] == num) {
         return true;
      }
   }
   return false;
}

// Exercise 4
// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
// Number	Month Name
// 1	      January
// 2	      February
// 3     	March
// 4	      April
// 5	      May
// 6	      June
// 7     	July
// 8     	August
// 9	      September
// 10	      October
// 11	      November
// 12	      December
// Examples
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
// Notes
// You can expect only integers ranging from 1 to 12 as test input.

// Exercise 5
// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]

// Exercise 6
// Get Student Names
// Create a function that takes an array of students and returns an array of student names.
// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Steve", "Mike", "John"]

// Exercise 7
// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.
// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

function max (array) {
   var result = array[0];
   for (var i = 1; i < array.length; i++) {
      if (array[i] > result) {
         result = array[i];
      }
   }
   return result;
}

function min (array) {
   var result = array[0];
   for (var i = 1; i < array.length; i++) {
      if (array[i] < result) {
         result = array[i];
      }
   }
   return result;
}

function difference (array) {
   return max (array) - min (array);
}

testEqual ("difference", difference ([10, 15, 20, 2, 10, 6]), 18);

// Exercise 8
// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.

console.log("All tests completed!");