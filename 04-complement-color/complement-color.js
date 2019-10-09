var red = 255;
var green = 254;
var blue = 0;
var complementRed = 255 - red;
var complementGreen = 255 - green;
var complementBlue = 255 - blue;
var color = [red, green, blue]
var ccolor = [255 - red, 255 - green, 255 - blue]

var a = "The Complement color of rgb (";
var b = ") is rgb(";
var c = ")";
console.log(a + color + b + ccolor + c);