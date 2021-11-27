import axios from "axios";

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
const encodeParams = (params) =>
    Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');


function fetchPuzzle(difficulty) {
    return axios.get("https://sugoku.herokuapp.com/board?difficulty=" + difficulty);
}

function solvePuzzle(grid) {
    const data = { board: grid }

    return axios.post('https://sugoku.herokuapp.com/solve', {
        data: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}

function validateGrid(grid){
    const data = { board: grid }

    return axios.post('https://sugoku.herokuapp.com/validate', {
        data: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}

function fetchDifficulty(grid){
    const data = { board: grid }

    return axios.post('https://sugoku.herokuapp.com/grade', {
        data: encodeParams(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
}

var SugokuService = {
    fetchPuzzle : fetchPuzzle,
    solvePuzzle : solvePuzzle,
    validateGrid : validateGrid,
    fetchDifficulty : fetchDifficulty
}

export default SugokuService;