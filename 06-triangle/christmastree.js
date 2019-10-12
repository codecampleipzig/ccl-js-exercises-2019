character = "#";
depth = 20;


// Maybe someone should do this?
if ( depth % 2 != 0 ) {
    console.log("first line should be done manually?");
}

for ( i=0; i < depth; i++) {
    //Reset characters for every new line
    characters = "";

    for ( j=0; j < depth-i; j++ ) {
        characters += " ";
    }

    for ( k=0; k < i; k++ ) {
        characters += "##";
    }

    console.log(characters);
}