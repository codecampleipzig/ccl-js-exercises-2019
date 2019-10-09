/* Parse Input */
var inputRGB = [ process.argv[2], process.argv[3], process.argv[4]];

/* Returns input Object in CSS Style */
function RGBToString(input = [0,0,0]) {
    return "rgb(" + input[0] + "," + input[1] + "," + input[2] + ")";
}

/* complement from input object */
function complementRGB(input = [0,0,0]) {
    return [ 255-input[0], 255-input[1], 255-input[2]];
}

console.log ( RGBToString( complementRGB(inputRGB) ) );