function checker(x){
    return x == true;
}

function eq(x,y){
    if (Array.isArray(x) && Array.isArray(y)){
        var ars = []; 
        for  (var i = 0; i < x.length; i++){
           ars.push(x[i] == y[i]); 
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
console.log(eq([1,2,3],[1,2,4]))
