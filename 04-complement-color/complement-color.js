var color = {
red : 34,
 blue : 90,
 green : 123
};

var complement = {
    red : 255 - color.red,
    green : 255 - color.green,
    blue : 255 - color.blue
};

var colorString = "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
var complementColorString = "rgb(" +complement.red + ", " + complement.green + ", " + complement.blue +")";

console.log("The complement of " + colorString + " is " + complementColorString + ".");