const choices = ["rock", "paper", "scissors"];

let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let newMessage = document.getElementById("message");
let newGameStats = document.getElementById("game-stats");

let gameStats = {
    wins: 0,
    losses: 0,
    ties: 0,
}

let result = null;

let player = {
    choice: null
}

console.log(player.choice)

function playRock() {
    player.choice = "rock";
    playGame();
}

function playPaper() {
    player.choice = "paper";
    playGame();
}

function playScissors() {
    player.choice = "scissors";
    playGame();

}


function playGame() {
    let isAlive = true;
    if (isAlive) {
        let newPlayerChoise = player.choice;
        let newComputerChoice = getComputerChoice();
        compareChoices(newPlayerChoise, newComputerChoice);
        console.log(player.choice);
        console.log(newComputerChoice);
        playerChoice.textContent = `Your Choice: ${newPlayerChoise}`
        computerChoice.textContent = `Computer's Choice: ${newComputerChoice}`
    }
}

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * choices.length);
    return choices[randomComputerChoice];
}

function compareChoices(player, computer) {
    if (player === computer) {
        gameStats.ties += 1;
        result = "tie";
        updateGameStats(result);
        displayMessage("It's a tie! :|");
    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        gameStats.wins += 1;
        result = "win";
        updateGameStats(result);
        displayMessage("You won! ;)");
    } else {
        gameStats.losses += 1;
        result = "lose";
        updateGameStats(result);
         displayMessage("You lose! :(");
    }
}

function displayMessage(text) {
  newMessage.innerText = text;
}

function updateGameStats(result) {
    console.log("result" + result)
    if (result === "tie") {
        newGameStats.innerText = `Wins: ${gameStats.wins} | Losses: ${gameStats.losses} | Ties: ${gameStats.ties}`;
    } else if (result === "win") {
        newGameStats.innerText = `Wins: ${gameStats.wins} | Losses: ${gameStats.losses} | Ties: ${gameStats.ties}`;
    } else if (result === "lose") {
        newGameStats.innerText = `Wins: ${gameStats.wins} | Losses: ${gameStats.losses} | Ties: ${gameStats.ties}`;
    }
}