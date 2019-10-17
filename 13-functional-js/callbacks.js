// Exercise 1.0
// Create a function which takes a number and returns true if it's positive or zero and false otherwise
// Example:
// isPositive (3) -> true
// isPositive (-5) -> false


function isPositive (num) {
   if ( num >= 0) {
      return true;
   }
   else {
      return false;
   }
}

//console.log(isPositive(3));
//console.log(isPositive(-5));


// Exercise 1. 1
// Create a function which takes an array of numbers and returns an array which just contains the numbers that are positive or zero from that array.
// Use the builtin Array method: filter
// Notes: Use the function isPositive from Exercise 4.0
// Example:
// filterPositive ([-3, 5, -7, 6]) -> [5, 6]

function filterPositive(func, array){
   return array.filter(func);
}

//console.log(filterPositive(isPositive, [-3, 5, -7, 6]))


// Exercise 2.0
// Write a function which compares two numbers a and b
// if a is greater than b return 1
// if b is greater than a return -1
// if they are equal return 0

// Example:
// compareNumbers (3, 1) -> 1
// compareNumbers (1, 3) -> -1
// compareNumbers (3, 3) -> 0

function compareNumbers (arg1, arg2) {
   if (arg1 > arg2) {
      return -1;
   }
   else if (arg1 == arg2) {
      return 0;
   }
   else {
      return 1;
   }
}

//console.log(compareNumbers(3,1));
//console.log(compareNumbers(1,3));
//console.log(compareNumbers(3,3));

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

function sortNumberArray(func, array){
   return array.sort(func);
}

//console.log(sortNumberArray(compareNumbers, [6,2,4,7]));
//console.log(sortNumberArray(compareNumbers, [7,10,1]));


// Exercise 3
// Create a function which takes an array of strings and returns a new array, which contains the same strings, but in uppercase. But don't use a loop.
// Use the builtin Array method: map
// Try using an function literal as the argument to map.

function stringArrayUpperCase(stringArray){
   return stringArray.map( string => string.toUpperCase());
}

//console.log(stringArrayUpperCase(["fuzzy","Toledo","TUESDAY"] ))
//console.log("fuzzy".toUpperCase())

// Exercise 4
// Create a function which takes an array of strings and returns the first Element in the array, which starts with 'A'
// If there's no element that satisfies that condition return null.
// Write this function, without writing a loop! Instead use the builtin array method: find
// Examples
// findA (['Orange', 'Apple', 'Banana']) -> 'Apple'
// findA (['B', 'C', 'D']) -> null

// Advanced:

function aFinder(array){
   function testA(string){
      return string[0] == "A";   
   }
   return array.find(string => testA(string));
}

//console.log(aFinder(["Orange","Apple","Banana"]))


// Exercise 5
// Write a function which takes an array of numbers and returns the sum of all the numbers in the array, but without writing a loop.
// Instead use the builtin array method reduce.
// Examples:
// accumulate ([1, 2, 3]) -> 6
// accumulate ([]) -> 0

function numberSum(array){
   return array.reduce((accumulator, element) => accumulator + element);
}

//console.log(numberSum([1,2,3]))

// Exercise 6: Putting it all together
// Write a function, which takes an array of objects representing posts as an argument.
// [{title: "What I like about JS", likes: 2},
//  {title: "What I don't like about JS", likes: 34},
//  {title: "Everyday Git", likes: 52}]
// The function should return an array of strings, one for every post, with more than 10 likes. They should be sorted by number of likes, the one with the most likes first and have this format:
// "<div class='post-title'>Everyday Git</div><div class='like-count'>52</div>"

// Notes: use .filter .sort and .map

function retrieveByLikes (postsArray) {
   // remove posts with fewer than or equal to 10 likes
   var filteredArray = postsArray.filter( obj => obj.likes >= 10);
   // sort posts by number of likes, descending order
   function compareLikes (obj1, obj2) {
      return compareNumbers(obj1.likes, obj2.likes);
   }
   var sortedArray = filteredArray.sort(compareLikes);
   // function: parse object into HTML
   function parser(obj){
      return ("<div class='post-title'>" + obj.title + "</div><div class='like-count'>" + obj.likes + "</div>");
   }
   var parsedArray = sortedArray.map(obj => parser(obj));
   return parsedArray;
}

console.log( retrieveByLikes([{title: "What I like about JS", likes: 2}, {title: "What I don't like about JS", likes: 34}, {title: "Everyday Git", likes: 52}]) );


// Extra Exercise:

// Go back to Exercise 2.1 and make the function pure, i.e. the input array should not be mutated in any way by the function call. How can you test this?


