function copyArrayAndMultiplyBy2 (array) {
   var output = [];
   for (var i = 0; i < array.length; i++) {
      output.push (array[i] * 2);
   }
   return output;
}

var myArray = [1, 2, 3];
var result = copyArrayAndMultiplyBy2 (myArray);