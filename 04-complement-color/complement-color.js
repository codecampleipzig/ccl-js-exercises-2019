var red = 0;
var green = 1;
var blue = 2;

var complementRed = 255 - red;
var complementGreen = 255 -green;
var complementBlue = 255 - blue;

var color = [red, green, blue];
var complementColor = [complementRed, complementGreen, complementBlue];

console.log("The complement color of rgb (" + color + ") is rgb(" + complementColor + ").");