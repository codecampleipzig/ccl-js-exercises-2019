function arrayAtIndex (array, index) {
   if (index < 0 && index >= array.length) {
      throw Error ("Index out of bounds: " + index);
   }

   return array[index];
}

try {
   arrayAtIndex ([1, 2, 3], 3);
}
catch (myException) {
   console.log (myException);
}
