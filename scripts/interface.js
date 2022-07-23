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
        buttonJoin();
            let result = document.getElementById('resultado');
            result.innerHTML = `<span>O jogador ${playerTime} ganhou a partida </span> `
    }, 100);

   } ;
    updateSquare(position);
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class="${symbols}"></div>`;
}
function updateTable() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) =>{
        let position = square.id;
       let symbols = board[position];
       if (symbols == '') {
        square.innerHTML = ``;
       } else {

       }
    });
   } 
   
