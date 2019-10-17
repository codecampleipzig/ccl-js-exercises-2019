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