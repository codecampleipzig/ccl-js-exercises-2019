/*
Print tic tac toe board.
    |-----|-----|-----|
    |  x  |     |  o  |
    |-----|-----|-----|
    |     |  x  |     |
    |-----|-----|-----|
    |  o  |     |  x  |
    |-----|-----|-----|
*/

var board = [
    [null, "O", "X"],
    ["X", "X","O"],
    [null, null, "O"]
 ];

function printBoard(board) {

    // return row header
    var output = "|-----|-----|-----|\n";

    // loop the boards rows
    for ( var i=0; i < board.length; i++ ) {

        // column start
        output += "|";

        // loop through columns of board[i]
        for ( var j=0; j < board[i].length; j++ ) {
            
            var currentVal = board[i][j];

            // two spaces
            output += "  "

            if ( currentVal == null ) {
                output += "   |";
            } else {
                output += currentVal + "  |";
            }

        }

        // newline please
        output += "\n";

        // return row divider or last line
        output += "|-----|-----|-----|\n";

    }

    console.log(output)

}

printBoard(board);