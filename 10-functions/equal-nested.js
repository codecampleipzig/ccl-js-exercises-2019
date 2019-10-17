function eq(lhs, rhs, recursive) {

    if (Array.isArray(lhs) && Array.isArray(rhs)) { 
        console.log ('First condition met: both are arrays');

        if (lhs.length == rhs.length) {
            console.log ('Second condition met: both are same length');

            for (var i=0; i<lhs.length; i++) {
                if (Array.isArray(lhs[i]) && Array.isArray(rhs[i])) {
                    console.log("Recursive Start");
                    return eq (lhs[i], rhs[i], true);
                }
                else if (lhs[i] != rhs[i]){
                    console.log ('Index ' + i + ' of ' + (lhs.length-1) + ' not same: exit');

                    return false;
                }

                console.log ('Index ' + i + ' of ' + (lhs.length-1) + ' same');

            }
            console.log ('All checks passed');
            if ( recursive ){
                return true;
            }
        } 
        console.log ("Not equal length: exit");
        return false;
    } 
    console.log ('One or both not arrays: regular equality check');
    return lhs == rhs;
}

eq ([1, 2 [1, 2, 3], 4], [1, 2, [1, 2, 3], 5])