let playerScore = 0;
let computerScore = 0;

let pScore = document.getElementById("playerScore");
let comScore = document.getElementById("computerScore");
let pChoice = document.getElementById("playerChoice");
let cChoice = document.getElementById("computerChoice");
let winner = document.getElementById("winner");
let reset = document.getElementById("reset");

let whatHappens = document.getElementById("whatHappens");

let choices = ["rock", "paper", "scissors"];

function startGame() {
  let start = alert("First to 5 wins");
  // console.log("5 points wins");
  let playerName = document.getElementById("name");
  let name = prompt("Enter Name...");
  playerName.innerText = name;
}

startGame();

function computerMove() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return (comMove = choices[randomIndex]);
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

function pickRock() {
  // console.log("Click rock button");
  let playerMove = choices[0];
  // console.log({ playerMove });
  pChoice.innerText = "🌑";
  computerMove();
  if (comMove === choices[0]) {
    // console.log({ comMove });
    cChoice.innerText = "🌑";
    // console.log("computer picked rock, no point");
    whatHappens.innerText = "Both Rock no point 😤";
  } else if (comMove === choices[1]) {
    // console.log({ comMove });
    cChoice.innerText = "📜";
    // console.log("computer picked paper, wraps rock, computer point");
    whatHappens.innerText = "Paper wraps Rock 💻 point 😠";
    computerScore++;
    comScore.innerText = computerScore;
  } else if (comMove === choices[2]) {
    // console.log({ comMove });
    cChoice.innerText = "✂️";
    // console.log("computer picked scissors, smashed by rock, player point");
    whatHappens.innerText = "Rock smashes Scissors 🧍 point 🥳";
    playerScore++;
    pScore.innerText = playerScore;
  }

  endGame();
}

function pickPaper() {
  // console.log("Click paper button");
  let playerMove = choices[1];
  // console.log({ playerMove });
  pChoice.innerText = "📜";
  computerMove();
  if (comMove === choices[0]) {
    // console.log({ comMove });
    cChoice.innerText = "🌑";
    // console.log("computer picked rock, paper wraps rock, player point");
    whatHappens.innerText = "Paper wraps Rock 🧍 point 🥳";
    playerScore++;
    pScore.innerText = playerScore;
  } else if (comMove === choices[1]) {
    // console.log({ comMove });
    cChoice.innerText = "📜";
    // console.log("computer picked paper, no point");
    whatHappens.innerText = "Both Paper no point 😤";
  } else if (comMove === choices[2]) {
    // console.log({ comMove });
    cChoice.innerText = "✂️";
    // console.log(
    //   "computer picked scissors, scissors cuts paper, computer point"
    // );
    whatHappens.innerText = "Scissors cuts Paper 💻 point 😠";
    computerScore++;
    comScore.innerText = computerScore;
  }
  endGame();
}

function pickScissors() {
  // console.log("Click scissors button");
  let playerMove = choices[2];
  // console.log({ playerMove });
  pChoice.innerText = "✂️";
  computerMove();
  if (comMove === choices[0]) {
    // console.log({ comMove });
    cChoice.innerText = "🌑";
    // console.log("computer picked rock, smashes scissors, computer point");
    whatHappens.innerText = "Rock smashes Scissors 💻 point 😠";
    computerScore++;
    comScore.innerText = computerScore;
  } else if (comMove === choices[1]) {
    // console.log({ comMove });
    cChoice.innerText = "📜";
    // console.log("computer picked paper, scissors cut paper, player point");
    whatHappens.innerText = "Scissors cuts Paper 🧍 point 🥳";
    playerScore++;
    pScore.innerText = playerScore;
  } else if (comMove === choices[2]) {
    // console.log({ comMove });
    cChoice.innerText = "✂️";
    // console.log("computer picked scissors, no point");
    whatHappens.innerText = "Both Scissors no point 😤";
  }
  endGame();
}

function endGame() {
  if (playerScore === 5) {
    // console.log("Player Wins");
    winner.innerText = "🥳🧍 Player 🧍🥳";
    // alert("Player Wins");
    // resetGame();
  } else if (computerScore === 5) {
    // console.log("Computer Wins");
    winner.innerText = "😫💻 Computer 💻😫";
    // alert("Computer Wins");
    // resetGame();
  }
}

rockButton.addEventListener("click", pickRock);
paperButton.addEventListener("click", pickPaper);
scissorsButton.addEventListener("click", pickScissors);
reset.addEventListener("click", resetGame);

function resetGame() {
  // console.log("playerScore 0");
  // console.log("computerScore 0");
  playerScore = 0;
  pScore.innerText = playerScore;
  pChoice.innerText = "❓";
  computerScore = 0;
  comScore.innerText = computerScore;
  cChoice.innerText = "❓";
  winner.innerText = "And the winner is ... 🥁";
  whatHappens.innerText = "...";
  //   playerName.innerText = prompt("Name...");
}
