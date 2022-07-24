
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})
function handleClick(event) {
    let jogador = parseInt(document.querySelector('input[name=Player-Start]:checked').value);
    if (handleMove(event.target.id)) {
        let result = document.getElementById('resultado');
        setTimeout(() => {
            if (verifyvelhawin() == false && DeuVelha == true)  {
                result.innerHTML = `<span>Deu Velha!</span>`
                buttonJoin();
            } else {
                if (jogador == 0) {
                    result.innerHTML = `<span>O jogador ${playerTime + 1} ganhou a partida </span>`;
                } else {
                    result.innerHTML = `<span>O jogador ${playerTime} ganhou a partida </span>`;
                }
                    
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
        let position = square.id;
        let symbols = board[position];
        if (symbols == '') {
            square.innerHTML = ``;
        } else {

        }
    });
}
