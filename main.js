import scoreBoardView from "/scoreBoardView.js"
console.log(scoreBoardView);
const root = document.querySelector("#app");
const view = new scoreBoardView(root, "Pisspot (you)", "Master", handlePlayerChoice);

function handlePlayerChoice(playerChoice) {
    const computerChoice = Math.floor(Math.random()*3) + 1;
    console.log(`Computer chose: ${computerChoice}`);

    let resultMessage = "";
    
    if (playerChoice > computerChoice) {
        resultMessage = "You win!";
    } else if (playerChoice < computerChoice) {
        resultMessage = "Computer wins!";
    } else {
        resultMessage = "It's a tie!";
    }
    
    view.updateScores(playerScore, computerScore);

    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>${resultMessage}</p>
    `;
}

