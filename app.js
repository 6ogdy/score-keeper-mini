const selectedRounds = document.querySelector("#rounds");
const playerOneUp = document.querySelector("#playerOneUp");
const playerTwoUp = document.querySelector("#playerTwoUp");
const resetScore = document.querySelector("#resetScore");
const player1Score = document.querySelector("#playerOneScore");
const player2Score = document.querySelector("#playerTwoScore");
const score = document.querySelector("#score");
const form = document.querySelector("form");



let round = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

playerOneUp.addEventListener('click', function (e) {
    e.preventDefault();
    if (selectedRounds.value == 0) {
        alert("Please, select the amount of rounds!");
    }
    else if (round < selectedRounds.value) {
        playerOneScore++;
        round++;
        player1Score.innerText = (`${playerOneScore}`);
    }
    whoWon();
})
playerTwoUp.addEventListener('click', function (e) {
    e.preventDefault();
    if (selectedRounds.value === 0) {
        alert("Please, select the amount of rounds!");
    }
    else if (round < selectedRounds.value) {
        playerTwoScore++;
        round++;
        player2Score.innerText = (`${playerTwoScore}`);
    }
    whoWon();
})
resetScore.addEventListener('click', function (e) {
    e.preventDefault();
    round = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    player1Score.innerText = (`${playerOneScore}`);
    player2Score.innerText = (`${playerTwoScore}`);
    player1Score.style.color = "black";
    player2Score.style.color = "black";
})


function whoWon() {
    if (playerOneScore > playerTwoScore) {
        player1Score.style.color = "green";
        player2Score.style.color = "red";
    }
    else if (playerOneScore < playerTwoScore) {
        player1Score.style.color = "red";
        player2Score.style.color = "green";
    }
    if (round == selectedRounds.value) {
        form.innerHTML = `
        <button id="playerOneUp" disabled class="btn btn-primary">+1 Player One</button>
        <button id="playerTwoUp" disabled class="btn btn-success">+1 Player Two</button>
        <button id="resetScore" class="btn btn-danger">Reset Score</button>
    `
        if (playerOneScore > playerTwoScore) {
            console.log('Player 1 won!');
        }
        else if (playerOneScore < playerTwoScore) {
            console.log('Player 2 won!');
        }
    }
}