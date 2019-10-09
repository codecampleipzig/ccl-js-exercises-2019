var red = 75;
var green = 125;
var blue = 200;
var cred = 255-red
var cgreen = 255-green
var cblue = 255-blue
var color = [red,green,blue]
var ccolor = [cred, cgreen, cblue]

var a = 'The complement color of rgb ('
var b = ') is rgb ('
var c = ')'
console.log (a + color + b + ccolor + c);
