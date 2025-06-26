let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw!";
  msg.style.background = "blue";
  msg.style.color = "white";
};
const showWinner = (userWin) => {
  if (userWin) {
    console.log("you win!");
    msg.innerText = "You Win!";
    msg.style.background = "green";
    msg.style.color = "white";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("you lose!");
    msg.innerText = "You Lose!";
    msg.style.background = "red";
    msg.style.color = "white";
    compScore++;

    compScorePara.innerText = compScore;
  }
};

const playgame = (userChoice) => {
  console.log("user choice: " + userChoice);
  const compChoice = genComputerChoice(); //generate computer choice
  console.log("computer choice: " + compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
