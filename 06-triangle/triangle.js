var depth = 8;

for (i = 0; i < depth; i++) {
    var symbol = "";
    for (j = 0; j <= i; j++) {
        symbol = symbol + "#";
        
    }
    console.log(symbol);
}