function eq (a, b) {
   if (Array.isArray (a) && Array.isArray (b)) {
      if (a.length != b.length) {
         return false;
      }
      for (var i = 0; i < a.length; i++) {
         if (!eq (a[i], b[i])) {
            return false;
         }
      }
      return true;
   }
   else if (a == null && b == null) {
      return true;
   }
   else {
      return a === b;
   }
}

console.log (eq ([], []));
console.log (!eq ([1], ['1']));
console.log (eq ([null], [undefined]));
console.log (eq (['a', 'b', ['c']], ['a', 'b', ['c']]))
