var color = {
    red : 240,
    green : 0,
    blue : 100
};

var complement = {
    red : 255 - color.red,
    green : 255 - color.green,
    blue : 255 - color.blue
};

console.log ("RGB: " + color.red + ", " + color.green + ", " + color.blue + 
" turns into complementary RGB:" + complement.red + ", " + complement.green + ", " + complement.blue + ". ");
