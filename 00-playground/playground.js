// --- Exercise IF and ELSE ---
// var favoriteCake = "carrot cake"
// if (favoriteCake == "carrot cake") {
//     console.log ("Let's bake a " + favoriteCake);
// } 
// else if (favoriteCake == "cheese cake") {
//     console.log ("Let's bake a " + favoriteCake);
// } 
// else {
//     console.log ("There is nothing I can do for you.");
// }

// console.log ("Done");

// if (((process.argv).length) > 2 && typeof process.argv [2] != typeof 2){
//     console.log (process.argv [2]);
// } else {
//     console.log ("Enter a valid value.");
// }

// if (typeof process.argv [2] == typeof "" && process.argv [2] != "" ){
//     console.log (process.argv [2]);
// }
// else {
//     console.log ("Error")
// }

// var i = 0;

// while (i < 100) {
//     console.log ("Hello World " + i);
//     i = i + 1;
// }

// for (var i = 0; i < 100; i = i + 1) {
//     console.log ("Hello World! " + i );
// }

// var array = ["banana", "apple", "orange"];

// for (var i = 0; i < array.length; i = i + 1){
//     console.log (array [i]);
// }


var lineLenght = 8;
var length = 8

    for (var i = 0; i < length; i = i + 1){
        var asciisymbol = "";
        for (var j = 0; j <= i ; j = j + 1) {
            asciisymbol = asciisymbol + "#";
        }
        console.log ( asciisymbol);
    }

var depth = 8;

var line = `#`

for (var i = 0; i < depth; i++) {
    console.log (line);
    line = line + `#`;

}

for (var line = `#`; line.length <= depth; line += `#`){
    console.log (line);
}