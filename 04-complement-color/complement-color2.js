
var color = {
    red: 75,
    green: 125,
    blue: 200
    };

var ccolor = [255-color.red, 255-color.green, 255-color.blue];
var colorstring= "rgb("+ color.red + "," + color.green + "," + color.blue + ")"; 
var complementstring= "rgb("+ ccolor[0] + "," + ccolor[1] + "," + ccolor[2] + ")";
var a = 'The complement color of ';
var b = ' is ';

console.log (a + colorstring + b + complementstring);
