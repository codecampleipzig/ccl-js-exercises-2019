// write a function called eq (lhs, rhs)
// If lhs and rhs are arrays, compare them element by element.
// if not just forward to ==

// eq (1, 3) -> false
// eq (1, 1) -> true
// eq ([1, 2, 3], [1, 2, 3]) -> true
// eq ([1, 2, 3], [1, 2, 4]) -> false

// Note: Array.isArray ([1, 2, 3]) -> true


// function eq(rhs,lhs) {
   // return rhs == lhs;
// }


function eq(lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.lenght == rhs.length){
      for (var i = 0; i < lhs.length; i++) {
         if (!eq(lhs[i], rhs[i])) { //compare elements at index i in both lhs and rhs.
            return false;
         }
      }
      return true;
   }
   else {
      return lhs == rhs;
   }
}

eq(([1, 2, 3], [1, 2, 3]), true);
eq(([1, 1], [1, 1]), true);
eq(([1, 2, 3], [1, 2, 4]), false);
eq(([1, 2, 3], '[1, 2, 4]'), false);