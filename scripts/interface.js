function html() {
    let result = document.getElementById('resultado');
    let btt = document.getElementById('restart');
    return { btt, result };
}
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})
function handleClick(event) {
    if (handleMove(event.target.id)) {
        setTimeout(() => {
            if (isWin() == false && DeuVelha == true) {
                html().result.innerHTML = `<span>Deu Velha!</span>`
                buttonJoin();
            } else {
                html().result.innerHTML = `<span>O jogador ${playerTime} ganhou a partida </span>`;
                buttonJoin();
            }
        }, 100);

    };
    updateSquare(event.target.id);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class="${symbols}"></div>`;
}
function updateTable() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        if (board[square.id] == '') {
            square.innerHTML = '';
        }
    });
}
