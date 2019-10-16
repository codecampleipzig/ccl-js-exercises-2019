
// Write a function called eq (lhs, rhs)
// If lhs and rhs are arrays, compare them element by element
// If not just forward to ==

// eq (1, 3) -> false
// eq (1, 1) -> true
// eq ([1, 2, 3], [1, 2, 3]) -> true
// eq ([1, 2, 3], [1, 2, 4]) -> false

function eq (lhs, rhs){
    if ( Array.isArray (lhs) && Array.isArray(rhs) && lhs.length == rhs.length) {
        console.log ("Conditions are evaluated and true: lhs is an array, rhs is an array and both have the same length.")
        for (var i = 0; i < lhs.length; i++) {
            if (lhs[i] != rhs[i]) {
                console.log ("The element from the array lhs with the value " + lhs[i] + " is NOT EQUAL the element from the array rhs with the value " + rhs[i] + ".");
                return false; 
            }
        }
        return true;
    } else {
    console.log ("Not an array")
    return lhs == rhs;
    }
}

console.log (eq (1, 3) == false);
console.log (eq (1, 1) == true);
console.log (eq ([1, 2, 3], [1, 2, 3]) == true);
console.log (eq ([1, 2, 3], [1, 2, 4]) == false);
