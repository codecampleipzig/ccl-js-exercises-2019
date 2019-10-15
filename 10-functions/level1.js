// Test function

function testEqual(name, testValue, expected) {
   if (testValue != expected) {
      console.log ("Test " + name + " failed. Expected : " + expected + " Actual value: " + testValue);
   }
   else {
      console.log ("Bravissimo!!!!!")
   }
}

// Exercise 1
// Create a function that takes two numbers as arguments and return their sum
// Examples:
//    addition (3, 2) ➞ 5
//    addition (-3, -6) ➞ -9
//    addition (7, 3) ➞ 10

function addition(a, b) {
   return (a + b);
}

testEqual ("Addition", addition(3, 2), 5);
testEqual ("Addition", addition(-3, -6), -9);
testEqual ("Addition", addition(7, 3), 10);

// Exercise 2
// Create a function that takes an array and returns the first element.
// Examples:
//    getFirstValue ([1, 2, 3]) ➞ 1
//    getFirstValue ([80, 5, 100]) ➞ 80
//    getFirstValue ([-500, 0, 50]) ➞ -500

function getFirstValue(array) {
   return array[0]; 
}

testEqual ("getFirstValue", getFirstValue([1, 2, 3]), 1);
testEqual ("getFirstValue", getFirstValue([80, 5, 100]), 80);
testEqual ("getFirstValue", getFirstValue([-500, 0, 50]), -500);

// Exercise 3
// Write a function that takes the base and height of a tri and return its area
// Examples
//    triArea(3, 2) ➞ 3
//    triArea(7, 4) ➞ 14
//    triArea(10, 10) ➞ 50
// Notes
//    The area of a tri is: (base * height) / 2

function triArea(height, base) {
   return ((height * base)/2);
}

testEqual ("triArea", triArea(3, 2), 3);
testEqual ("triArea", triArea(7, 4), 14);
testEqual ("triArea", triArea(10, 10), 50);

// Exercise 4
// Create a function that takes two integers and checks if they are equal.
// Examples
//    isEqual(5, 6) ➞ false
//    isEqual(1, 1) ➞ true
//    isEqual("1", 1) ➞ false
// Notes
//    If there is a string then it should return false.

function isEqual (a, b) {
   if (typeof a == "string" || typeof b == "string" || a != b) {
      return false;   
   } 
   else {
      return true;
   }
}

testEqual ("Equal", isEqual(5, 6), false);
testEqual ("Equal", isEqual(1, 1), true);
testEqual ("Equal", isEqual("1", 1), false);

// Exercise 5
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
//    addition(0) ➞ 1
//    addition(9) ➞ 10
//    addition(-3) ➞ -2

function addition2(a) { 
   return a + 1; 
}

testEqual ("addition", addition2 (0), 1);
testEqual ("addition", addition2 (9), 10);
testEqual ("addition", addition2 (-3), -2);

// Exercise 6
// Create a function that finds the maximum *integer* range of a tris third edge.
// Examples
//    nextEdge(8, 10) ➞ 17
//    nextEdge(5, 7) ➞ 11
//    nextEdge(9, 2) ➞ 10
// Notes
//    (side1 + side2) - 1 = maximum range of third edge.
//    tris have side lengths that are positive integers.

function nextEdge(a, b) {
   return a + b - 1;
}

testEqual ("nextEdge", nextEdge(8, 10), 17);
testEqual ("nextEdge", nextEdge(5, 7), 11);
testEqual ("nextEdge", nextEdge(9, 2), 10);

// Exercise 7
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
//    remainder(1, 3) ➞ 1
//    remainder(3, 4) ➞ 3
//    remainder(-9, 45) ➞ -9
//    remainder(5, 5) ➞ 0
// Notes
//    The tests only use positive and negative integers.

function remainder(a, b) {
   return a % b;
}

testEqual ("remainder", remainder(1, 3), 1);
testEqual ("remainder", remainder(5, 5), 0);
testEqual ("remainder", remainder(-9, 45), -9);
testEqual ("remainder", remainder(5, 5), 0);

// Exercise 8
// The Farm Problem
// You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.
// Examples
//    animals(2, 3, 5) ➞ 36
//    animals(1, 2, 3) ➞ 22
//    animals(5, 2, 8) ➞ 50

function animals(a, b, c) {
   return a * 2 + b * 4 + c * 4;
}

testEqual ("animals", animals(2, 3, 5), 36)
testEqual ("animals", animals(1, 2, 3), 22)
testEqual ("animals", animals(5, 2, 8), 50)

