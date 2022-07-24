let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
playerTime = setPlayer();
let symbols = ['o', 'x'];
let gameOver = false;
let DeuVelha = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
function handleMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime];
        gameOver = isWin();
        DeuVelha = velha();
        if (DeuVelha == true) {
            gameOver = true;
        }
        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
}
function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        const seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if ((board[pos1] == board[pos2]) && (board[pos1] == board[pos3]) && (board[pos1] != '')) {
            return true;
        }
    }
    return false;
}
function resetGame() {
    if (gameOver == true) {
        board = ['', '', '', '', '', '', '', '', ''];
        playerTime = setPlayer();
        updateTable();
        gameOver = false;

        html().btt.innerHTML = '';
        html().result.innerHTML = ''
    }
    return { board, playerTime, gameOver };
}
function buttonJoin() {
    let btt = document.getElementById('restart');
    btt.innerHTML = '<button onclick="resetGame()">Recomeçar jogo</button>';
}
function setPlayer() {
    playerTime = parseInt(document.querySelector('input[name=Player-Start]:checked').value);
    return playerTime
}
function velha() {
    if (board.every((tabuleiro) => {
        return tabuleiro != '';
    })) {
        return true;
    } else {
        return false;
    }
}