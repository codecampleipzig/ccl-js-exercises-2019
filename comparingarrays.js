function eq (lhs, rhs){
      if (Array.isArray (lhs) && Array.isArray (rhs)){
         if (lhs.length != rhs.length){
            return false;
         }
      for (let i = 0; i < lhs.length; i++){
        // console.log (lhs[i]); this line would tell you what item you are at during the loop iteration
         if (lhs [i] != rhs [i]){
            return false;
         }
      }
   return true;
   };
   return lhs == rhs;
}

console.log (eq (1, 3));
console.log (eq (1, 1));
console.log (eq ([1, 2, 3], [1, 2, 3]));
console.log (eq ([1, 2, 3], [1, 2, 4]));
