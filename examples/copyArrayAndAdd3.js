function copyArrayAndAdd3 (array) {
   var output = [];
   for (var i = 0; i < array.length; i++) {
      output.push (array[i] + 3);
   }
   return output;
}

var myArray = [1, 2, 3];
var result = copyArrayAndAdd3 (myArray);