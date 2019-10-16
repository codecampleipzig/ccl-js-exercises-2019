var board = [
    ["", "O", "X"],
    ["X", "X","O"],
    ["", "", "O"],
 ];
 console.log(board)

 var boardEmpty = [
     ["", "A", "B", "C", "\n"],
     ["0|", " |",  " |",  " |", "\n"],
     ["1|", " |",  " |",  " |", "\n"],
     ["2|", " |",  " |",  " |", "\n"],
 ];

function ticTacToe(){
    
    for(var i = 0; i < boardEmpty.length; i++){
        for(j of boardEmpty[i]){
            console.log(j)
        }
        
 
    }
    
}
ticTacToe();