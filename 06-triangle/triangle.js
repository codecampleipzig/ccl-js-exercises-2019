var depth = 8;
var line = "#"

console.log("```");

for (var i = 0; i < depth; i++) {
        console.log(line)
        line = line + "#";
}

console.log("```");
