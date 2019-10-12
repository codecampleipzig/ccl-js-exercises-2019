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

// Require Prompt Framework
var prompt = require('../08-text-adventure/prompt.js');

// Empty Board
var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// Map the X Coordinates to A-C
var mapping = {
    0: "A", 1: "B", 2: "C"
};

/* 
    Print the Board Object, which might look like this:
    var board = [
        [null, "O", "X"],
        ["X", "X","O"],
        [null, null, "O"]
    ];
*/
function printBoard(board) {

    // return row header
    var output = "   |--A--|--B--|--C--|\n";
    var i = 1;
    // loop the boards rows
    for ( row of board ) {

        // column start
        output += " " + i + " |";

        // loop through columns of row
        for ( col of row ) {

            // two spaces
            output += "  "

            if ( col == null ) {
                output += "   |";
            } else {
                output += col + "  |";
            }

        }

        i++;

        // newline please
        output += "\n";

        // return row divider or last line
        output += "   |-----|-----|-----|\n";

    }

    console.log(output)

}

function makeTurn(xy) {

    //player2
    if ( xy == undefined ) {
        x = Math.round(Math.random() * 2);
        y = Math.round(Math.random() * 2);

        console.log("Player2 goes for: " + mapping[x] + (y+1) );

        // TODO: print board
    } else {
        console.log("Okay there is a " + player + " now at " + xy);

        pattern = /[A-C]/gi;
        x = xy.match(pattern);
        pattern = /[1-3]/;
        y = xy.match(pattern);

        console.log("Thats: X=" + x + " & Y=" + y);
        // TODO: print board

        workinProgress();
    }

}

function workinProgress() {

    console.error("Sorry, work in progress. I can't save something to the board-object yet.")

}

// 1. Introduction Print
    printBoard(board);

    var message = "Let's play a game. Do you want to be X or O? First turn is randomized!";
    console.log(message);

// 2. Choose your Character
    var player = prompt ("Type your very own character (1): ");

    console.log("Okay, let's pray for you " + player);

    var player2 = ( player != "O" && player != "o") ? "O" : "X";

    console.log("You play against " + player2);

// 3. Randomize first turn. If Player2 goes first, he does. If not, skipping to next step.
    var random = Math.round(Math.random());
    
    if ( random == 0 ) {
        console.log("Congrats! You go first!");
    } else {
        console.log(player2 + " goes first! Exiting!");
        makeTurn();
    }

// 4. Players turn

    // TODO: Validate Input.
    var xy = prompt ("Type your first move (something between A1 and C3): ");

    makeTurn(xy);

// 5. Player 2
    
    makeTurn();