// Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)
// progressDays([10, 11, 12, 9, 10]) ➞ 3
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// progressDays([9, 9])  ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.


// Purge and Organize
// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]


// Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.
// Examples
// validateEmail("@gmail.com") ➞ false
// validateEmail("hello.gmail@com") ➞ false
// validateEmail("gmail") ➞ false
// validateEmail("hello@gmail") ➞ false
// validateEmail("hello@edabit.com") ➞ true
// Notes
// Check the Tests tab to see exactly what's being evaluated.
// You can easily solve this with regex but the challenge is intended to be solved with logic.


// Maskify the String
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
// Examples
// maskify("4556364607935616") ➞ "############5616"
// maskify("64607935616") ➞ "#######5616"
// maskify("1") ➞ "1"
// maskify("") ➞ ""
// Notes
// The maskify function must accept a string of any length.
// An empty string should return an empty string (fourth example above).


// Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.
// Examples
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]
// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true
// puzzlePieces([1, 2], [-1, -1]) ➞ false
// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.
// Extension
// Try generalizing your function with a callback paramenter, so you can exchange the + operation for something else.