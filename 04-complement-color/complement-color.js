/* 
Parse Input 
Example:    node complement-color.js 255 212 0
*/
var inputColor = {
    red: process.argv[2],
    green: process.argv[3],
    blue: process.argv[4]
}

/* Returns input Object in CSS Style */
function toCSSString(inputColor) {
    return "rgb(" + inputColor.red + ", " + inputColor.green + ", " + inputColor.blue + ")";
}

/* complement from input object */
function getComplement(inputColor = [0,0,0]) {
    return {
        red: 255 - inputColor.red,
        green: 255 - inputColor.green,
        blue: 255 - inputColor.blue
    }
}

console.log ( toCSSString( getComplement(inputColor) ) );