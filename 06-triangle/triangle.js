function triangle(string){
    var depth = 8;
    for (var i =0; i < depth; i++){
        if (i == 0){
            console.log("");
        }
        else if (i == 1){
            console.log(string);
        }
        else {
            console.log(string.repeat(i))
        }
    }
}

triangle("#")

