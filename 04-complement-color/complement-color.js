var color = {
    red : 34, //literal expression
    blue : 90,
    green : 123
};
//all part of a bigger object expression

//binding statements
var complement = {
    red : 255 - color.red, // arithmetic operator expression . operator will look for red within the variable color
    green : 255 - color.green,
    blue : 255 - color.blue
};

var colorString = "rgb (" + color.red + ", " + color.green + ", " + color.blue + ")";
var complementColorString = "rgb (" +complement.red + ", " + complement.green + ", " + complement.blue +")";

//expression//
    console.log ("The complement of " + colorString + " is " + complementColorString + ".");
