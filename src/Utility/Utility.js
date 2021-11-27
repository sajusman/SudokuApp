function parseGrid(puzzle){
    var grid = getEmptyGrid();
    for (var key of Object.keys(puzzle)) {
        var row = key.charCodeAt(0) - "A".charCodeAt(0);
        var col = parseInt(key[1]);
        grid[row][col] = puzzle[key];
    }
    return grid;
}

function getEmptyGrid(){
    var arr = new Array(9);
    for(var i=0; i<arr.length; i++){
        arr[i] = new Array(9).fill(0);
    }
    return arr;
}

function getArrayCopy(grid){
    var copyArr = getEmptyGrid();
    for(var i =0; i<grid.length; i++){
        for(var j=0; j<grid[i].length; j++){
            if(grid[i][j] > 0){
                copyArr[i][j] = grid[i][j];
            }
        }
    }
    return copyArr;
}          

var Utility = {
    getEmptyGrid : getEmptyGrid,
    parseGrid : parseGrid,
    getArrayCopy : getArrayCopy
}

export default Utility;