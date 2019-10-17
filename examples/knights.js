const knightOffsets = [
   [1, 2],
   [1, -2],
   [2, 1],
   [2, -1],
   [-1, 2],
   [-1, -2],
   [-2, 1],
   [-2, -1]
]

function inRange (x, max) {
   return x >= 0 && x < max;
}
function validCoordinate ([x, y]) {
   return inRange (x, 8) && inRange (y, 8);
}

function chessboardGet (chessboard, [x, y]) {
   return chessboard[y][x];
}

function knightCanCapture (chessboard, [x, y]) {
   console.assert (chessboardGet(chessboard, [x, y]) == 1);
   return undefined != knightOffsets.map (([xOffset, yOffset]) => [x + xOffset, y + yOffset])
                     .filter (validCoordinate)
                     .find (coordinate => chessboardGet(chessboard, coordinate) == 1);
}

function cannotCapture (chessboard) {
   for (var y = 0; y < 8; y++) {
      for (var x = 0; x < 8; x++) {
         if (chessboardGet (chessboard, [x, y]) == 1 && knightCanCapture (chessboard, [x, y]))
            return false;
      }
   }
   return true;
}

console.log (cannotCapture([
   [0, 0, 0, 1, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 1, 0, 0, 0, 1, 0, 0],
   [0, 0, 0, 0, 1, 0, 1, 0],
   [0, 1, 0, 0, 0, 1, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 1, 0, 0, 0, 0, 0, 1],
   [0, 0, 0, 0, 1, 0, 0, 0]
 ]));
 
 console.log (cannotCapture([
   [1, 0, 1, 0, 1, 0, 1, 0],
   [0, 1, 0, 1, 0, 1, 0, 1],
   [0, 0, 0, 0, 1, 0, 1, 0],
   [0, 0, 1, 0, 0, 1, 0, 1],
   [1, 0, 0, 0, 1, 0, 1, 0],
   [0, 0, 0, 0, 0, 1, 0, 1],
   [1, 0, 0, 0, 1, 0, 1, 0],
   [0, 0, 0, 1, 0, 1, 0, 1]
 ]));