var color = {
   red : 0,
   green : 1,
   blue : 2,
};

var complementColor = {
   complementRed : (255 - color.red),
   complementGreen : (255 - color.green),
   complementBlue : (255 - color.blue),

};

console.log ("The complement color of rgb (" + color.red +
 ", " + color.green + ", " + color.blue + ") is rgb(" +
  complementColor.complementRed + ", " + complementColor.complementBlue + ", " + complementColor.complementGreen + ").");
  