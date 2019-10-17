// Write a function called eq (lhs, rhs)
// If lhs and rhs are arrays, compare them element by element
// If not just forwart to ==

// eq (1, 3) -> false
// eq (1, 1) -> true
// eq ([1, 2, 3], [1, 2, 3]) -> true
// eq ([1, 2, 3], [1, 2, 4]) -> false

function eq (lhs, rhs) {
   if (Array.isArray (lhs) && Array.isArray (rhs) && lhs.length == rhs.length) {
		for (var i = 0; i < lhs.length; i++) {
			if (lhs[i] != rhs[i]) {
				return false;
			}
		}
		return true;
	}
	else {
		return lhs == rhs;
	}
}

console.log (eq ([1, 2, 3], [1,2,3]) == true);
console.log (eq ([1, 2, 3], [1,2,3,4]) == false);
console.log (eq ([1, 2, []], [1,2,[]]) == true);