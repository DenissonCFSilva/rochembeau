export default class scoreBoardView {
    constructor(root, player, comp,onScoreChange){
        this.root = root;
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
                <div class="buttons">
                    <button id="Rock" data-value="1">Rock</button>
                    <button id="Paper" data-value="2">Paper</button>
                    <button id="Scisor" data-value="3">Scisor</button>
                </div>
        </div>`;

                this.root.querySelectorAll(".buttons button").forEach(button => {
                    button.addEventListener("click", () => {
                        const value = parseInt(button.dataset.value); // Pega o valor do botão
                        console.log(`O botão clicado tem valor: ${value}`);
                            });
                        });
                    }
                }