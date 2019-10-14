var rgbColor = {
   red : 100,
   green : 150,
   blue : 200
};

var complementRgbColor = {
   complementRed : 255 - rgbColor.red,
   complementGreen : 255 - rgbColor.green,
   complementBlue : 255 - rgbColor.blue
};

console.log ("The complement color of rgb("+rgbColor.red+", "+rgbColor.green+", "+rgbColor.blue+") is rgb("
            +complementRgbColor.complementRed+", "+complementRgbColor.complementGreen+", "+complementRgbColor.complementBlue+")");
