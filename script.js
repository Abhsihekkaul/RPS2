let computerChoicefunc = () => {
    return Math.floor(Math.random() * 3);
}

let userScoreBoard = 0;
let computerScoreBoard = 0;
let humanChoice = -1;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let userScoreElement = document.getElementById("user-score");
let computerScoreElement = document.getElementById("computer-score");
let resultElement = document.getElementById("result");

rock.addEventListener("click", () => {
    humanChoice = 0;
    console.log("User choice: Rock");
    playRound();
})

paper.addEventListener("click", () => {
    humanChoice = 1;
    console.log("User choice: Paper");
    playRound();
})

scissor.addEventListener("click", () => {
    humanChoice = 2;
    console.log("User choice: Scissor");
    playRound();
})

let rounds = parseInt(prompt("How many rounds would you like to play?"));
let currentRound = 0;

function playRound() {
    if (currentRound < rounds) {
        let computerChoice = computerChoicefunc();
        playground(humanChoice, computerChoice);
        currentRound++;
        userScoreElement.textContent = `User Score: ${userScoreBoard}`;
        computerScoreElement.textContent = `Computer Score: ${computerScoreBoard}`;
    } else {
        resultElement.textContent = "Game Over!";
        userScoreElement.textContent = `Final User Score: ${userScoreBoard}`;
        computerScoreElement.textContent = `Final Computer Score: ${computerScoreBoard}`;
    }
}

function playground(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultElement.textContent = "Game is a Draw";
    } else if (
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 2 && computerChoice === 1)
    ) {
        resultElement.textContent = "User Wins!";
        userScoreBoard++;
    } else {
        resultElement.textContent = "Computer Wins!";
        computerScoreBoard++;
    }
}
