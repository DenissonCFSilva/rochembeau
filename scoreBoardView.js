export default class scoreBoardView {
    constructor(root, player, comp, onScoreChange) {
        this.root = root;
        this.pChoice = null;
        this.playerScore = 0;
        this.computerScore = 0;
        this.onScoreChange = onScoreChange;

        // Renderizando o HTML
        this.root.innerHTML = `
        <div class="scoreBoard">
            <div class="title">
                <h1>Rock, Paper, Scisor</h1>
                <h2>Try to beat me.</h2>
            </div>
            <div class="name" id="player">${player}</div>
            <div class="name" id="comp">${comp}</div>
            <div class="score" data-for-player="one">0</div>
            <div class="score" data-for-player="two">0</div>    
            <div class="result"></div>
            <div class="buttons">
                <button id="Rock" data-value="1">Rock</button>
                <button id="Paper" data-value="2">Paper</button>
                <button id="Scisor" data-value="3">Scisor</button>
            </div>
        </div>`;

        this.resultDiv = this.root.querySelector(".result");

        this.root.querySelectorAll(".buttons button").forEach(button => {
            button.addEventListener("click", () => {
                this.pChoice = parseInt(button.dataset.value);
                console.log(`You chose: ${this.pChoice}`);
                if (this.pChoice) {
                    this.onScoreChange(this.pChoice);
                }
            });
        });
    }

    updateScores(playerScore, computerScore) {
        this.playerScore = playerScore;
        this.computerScore = computerScore;
        const playerScoreElement = this.root.querySelector('[data-for-player="one"]');
        const computerScoreElement = this.root.querySelector('[data-for-player="two"]');

        playerScoreElement.textContent = this.playerScore;
        computerScoreElement.textContent = this.computerScore;
    }

    displayResult(playerChoice, computerChoice, resultMessage) {
        this.resultDiv.innerHTML = `
            <p>You chose: ${playerChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <p>${resultMessage}</p>
        `;
    }
}
