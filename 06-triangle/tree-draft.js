var depth = 8;

for (i = 0; i < depth; i++) {

var space = ""
    for (j = 0; j < i+1; j++) {
        space = space + " ";
    }
}

console.log (space + " #");

for (k = 0; k < depth; k++) {

    var tree = "#"
    
        for (l = 0; l < k+1; l++) {
        tree = tree + "##";
        space = space.substring (0, depth-k);   
        }
    console.log (space + tree);
}

for (m = 0; m < depth; m++) {

    var space = ""
        for (n = 0; n < m+1; n++) {
            space = space + " ";
        }
    }

    console.log (space + "| |");
    console.log (space + "| |");
    