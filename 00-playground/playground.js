character = "#";
depth = 10;

for ( i=0; i < depth; i++ ) {
    //Reset characters for every new line
    characters = "";

    //Add the Characters
    for ( j=0; j <= i; j++) {
        characters += character;    
    }

    // Print the String
    console.log(characters);
}
