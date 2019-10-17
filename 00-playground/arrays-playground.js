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

///////////////////////////////////////////////////////////////

// Exercise 1
// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

// Solution 1 (need to check my fixes)
function reverseArray(array) {
   return array.reverse();
}

// Solution 2
function reverse(array) {
   var result = [];
   for (i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
   }
   return result;
}

testEqual("Exercise 1.1", reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
testEqual("Exercise 1.2", reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9]);
testEqual("Exercise 1.3", reverse([]), []);

// Exercise 2
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

// use getLastItem from function-playground.js

function getLastItem(array) {
   return array[array.length - 1];
}

testEqual("Exercise 2.1", getLastItem([1, 2, 3]), 3);

// Exercise 3
// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

// exit: ?array, ?array elements are numbers, ?array.length>0;
// parameters: array, searchTerm
// output: true/false
// main goal: for --> array[i] == searchTerm; if no --> false; true

function isNumber(input) {
   if (typeof input != "number") {
      return false;
   }
   return true;
}

function check(inputArray, searchTerm) {
   if (!inputArray
      || !Array.isArray(inputArray)
      || inputArray.length == 0
      || !isNumber(searchTerm)) {
      return false;
   }
   for (var i = 0; i < inputArray.length; i++) {
      var element = inputArray[i];
      if (!isNumber(element)) {
         return false;
      }
      if (element == searchTerm) {
         return true;
      }
   }
   return false;
}

testEqual("Exercise 3.1", check([1, 2, 3, 4, 5], 3), true);
testEqual("Exercise 3.2", check([1, 1, 2, 1, 1], 3), false);
testEqual("Exercise 3.3", check([5, 5, 5, 6], 5), true);
testEqual("Exercise 3.4", check([], 5), false);


// Exercise 4
// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.
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

// exit: ?number, ?number(1-12)
// parameters: number
// output: string
// main goal: return Month as string when given number is input - possible solutions:
// 1. if number --> month; 2. switch case 3. NO - store months in array and based on number, return corresponding element

