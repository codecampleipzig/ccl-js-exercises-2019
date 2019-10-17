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
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.
// Examples
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.

function isEmpty(string) {
   //String (string);
   // convert a value into string
   return string.length == 0;
}

testEqual("Exercise 1.1", isEmpty(""), true);
testEqual("Exercise 1.2", isEmpty(" "), false);
testEqual("Exercise 1.3", isEmpty("b"), false);
testEqual("Exercise 1.4", isEmpty(3), false);
testEqual("Exercise 1.5", isEmpty([]), true);

// Exercise 2
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string 
// is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

function comp(a, b) {
   return String(a).length == String(b).length;
}

testEqual("Exercise 2.1", comp("AB", "CD"), true);
testEqual("Exercise 2.2", comp("ABC", "DE"), false);
testEqual("Exercise 2.3", comp("hello", "edabit"), false);
testEqual("Exercise 2.4", comp(3, "3"), true);

// Exercise 3
// Check String for Spaces
// Create a function that returns true if a string contains any spaces.
// Examples
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false
// Notes
// An empty string does not contain any spaces.
//    You can use "string".charAt(index) to get the character at a certain index in a string
//    "string".charAt(4) ➞ "i"

function hasSpaces(string) {
   for (i = 0; i < string.length; i++) {
      var element = string.charAt(i);
      if (element == " ") {
         return true;
      }
   }
   return false;
}

testEqual("Exercise 3.1", hasSpaces("hello"), false);
testEqual("Exercise 3.2", hasSpaces("hello, world"), true);
testEqual("Exercise 3.3", hasSpaces(" "), true);
testEqual("Exercise 3.4", hasSpaces(""), false);
testEqual("Exercise 3.5", hasSpaces(",./!@#"), false);

// Exercise 4
// Find the Index
// Create a function that takes an array and a string as arguments and return the index of the string.
// Examples
// find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// find_index(["a", "g", "y", "d"], "d") ➞ 3
// find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// Solution 1
function find_index(array, string) {
   for (i = 0; i < array.length; i++) {
      var element = array[i];
      if (element == string) {
         return i;
      }
   }
   return;
}

// Solution 2
function find_index1(array, string) {
   return array.indexOf(string);
}

