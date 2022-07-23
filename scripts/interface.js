document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) =>{
       square.addEventListener('click', handleClick);
    })

})
function handleClick(event) {
    let square = event.target;
    let position = square.id;
   if (handleMove(position)) {
    setTimeout(()=>{
            alert('Game Over o vencedor foi' + playerTime);
    }, 100);

   } ;
    updateSquare(position);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class="${symbols}"></div>`;
}
function resetGame() {
    if (gameOver == true) {
        let board = ['', '', '', '', '', '', '', '', ''];
        let playerTime = 0;
        let gameOver = false;
    }
}