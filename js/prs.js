// function determineWinner(playerChoice, computerChoice) {
//     const choices = ["rock", "paper", "scissors"];
//     const message = document.getElementById("message");
//     if (playerChoice === computerChoice){
//         message.textContent = "Seri";
//         return;
//     }
    
//     if (playerChoice === "rock" && computerChoice === "scissors" || 
//         playerChoice === "paper" && computerChoice === "rock" ||
//         playerChoice === "scissors" && computerChoice === "paper"
//     ) {
//         message.textContent = "Player menang";
//     }
//     else {
//         message.textContent = "Computer menang";
//     }
// }

// // Example usage:
// (determineWinner("paper", "scissors")); // "You win!"

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
const WIN_SCORE = 10;

function playGame(playerChoice){

    // when game is over
    if(playerScore === WIN_SCORE || computerScore === WIN_SCORE){
        resultDisplay.textContent = "GAME OVER! Refresh for rematch.";
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    if(result === "YOU WIN!"){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.classList.add("greenText");
    }
    else if(result === "YOU LOSE!"){
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.classList.add("redText");
    }

    // check the winner
    if(playerScore === WIN_SCORE){
        resultDisplay.textContent = "Player Winner!";
    }
    else if(computerScore === WIN_SCORE){
        resultDisplay.textContent = "Computer Winner!";
    }
}
