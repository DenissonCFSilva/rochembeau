import scoreBoardView from "/scoreBoardView.js";

console.log(scoreBoardView);

const root = document.querySelector("#app");
const view = new scoreBoardView(root, "Pisspot (you)", "Master", handlePlayerChoice);

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function handlePlayerChoice(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`Computer chose: ${computerChoice}`);
    getWinner(playerChoice, computerChoice);
}

function getWinner(playerChoice, computerChoice) {
    let resultMessage = "";

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        resultMessage = "You win!";
        playerScore++;
    } else {
        resultMessage = "Computer wins!";
        computerScore++;
    }

    view.updateScores(playerScore, computerScore);
    view.displayResult(playerChoice, computerChoice, resultMessage);

    rounds++;

    if (rounds >= 5) {
        endGame();
    }
}

function endGame() {
    let finalMessage = "";

    if (playerScore > computerScore) {
        finalMessage = "You are the winner of the game!";
    } else if (playerScore < computerScore) {
        finalMessage = "I won. Loser!";
    } else {
        finalMessage = "It's a tie game!";
    }
    
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `<h2>${finalMessage}</h2>`;

    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => button.disabled = true);
}
