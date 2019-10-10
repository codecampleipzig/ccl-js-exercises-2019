var color = {
    red : 70,
    green : 0,
    blue : 20
};

var complement = {
    red : 255 - color.red,
    green : 255 - color.green,
     blue : 255 - color.blue
}; 
var colorString = "rgb(" + color.red + "," + color.green + "," + color.blue + ")"; 
var complementColorString =" rgb t(" + complement.red + "," + complement.green + "," + complement.blue + ")";

console.log ("The complement color of " + colorString + "is" + complementColorString + ".");