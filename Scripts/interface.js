document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

let handleClick = (event) => {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            let gameOverLayer = document.getElementById('gameOver');
            gameOverLayer.style.display = 'flex';
            gameOverLayer.innerHTML = `
            <div>
            O Vencefor foi o Player ${playerTime + 1} 
            </div>
            <button id="restart" onclick="restart()">Jogue Novamente</button>
            `
        }, 10);

        updateScore();

    };
    updateSquare(position);
    /* updateSquares(); */
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

let updateScore = () => {
    scoreO();
    scoreX();

    document.getElementById("scoreX")
    scoreX.innerHTML = `${winX}`;
}

let scoreO = () => {
    if (gameOver == true && playerTime == 0) {
        winO += 1;

        let upScoreO = document.getElementById("scoreO");
        upScoreO.innerHTML = `${winO}`;
    }
    return winO;
}

let scoreX = () => {
    if (gameOver == true && playerTime == 1) {
        winX += 1;

        let upScoreX = document.getElementById("scoreX");
        upScoreX.innerHTML = `${winX}`;
    }
    return winX;
}

let restart = () => {
    let squares = document.querySelectorAll(".square");

    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none';

    squares.forEach((square) => {
        for (i = 0; i < board.length; i++) {
            square.innerHTML = `<div> </div>`;
            board[i] = '';
        }

        playerTime = 0;
    });

    gameOver = false;
}
