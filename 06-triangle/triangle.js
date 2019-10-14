function triangle(depth, line){
   for (var i = 0; i < depth; i++){
      line = line + "#";
      console.log (line)
   }
}

var depth = 8;
var line = "";

triangle (depth, line)
