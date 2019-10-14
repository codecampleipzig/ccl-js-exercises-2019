var depth = 8;
var line = "";

function triangle(depth, line){
   for (var i = 0; i < depth; i++){
      line = line + "#";
      console.log (line)
   }
}

triangle (depth, line)
