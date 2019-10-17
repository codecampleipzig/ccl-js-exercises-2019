// Exercise 1
// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []


function reverse (myArray) {
   result = [];
   arrayLength = myArray.length;
   for (var i = 0; i < myArray.length; i = i + 1) {
        result.push (myArray[arrayLength - 1 - i]);
   }
   return result;
}

console.log (reverse ([1, 2, 3, 4]));
console.log (reverse ([9, 9, 2, 3, 4]));
console.log (reverse ([]));

// Exercise 2
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

function getLastItem (myArray) {
   return myArray[myArray.length - 1];
}

console.log (getLastItem ([1, 2, 3]));
console.log (getLastItem (["cat", "dog", "duck"]) == "duck");
console.log (getLastItem ([true, false, true]));

// Exercise 3
// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check (myArray, myNumber) {
   for (i = 0; i < myArray.length; i = i + 1) {
      if (myArray[i] == myNumber) {
         return true;
      }
   }
   return false;
}

console.log (check ([1, 2, 3, 4, 5], 3));
console.log (check ([1, 2, 1], 3));
console.log (check ([], 5));

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

myDict = {
   1: "Jan",
   2: "Feb",
};

console.log (myDict[2]);
console.log ("We prefer to use a dictionary!");

function monthName (key) {
   months = ["jan", "feb", "mar"];
   if (key < 1 || key > 12 || !(typeof (key) == "number")) {
      throw Error ("Key must be a number, which is between 1 and 12 inclusive! Try again!");
   }
   return months[key - 1];
}
// Strictly, should throw Error ()... but then need a Try-Catch block too...

//console.log (monthName(3));
//console.log (monthName(0));
// Error will stop script. So test next one separately...
// console.log (monthName("1"));


// Exercise 5
// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]

function countdown(number) {
   result = [];
   for (i = number; i >= 0; i = i - 1) {
      result.push(i);
   }
   return result;
}

console.log(countdown(5));
console.log(countdown(0));



// Exercise 6
// Get Student Names
// Create a function that takes an array of students and returns an array of student names.
// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Steve", "Mike", "John"]

function getStudentNames (myArray) {
   newArray = [];
   for (i = 0; i <= myArray.length; i = i + 1) {
      element = myArray[i];
      newArray.push(element["name"]);
   }
   return newArray;
}

console.log(getStudentNames([
   { name: "Steve" },
   { name: "Mike" },
   { name: "John" }
   ]));

// Exercise 7
// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.
// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

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

console.log ("All tests completed!")