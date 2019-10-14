/* 
 * Example:    node complement-color.js 255 212 0
 */

// Parse Input
var inputColor = {
   red: process.argv[2],
   green: process.argv[3],
   blue: process.argv[4]
};

// Returns input Object in CSS Style
function toCSSString(color) {
   return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
}

// complement from input object
function getComplement(color) {
   return {
      red: 255 - color.red,
      green: 255 - color.green,
      blue: 255 - color.blue
   }
}

console.log (toCSSString (getComplement(inputColor)));
