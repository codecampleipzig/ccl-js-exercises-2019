function checker(x){
    return x == true;
}

function eq(x,y){
    if (Array.isArray(x) && Array.isArray(y) && x.length == y.length){
        var ars = []; 
        for  (var i = 0; i < x.length; i++){
           if (Array.isArray(x[i]) && Array.isArray(y[i]) && x[i].length == y[i].length){
               for (var l = 0; l < x[i].length; l++){
                   ars.push(x[i[l]] == y[i[l]]);
               }
           }
           else{
               ars.push(x[i] == y[i]);
           }
        }
        if (ars.every(checker)){
        //if (ars[0] == true && ars[1] == true && ars[2] == true){
            return true;
        } 
        else{
            return false;
        }
    }
    else {
        return x == y;
    }
}

console.log(eq(1, 1))
console.log(eq([[1,2,3],2,3],[1,2,3]))
