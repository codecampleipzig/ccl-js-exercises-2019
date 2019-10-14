var depth = 8;
var line = "#";

for (var i=0; i < depth; i = i+1) {
    console.log (line) 
    line = line + line - 2*line
}