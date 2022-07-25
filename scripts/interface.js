function html() {
    let result = document.getElementById('resultado');
    let btt = document.getElementById('restart');
    let squares = document.querySelectorAll('.square');
    return { btt, result, squares };
}
document.addEventListener('DOMContentLoaded', () => {
    html().squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})
function handleClick(event) {
    if (handleMove(event.target.id)) {
            if (isWin() == false && DeuVelha == true) {
                html().result.innerHTML = `<span>Deu Velha!</span>`;
            } else {
                html().result.innerHTML = `<span>O jogador ${playerTime} ganhou a partida </span>`;
            }
            buttonJoin();
        }
    updateSquare(event.target.id);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class="${symbols}"></div>`;
}
function updateTable() {
    html().squares.forEach((square) => {
        if (board[square.id] == '') {
            square.innerHTML = '';
        }
    });
}
