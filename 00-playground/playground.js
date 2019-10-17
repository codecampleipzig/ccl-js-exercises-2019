// 16.10.19, answers to 12-arrays, arrays.js

// Comparing arrays by VALUE (as opposed to by REFERENCE) - ASK ERIC!!
// Ex 1
function reverse (array) {
   if (Array.isArray (array) == false) {
      throw Error ("Error in Reverse!!!");
   } // Throwing an EXCEPTION makes sure the fn will not only print msg, but will actually STOP
   var result = []; // Array is empty at the beginning
   for (var i = array.length - 1; i >= 0; i = i - 1) {
      result.push (array[i]);
      console.log ("i: " + i + " result: " + result); // Can omit, is just for info
   }
   console.log ("After the loop: " + result);
   return result;
}
// NB array.length - 1 --> means the last element in the array... 0 is the first element.


console.log ("All tests completed!") // Useful to print this at end


// Throwing exceptions:
throw exception;
// This will ALSO store the POSN at which the error is thrown...

// TRY statements:
try {
   var blaBla = reverse ("Crap");
}
catch (error) {
   console.log (error);
   console.log ("I am still going on");
}

// Exercise 2
function getLastItem (array) {
   return array[array.length - 1];
}

// Exercise 3
function check (array, num) {
   for (var i = 0; i < array.length; i++) {
      if (array[i] == num) {
         return true;
      }
   }
   return false;
}


// Exercise 7

function max (array) {
   var result = array[0];
   for (var i = 1; i < array.length; i++) {
   if (array[i] > result) {
      result = array[i];
      }
   }
   return result;
}

function min (array) {
   var result = array[0];
   for (var i = 1; i < array.length; i++) {
   if (array[i] < result) {
      result = array[i];
      }
   }
   return result;
}

}
function difference (array) {
   return max (array) - min (array);
}

testEqual ("difference", difference ([10, 15, 20, 2, 10, 6]), 18);

// NB the .sort method --> turns the nrs into STRINGS, then uses the ASCII table for each nr and sorts them according to THOSE values...
// I.e. doesn't work as we intuitively expect.
// function difference (array) {
//    var sortedArray = array.sort();
//    return sortedArray[sortedArray.length - 1] - sortedArray[0];
// }

