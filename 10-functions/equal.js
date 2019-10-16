function eq(lhs, rhs, recursive) {

    recursive = recursive ? "-r " : "";

    console.log( recursive + "eq called");

    if (Array.isArray(lhs) && Array.isArray(rhs)) { 
        console.log (recursive + 'First condition met: both are arrays');

        if (lhs.length == rhs.length) {
            console.log (recursive + 'Second condition met: both are same length');

            for (var i=0; i<lhs.length; i++) {
                if (Array.isArray(lhs[i]) && Array.isArray(rhs[i])) { 
                    if ( !eq (lhs[i], rhs[i], true) ) {
                        return false
                    }
                } else if (lhs[i] != rhs[i]){
                    console.error (recursive + 'Index ' + i + ' of ' + (lhs.length-1) + ' not same: exit');

                    return false;
                }  
                console.log (recursive + 'Index ' + i + ' of ' + (lhs.length-1) + ' same');

            }
            return true;
        }
        console.log (recursive + 'Length not the same');
        return false;
        
    } 
    console.log (recursive + 'One or both not arrays: regular equality check');
    return lhs == rhs;
}

eq ([1, 2, [4], 3], [1, 2, [4], 2]);

 