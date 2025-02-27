import scoreBoardView from "/scoreBoardView.js"
console.log(scoreBoardView);

let playerOneScore = 0;
let computer = 0;
const root = document.querySelector("#app");
const view = new scoreBoardView(root, "Pisspot (you)", "Master");