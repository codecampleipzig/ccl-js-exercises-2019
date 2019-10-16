function eq (lhs, rhs) {

   if (Array.isArray(lhs) && Array.isArray(rhs) && lhs.length == rhs.length){
      for ( var i = 0; i < lhs.length; i++) { // create a foor loo, bind the loob variable, define the loop check condition 
         // (as long as i is leth than element.lengt) and enter the loop body. At the end we increment
         if ( !eq (lhs[i], rhs[i]) ) { 
            return false;
         }
      } return true;  // after we exit the loop we always! have to give back a value. Also incrementing happens here (loop Step)
   }
   return lhs == rhs;
}

console.log (eq (1,3));  // false
console.log (eq (1,1));   // true
console.log (eq ([1, 2, [3, [4]], 4], [1, 2, [3, [4]], 5])); // true
console.log (eq ([1, 2, 3], [1, 2, 4])); // false
