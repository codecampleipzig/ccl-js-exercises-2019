var depth = 10;
var space = " "
var tree = "#"

for (i = 0; i < depth; i++) {

space = space + " ";
}



for (i = 0; i < depth; i++) {

console.log (space + tree);

tree = tree + "##";
space = space.substring (0, depth-i);   
}


for (m = 0; m < depth; m++) {

    var space = ""
        for (n = 0; n < m+1; n++) {
            space = space + " ";
        }
    }

    console.log (space + "| |");
    console.log (space + "| |");
    