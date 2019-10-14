var color = {
   red : 0,
   green : 1,
   blue : 2,
};

var complementColor = {
   red : (255 - color.red),
   green : (255 - color.green),
   blue : (255 - color.blue),
};

function colorsToString(color) {
   return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")"
};

console.log ("The complement color of " + colorsToString(color) + " is " + colorsToString(complementColor) + ".");
