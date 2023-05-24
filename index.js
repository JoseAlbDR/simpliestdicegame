const player1img = document.querySelector(".img1");
const player2img = document.querySelector(".img2");

const winner = function (scoreP1, scoreP2) {
  if (scoreP1 === scoreP2) return "Draw";
  return scoreP1 > scoreP2 ? "Player 1 Wins" : "Player 2 Wins";
};

console.log(winner(4, 3));

const play = function () {
  const title = document.querySelector("h1");
  const randomNumber = () => Math.trunc(Math.random() * 6 + 1);
  player1img.dataset.dice = randomNumber();
  player2img.dataset.dice = randomNumber();
  player1img.src = `./images/dice${player1img.dataset.dice}.png`;
  player2img.src = `./images/dice${player2img.dataset.dice}.png`;
  title.textContent = winner(player1img.dataset.dice, player2img.dataset.dice);
};

const btn = document.querySelector(".button button");

btn.onclick = function (event) {
  play();
};

window.onload = function (event) {
  player1img.src = `./images/dice${player1img.dataset.dice}.png`;
  player2img.src = `./images/dice${player2img.dataset.dice}.png`;
};
