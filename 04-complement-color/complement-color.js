var red = 75;
var green = 125;
var blue = 200;
var color = [red,green,blue];
var ccolor = [255-red, 255-green, 255-blue];
var a = 'The complement color of rgb(';
var b = ') is rgb(';
var c = ')';
console.log (a + color + b + ccolor + c);
