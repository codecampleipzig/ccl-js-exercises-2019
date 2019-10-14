var depth = 8;

var lines = ["#", "##", "###", "####"]
var line = "#"

    for (var level = 0; level < depth; level = level + 1) { 
    console.log (line + " " + line);
    line = line + "#"
    }