function eq(lhs, rhs) {
    if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length) {
       for (var i = 0; i < lhs.length; i++) {
          if (!eq(lhs[i], rhs[i])) {
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
 
 // Exercise 1
 // Reverse an Array
 // Write a function to reverse an array.
 // Examples
 // reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
 // reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
 // reverse([]) ➞ []
 
 // Solution 1 - all tests failing
 function reverseArray(a) {
    return a.reverse();
 }
 
 // Solution 2 - use for loop
 
 function reverse(array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
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
 
 // Exercise 3
 // Check if an Array Contains a Given Number
 // Write a function to check if an array contains a particular number.
 // Examples
 // check([1, 2, 3, 4, 5], 3) ➞ true
 // check([1, 1, 2, 1, 1], 3) ➞ false
 // check([5, 5, 5, 6], 5) ➞ true
 // check([], 5) ➞ false
 
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
 
 function countdown(number) {
    var array = [];
    for (i = number; i >= 0; i--) {
       array.push(i);
    }
    return array;
 }
 
 testEqual("Exercise 5.1", countdown(5), [5, 4, 3, 2, 1, 0]);
 testEqual("Exercise 5.2", countdown(1), [1, 0]);
 testEqual("Exercise 5.3", countdown(0), [0]);
 
 
 // Exercise 6
 // Get Student Names
 // Create a function that takes an array of students and returns an array of student names.
 // Examples
 // getStudentNames([
 //   { name: "Steve" },
 //   { name: "Mike" },
 //   { name: "John" }
 // ]) ➞ ["Steve", "Mike", "John"]
 
 function getStudentNames(students) {
    var studentNames = [];
    for (i = 0; i < students.length; i++) {
       studentNames.push(students[i].name);
    }
    return studentNames;
 }
 
 testEqual("Exercise 6.1", getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
 ]), ["Steve", "Mike", "John"]);
 
 
 // console.log(getStudentNames([
 //    { name: "Steve" },
 //    { name: "Mike" },
 //    { name: "John" }
 //  ]));
 
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
 
 function societyName(friends) {
    var arrayResult = "";
    var firstLetter = "";
    for (var i = 0; i < friends.length; i++) {
       arrayResult.concat(friends[i].charAt(0));
    }
    
    var stringResult = String (arrayResult.sort());
    var stringConcat = stringResult.concat();
    var stringConcat1 = stringConcat.replace(/,/i, '');
    return stringConcat1.replace(/,/i, '');
 
 }
 
 console.log(societyName(["Adam", "Sarah", "Malcolm"]));