testEqual("Exercise 4.1", find_index(["hi", "edabit", "fgh", "abc"], "fgh"), 2);
testEqual("Exercise 4.2", find_index(["Red", "blue", "Blue", "Green"], "blue"), 1);
testEqual("Exercise 4.3", find_index(["a", "g", "y", "d"], "d"), 3);
testEqual("Exercise 4.4", find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"), 0);

// Exercise 5
// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.
// Examples
// ctoa("A") ➞ 65
// ctoa("m") ➞ 109
// ctoa("[") ➞ 91
// ctoa("\") ➞ 92

function ctoa(character) {
   return character.charCodeAt();
}

testEqual("Exercise 5.1", ctoa("A"), 65);
testEqual("Exercise 5.2", ctoa("m"), 109);
testEqual("Exercise 5.3", ctoa("["), 91);
testEqual("Exercise 5.4", ctoa("\\"), 92);
// if the argument evaluates to either undefined() or null (null), test throws exception - TypeError: Cannot read property 'charCodeAt' of null
testEqual("Exercise 5.5", ctoa("Ab"), 65);

// console.log(ctoa("\\"));

// Exercise 6
// Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
// Examples
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3
// numberSyllables("mon-u-men-tal") ➞ 4
// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

function numberSyllables(sentence) {
   var subStrings = sentence.split("-");
   // if (subStrings.length < 2) {
   //    //console.log("String has less than two syllables!");
   //    return -1;
   // }
   return subStrings.length;
}

//console.log(numberSyllables(""));

testEqual("Exercise 6.1", numberSyllables("buf-fet"), 2);
testEqual("Exercise 6.2", numberSyllables("beau-ti-ful"), 3);
testEqual("Exercise 6.3", numberSyllables("mon-u-men-tal"), 4);
testEqual("Exercise 6.4", numberSyllables("on-o-mat-o-poe-ia"), 6);

// Exercise 7
// Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//    The first number is the major version.
//    The second number is the minor version.
//    The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.
// Examples
// // 6.1.9
// retrieveMajor("6.1.9") ➞ "6"
// retrieveMinor("6.1.9") ➞ "1"
// retrievePatch("6.1.9") ➞ "9"
// // 2.1.0
// retrieveMajor("2.1.0") ➞ "2"
// retrieveMinor("2.1.0") ➞ "1"
// retrievePatch("2.1.0") ➞ "0"

// EXTRACTING A MORE GENERIC FUNCTION - NOT SURE IF APPROACH OK!
function retrieveVersion(version) {
   var subStrings = version.split(".");
   return subStrings;
}

function retrieveMajor1(version) {
   return retrieveVersion(version)[0];
}

function retrieveMinor1(version) {
   return retrieveVersion(version)[1];
}

function retrievePatch1(version) {
   var subStrings = retrieveVersion(version);
   return subStrings[subStrings.length - 1];
}

// console.log(retrieveVersion("6.1.9"));
// console.log(retrieveMajor1(retrieveVersion("6.1.9")));
// console.log(retrieveMinor1(retrieveVersion("6.1.9")));
// console.log(retrievePatch1(retrieveVersion("6.1.9")));

testEqual("Exercise 7.1.1#", retrieveMajor1("6.1.9"), "6");
testEqual("Exercise 7.1.2#", retrieveMinor1("6.1.9"), "1");
testEqual("Exercise 7.1.3#", retrievePatch1("6.1.9"), "9");

///////////////////////////////////////////////

// Retrieve Major Version
function retrieveMajor(version) {
   var subStrings = version.split(".");
   return subStrings[0];
}

// console.log(retrieveMajor("6.1.9"));

testEqual("Exercise 7.1.1", retrieveMajor("6.1.9"), "6");
testEqual("Exercise 7.2.1", retrieveMajor("2.1.0"), "2");
testEqual("Exercise 7.3.1", retrieveMajor(".1.0"), "");

// Retrieve Minor Version (IMPORTANT: Works only for version formats "x.x.x")
function retrieveMinor(version) {
   var subStrings = version.split(".");
   return subStrings[1];
}

testEqual("Exercise 7.1.2", retrieveMinor("6.1.9"), "1");
testEqual("Exercise 7.2.2", retrieveMinor("2.1.0"), "1");
testEqual("Exercise 7.3.2", retrieveMinor("2..0"), "");

// Retrieve Patch (IMPORTANT: Works only for version formats "x.x.x")
function retrievePatch(version) {
   var subStrings = version.split(".");
   return subStrings[subStrings.length - 1];
}

testEqual("Exercise 7.1.3", retrievePatch("6.1.9"), "9");
testEqual("Exercise 7.2.3", retrievePatch("2.1.0"), "0");
testEqual("Exercise 7.3.3", retrievePatch("2.1."), "");

// Exercise 8
// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. 
// There could be only one separator and if it is not present it should be added.
// Examples
//    joinPath("portion1", "portion2") ➞ "portion1/portion2"
//    joinPath("portion1/", "portion2") ➞ "portion1/portion2"
//    joinPath("portion1", "/portion2") ➞ "portion1/portion2"
//    joinPath("portion1/", "/portion2") ➞ "portion1/portion2"

function joinPath(a, b) {
   // variant 1
   // var separatorInA = a.indexOf("/");
   // var separatorInB = b.indexOf("/");
   // if (separatorInA == -1 && separatorInB == -1) {
   //    return a + "/" + b;
   // } else if (separatorInA == -1 || separatorInB == -1) {
   //    return a + b;
   // } else {
   //    var regex = /\//gi;
   //    return a.replace(regex,"") + b.replace(regex,"");
   // }

   var regex = /\//gi;
   var replacedA = a.replace(regex, "");
   var replacedB = b.replace(regex, "");

   return `${replacedA}/${replacedB}`; // a + "/" + b;
}

testEqual("Exercise 8.1", joinPath("portion1", "portion2"), "portion1/portion2");
testEqual("Exercise 8.2", joinPath("portion1/", "portion2"), "portion1/portion2");
testEqual("Exercise 8.3", joinPath("portion1", "/portion2"), "portion1/portion2");
testEqual("Exercise 8.4", joinPath("portion1/", "/portion2"), "portion1/portion2");
testEqual("Exercise 8.5", joinPath("port/ion1/", "/portion2"), "portion1/portion2");
testEqual("Exercise 8.6", joinPath("port/ion1/", "/p/ortion2"), "portion1/portion2");


// Exercise 9
// Format Number with Comma(s) Separating Thousands
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.
// Examples
// formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"

// exit: ?number
// parameters: number
// output: string
// main goal: convert number to string and separate thousands with comma

// function formatNum(number) {
//    if (typeof number == "number" || !number) {
//       return "The input value is not a number."
//    }
//    var array = [];
//    var numberAsString = number.toString();
//    for (var i = numberAsString.length - 1; i >= 0; i++) {
//       array.push
//    }

// }

// Exercise 10
// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(a) {
   var regexA = /a/gi;
   var regexE = /e/gi;
   var regexI = /i/gi;
   var regexO = /o/gi;
   var regexS = /s/gi;

   return a
      .replace(regexA, 4)
      .replace(regexE, 3)
      .replace(regexI, 1)
      .replace(regexO, 0)
      .replace(regexS, 5);
}

testEqual("Exercise 8.6", hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l");
testEqual("Exercise 8.6", hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun");
testEqual("Exercise 8.6", hackerSpeak("become a coder"), "b3c0m3 4 c0d3r");
