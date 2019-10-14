// if (process.argv.length > 2) {
//     console.log("There is value in process.argv[2] and it is: " + process.argv[2]);
// } else {
//     console.log("There is no process.argv[2]!");
// }


//// Another solution
if (typeof process.argv [2] == typeof "" && process.argv[2] != "") {
    console.log(process.argv[2]);
} else {
    console.log("Error");
}

// Write a program that prints Hello World 100 times

// While loop
i = 0;
// while (i < 100) {
//     console.log("Hello World!" + i);
//     i++;
// }

// For Loop
// for (i = 0; i < 100; i++) {
//     console.log("Hello World! " + i);
// }

/*
Write a program that prints this. 
#
##
###
####
#####
######
#######
########

Define a binding depth = 8 and change the program so it works for any value.
*/

// var depth = 8;
	
// for (i = 0; i < depth; i++) {
//     var symbol = "";
//     for (j = 0; j <= i; j++) {
//         console.log(symbol + "#");
//     }
    
// }

// var array = ['banana','apple','orange'];

// for (i = 0; i < array.length; i++) {
//     console.log(array[i]+" "+i);
    
// }