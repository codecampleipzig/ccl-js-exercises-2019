var board = [
    [null, "O", "X"],
    ["X", "X", "O"],
    [null, null, "O"]
];

var numberOfRows = board.length;

var header = "  A B C ";
console.log(header);

for (i = 0; i < numberOfRows; i++) {
    var row = board[i];
    var numberOfColumns = row.length;
    var rowValues = i + "|";
    for (j = 0; j < numberOfColumns; j++) {
        var columnValue = row[j];
        if (columnValue == null) {
            columnValue = " ";
        }
        rowValues = rowValues + columnValue + "|";
    }
    console.log(rowValues);
}