// Exercise 9
// Profitable Gamble
// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
// Examples
//    profitableGamble(0.2, 50, 9) ➞ true
//    profitableGamble(0.9, 1, 2) ➞ false
//    profitableGamble(0.9, 3, 2) ➞ true
// Notes
//    A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
   return prob * prize > pay;
}

testEqual ("profitable Gamble", profitableGamble(0.2, 50, 9), true);
testEqual ("profitable Gamble", profitableGamble(0.9, 1, 2), false);
testEqual ("profitable Gamble", profitableGamble(0.9, 3, 2), true);

// Exercise 10
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is divisible by 5, and false otherwise.
// Examples
//    divisibleByFive(5) ➞ true
//    divisibleByFive(-55) ➞ true
//    divisibleByFive(37) ➞ false

function divisibleByFive(a) {
   if (a % 5 == 0) {
      return true;
   }
   return false;
}

testEqual ("divisibleByFive", divisibleByFive(5), true);
testEqual ("divisibleByFive", divisibleByFive(-55), true);
testEqual ("divisibleByFive", divisibleByFive(37), false);

// Exercise 11
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.
// Examples
//    isEmpty("") ➞ true
//    isEmpty(" ") ➞ false
//    isEmpty("a") ➞ false
// Notes
//    A string containing only whitespaces " " does not count as empty.

function isEmpty(string) {
   if (string == "") {
      return true;
   }
   return false;
}

testEqual ("isEmpty", isEmpty(""), true);
testEqual ("isEmpty", isEmpty(" "), false);
testEqual ("isEmpty", isEmpty("a"), false);

// Exercise 12
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
// Examples
//    getLastItem([1, 2, 3]) ➞ 3
//    getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//    getLastItem([true, false, true]) ➞ true

function getLastItem(array) {
   // console.log (array.length -1)
   return array[array.length -1];
}

testEqual ("getLastItem", getLastItem([1, 2, 3]), 3);
testEqual ("getLastItem", getLastItem(["cat", "dog", "duck"]), "duck");
testEqual ("getLastItem", getLastItem([true, false, true]), true);

// Exercise 13
// Find the Index (Part 1)
// Create a function that finds the index of a given item.
// Examples
//    search([1, 5, 3], 5) ➞ 1
//    search([9, 8, 3], 3) ➞ 2
//    search([1, 2, 3], 4) ➞ -1
// Notes
//    If the item is not present, return -1.



// Exercise 14
// Find the Index (part 2)
// Create a function that finds the index of a given item if the array is sorted.
// Examples
//    search([1, 2, 3, 4], 3) ➞ 2
//    search([2, 4, 6, 8, 10], 8) ➞ 3
//    search([1, 3, 5, 7, 9], 11) ➞ -1
// Notes
//    If the item is not present, return -1.

// Exercise 15
// Volume of a Box
// Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.
// Examples
//    volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//    volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//    volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// Exercise 16
// Check String for Spaces
// Create a function that returns true if a string contains any spaces.
// Examples
//    hasSpaces("hello") ➞ false
//    hasSpaces("hello, world") ➞ true
//    hasSpaces(" ") ➞ true
//    hasSpaces("") ➞ false
//    hasSpaces(",./!@#") ➞ false
// Notes
//    You can use "string".charAt(index) to get the character at a certain index in a string
//    "string".charAt(4) ➞ "i"

function hasSpaces(string) {
   
}

// Exercise 17
// Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// Exercise 18
// To the Power of _____
//    Create a function that takes a base number and an exponent number and returns the calculation.
// Examples
//    calculateExponent(5, 5) ➞ 3125
//    calculateExponent(10, 10) ➞ 10000000000
//    calculateExponent(3, 3) ➞ 27
// Notes
//    All test inputs will be positive integers.

// Exercise 19
// Add, Subtract, Multiply or Divide?
// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
// Examples
//    operation(15, 9) ➞ "added"
//    operation(26, 2) ➞ "subtracted"
//    operation(11, 11) ➞ null
// Notes
//    Only integers are used as test input.
//    Numbers should be added, subtracted, divided or multiplied in the order they appear in the parameters.

// Exercise 20
// Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// Examples
//    isPlural("changes") ➞ true
//    isPlural("change") ➞ false
//    isPlural("dudes") ➞ true
//    isPlural("magic") ➞ false
// Notes
//    This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

// Exercies 21
// Find the Total Number of Digits the Given Number Has
// Create a function that takes a number as an argument and returns the amount of digits it has.
// Examples
//    findDigitAmount(123) ➞ 3
//    findDigitAmount(56) ➞ 2
//    findDigitAmount(7154) ➞ 4
//    findDigitAmount(61217311514) ➞ 11
//    findDigitAmount(0) ➞ 1
