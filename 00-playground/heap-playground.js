function testEqual(name, testValue, expected) {
   if (testValue != expected) {
      console.log("Test " + name + " failed: Expected value: " + expected + ". Actual value: " + testValue);
   }
}

function eq(lhs, rhs) {
   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length) {
      for (i = 0; i < lhs.length; i++) {
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

// If arrays, compare them element by element
// If not, forward to ==

// function eq(lhs, rhs) {
//    var isNotArrayOrNotEqualLength = !Array.isArray(lhs) || !Array.isArray(rhs) || lhs.length != rhs.length;
//    if (isNotArrayOrNotEqualLength) {
//       return lhs == rhs;
//    }

//    //   compare the values at the same index;
//    var flag = true;
//    for (i = 0; i < lhs.length; i++) {
//       var areNotEqual = rhs[i] != lhs[i];
//       if (areNotEqual) {
//          flag = false;
//          break;
//       }
//    }
//    return flag;
// }

testEqual("Exercise 1.1", eq(1, 1), true);
testEqual("Exercise 1.2", eq(1, 3), false);
testEqual("Exercise 1.3", eq([1, 2, 3], [1, 2, 3]), true);
testEqual("Exercise 1.4", eq([1, 2, 3], [1, 2, 4]), false);
//testEqual("Exercise 1.5", eq([1, 2, 3], [1, 2, 3, 4]), "Arrays have different length");