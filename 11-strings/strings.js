// Exercise 1
// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.
// Examples
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.

function isEmpty(a) {
    return a==="";
    }

console.log (Empty(""))

// Exercise 2
// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

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

// Exercise 4
// Find the Index
// Create a function that takes an array and a string as arguments and return the index of the string.
// Examples
// find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// find_index(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// find_index(["a", "g", "y", "d"], "d") ➞ 3
// find_index(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// Exercise 5
// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.
// Examples
// ctoa("A") ➞ 65
// ctoa("m") ➞ 109
// ctoa("[") ➞ 91
// ctoa("\") ➞ 92

// Exercise 6
// Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
// Examples
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3
// numberSyllables("mon-u-men-tal") ➞ 4
// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

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

// Exercise 8
// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.
// Examples
//    joinPath("portion1", "portion2") ➞ "portion1/portion2"
//    joinPath("portion1/", "portion2") ➞ "portion1/portion2"
//    joinPath("portion1", "/portion2") ➞ "portion1/portion2"
//    joinPath("portion1/", "/portion2") ➞ "portion1/portion2"

// Exercise 9
// Format Number with Comma(s) Separating Thousands
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.
// Examples
// formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"

// Exercise 10
// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.