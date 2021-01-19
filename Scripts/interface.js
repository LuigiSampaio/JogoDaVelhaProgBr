document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

let handleClick = (event) => {
    console.log(event.target);

    let square = event.target;
    let position = square.id;

   if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Acabou -- O Vencedor Foi o Player " + playerTime);
        }, 10);
   };
    updateSquare(position);
}

let updateSquare = (position) => {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

/* let updateSquares = () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
} */