//Solution 1:
function monthName(monthNumber) {
   if (!isNumber(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      return "Month Number value is not a number or is not in the range between 1 and 12."
   }
   if (monthNumber == 1) {
      return "January";
   } else if (monthNumber == 2) {
      return "February";
   } else if (monthNumber == 3) {
      return "March";
   } else if (monthNumber == 4) {
      return "April";
   } else if (monthNumber == 5) {
      return "May";
   } else if (monthNumber == 6) {
      return "June";
   } else if (monthNumber == 7) {
      return "July";
   } else if (monthNumber == 8) {
      return "August";
   } else if (monthNumber == 9) {
      return "September";
   } else if (monthNumber == 10) {
      return "October";
   } else if (monthNumber == 11) {
      return "November";
   } else if (monthNumber == 12) {
      return "December";
   }
}

// Solution 2
function monthName2(monthNumber) {
   switch (monthNumber) {
      case 1:
         return "January";
      case 2:
         return "February";
      case 3:
         return "March";
      case 4:
         return "April";
      case 5:
         return "May";
      case 6:
         return "June";
      case 7:
         return "July";
      case 8:
         return "August";
      case 9:
         return "September";
      case 10:
         return "October";
      case 11:
         return "November";
      case 12:
         return "December";
      default:
         return "Month Number value is not a number or is not in the range between 1 and 12."
   }
}

testEqual("Exercise 4.1", monthName2(3), "March");
testEqual("Exercise 4.2", monthName2(12), "December");
testEqual("Exercise 4.3", monthName2(6), "June");
testEqual("Exercise 4.4", monthName2(13), "Month Number value is not a number or is not in the range between 1 and 12.");

// Exercise 5
// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]

// exit: number?
// parameters: number
// output: array of numbers
// main goal: create array by looping with length == inputNumber; set initial array before the loop and fill it with elements by using the loop

function countdown(inputNumber) {
   if (!isNumber(inputNumber)) {
      return "The input number is not a number.";
   }
   var arrayOfNumbers = [];
   for (i = inputNumber; i >= 0; i--) {
      arrayOfNumbers.push(i);
   }
   return arrayOfNumbers;
}

testEqual("Exercise 5.1", countdown(5), [5, 4, 3, 2, 1, 0]);
testEqual("Exercise 5.1", countdown(1), [1, 0]);
testEqual("Exercise 5.1", countdown(0), [0]);
testEqual("Exercise 5.1", countdown("something"), "The input number is not a number.");

// Exercise 6
// Get Student Names
// Create a function that takes an array of students and returns an array of student names.
// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Steve", "Mike", "John"]

// exit: ?array, ?array element values strings (NOT A VALID CHECK??? - I AM EXPECTING OBJECTS), ?array empty
// parameters: arrayOfStudents
// output: arrayOfStudentNames
// main goal: get array elements by looping through the array; out of each element extract the student name and store it into a new array;

function getStudentNames(arrayOfStudents) {
   if (!Array.isArray(arrayOfStudents) || !arrayOfStudents || arrayOfStudents.length == 0) {
      return "The input value is either not an array or is an empty array."
   }
   var arrayOfStudentNames = [];
   for (var i = 0; i < arrayOfStudents.length; i++) {
      var element = arrayOfStudents[i];
      arrayOfStudentNames.push(element.name);
   }
   return arrayOfStudentNames;
}

testEqual("Exercise 6.1", getStudentNames([
   { name: "Steve" },
   { name: "Mike" },
   { name: "John" }
]), ["Steve", "Mike", "John"]);
testEqual("Exercise 6.2", getStudentNames([]), "The input value is either not an array or is an empty array.");

// Exercise 7
// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.
// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18
// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

// exit: ?array, ?array empty, array elements are not numbers 
// parameters: array
// output: number calculated from operation on particular array elements
// main goal: set min and max variable with initial value; iterate through the array and compare the values:
// if element value is less than value in min variable, set that as new value for min variable
// if element value is greater than value in max variable, set that as new value for max variable

function difference(arrayOfIntegers) {
   if (!Array.isArray(arrayOfIntegers) || !arrayOfIntegers || arrayOfIntegers.length == 0) {
      return "The input value is either not an array or is an empty array.";
   }

   var firstElement = arrayOfIntegers[0];
   var minimumValue = firstElement;
   var maximumValue = firstElement;

   for (var i = 0; i < arrayOfIntegers.length; i++) {
      var element = arrayOfIntegers[i];

      if (!isNumber(element)) {
         return "The array contains elements that are not number.";
      }

      var isLessThanMinimumValue = element < minimumValue;
      if (isLessThanMinimumValue) {
         minimumValue = element;
      }

      var isGreaterThanMaximumValue = element > maximumValue;
      if (isGreaterThanMaximumValue) {
         maximumValue = element;
      }
   }

   return maximumValue - minimumValue;
}

testEqual("Exercise 8.1", difference([10, 15, 20, 2, 10, 6]), 18);
testEqual("Exercise 8.2", difference([-3, 4, -9, -1, -2, 15]), 24);
testEqual("Exercise 8.3", difference(12), "The input value is either not an array or is an empty array.");
testEqual("Exercise 8.4", difference(["Smith", "John"]), "The array contains elements that are not number.");

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

// exit: ?array, ?array empty (length and !), array elements are not string 
// parameters: arrayOfNames
// output: string that is created by concatenating first characters in strings that are array elements
// main goal: iterate the array to get the value of each element; take the value from it and take its first character and store it in array; 
// once done with the for loop, sort the array using Array.sort(); after that, perform concatenation of elements into a string and return the value

function societyName(arrayOfNames) {
   if (!Array.isArray(arrayOfNames) || !arrayOfNames || arrayOfNames.length == 0) {
      return "The input value is either not an array or is an empty array.";
   }
   //var arrayOfInitialCharacters = [];
   var initialCharactersArray = [];
   for (var i = 0; i < arrayOfNames.length; i++) {
      var element = arrayOfNames[i];
      if (typeof element != "string" || element == "") {
         return "The array contains elements that are not string or are an empty string."
      }
      var initialLetter = element.charAt(0);
      initialCharactersArray.push(initialLetter);
   }
   var sortedArray = initialCharactersArray.sort();
   var initialCharactersString = "";
   for (var i = 0; i < sortedArray.length; i++) {
      initialCharactersString = initialCharactersString + sortedArray[i];
   }
   return initialCharactersString;
}

testEqual("Exercise 8.1", societyName(["Adam", "Sarah", "Malcolm"]), "AMS");
testEqual("Exercise 8.2", societyName(["Harry", "Newt", "Luna", "Cho"]), "CHLN");
testEqual("Exercise 8.3", societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]), "CJMPRR");
testEqual("Exercise 8.4", societyName(1), "The input value is either not an array or is an empty array.");
testEqual("Exercise 8.5", societyName([1, 2, 3]), "The array contains elements that are not string or are an empty string.");
