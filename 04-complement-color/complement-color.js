var rgbColor = {
   red : 1,
   green : 2,
   blue : 3
};

var compColor = {
   compRed : 255 - rgbColor.red,
   compGreen : 255 - rgbColor.green,
   compBlue : 255 - rgbColor.blue,
};

console.log ("The complement color of rgb ("+rgbColor.red+", "+rgbColor.green+", "+rgbColor.blue+") is rgb ("+compColor.red+", "+compColor.green+", "+compColor.blue+"};
