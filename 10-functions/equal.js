function eq(lhs, rhs) {

    if (Array.isArray(lhs) && Array.isArray(rhs)) { 
        console.log ('First condition met: both are arrays');

        if (lhs.length == rhs.length) {
            console.log ('Second condition met: both are same length');

            for (var i=0; i<lhs.length; i++) {
                if (lhs[i] != rhs[i]){
                    console.log ('Index ' + i + ' of ' + (lhs.length-1) + ' not same: exit');

                    return false;
                }  
                console.log ('Index ' + i + ' of ' + (lhs.length-1) + ' same');

            }
        } 
        console.log ('All checks passed');
        return true;
    } 
    console.log ('One or both not arrays: regular equality check');
    return lhs == rhs;
}

eq ([1, 2, 3], [1, 2, 3]);

 