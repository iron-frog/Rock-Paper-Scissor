const buttons = document.querySelectorAll(".choice");
const playerImage = document.querySelector(".player_icon");
const computerImage = document.querySelector(".computer_icon");
const playerScore = document.querySelector(".player_score");
const computerScore = document.querySelector(".computer_score");
const matchResult = document.querySelector(".result");
const container = document.querySelector(".container");

let playerTotal = 0;
let computerTotal = 0;
let winScore = 5;

const resetButton =document.createElement("button");
resetButton.className = "choice";
resetButton.textContent = "Reset Score";
resetButton.style.margin = "20px 0";
container.appendChild(resetButton);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    if (choice == 1) {
        return "paper";
    }
    if (choice == 2) {
        return "scissor";
    }

}

function playRound(playSelection, computerSelection) {
    let player1 = playSelection.toUpperCase();
    let player2 = computerSelection.toUpperCase();

    let message;
    let result;
    if (player1 == "ROCK") {
        if (player2 == "PAPER") {
            message = `You lose! ${player2} beats ${player1}`;
            result = "lose";
        }
        else if (player2 == "SCISSOR") {
            message = `You win! ${player1} beats ${player2}`;
            result = "win";
        }
        else {
            message = `You draw! ${player1} and ${player2}`;
            result = "draw";
        }
    }

    if (player1 == "SCISSOR") {
        if (player2 == "PAPER") {
            message = `You win! ${player1} beats ${player2}`;
            result = "win";
        }
        else if (player2 == "ROCK") {
            message = `You Lose! ${player2} beats ${player1}`;
            result = "lose";
        }
        else {
            message = `You draw! ${player1} and ${player2}`;
            result = "draw";
        }

    }
    if (player1 == "PAPER") {
        if (player2 == "SCISSOR") {
            message = `You Lose! ${player2} beats ${player1}`;
            result = "lose";
        }
        else if (player2 == "ROCK") {
            message = `You win! ${player1} beats ${player2}`;
            result = "win";
        }
        else {
            message = `You draw! ${player1} and ${player2}`;
            result = "draw";
        }

    }
    return result;

}

function game(playSelection, computerSelection) {

    let result;

    if(playerTotal ==winScore){
        matchResult.textContent = "PLAYER WINS";
        return;
    }
    if(computerTotal==winScore){
        matchResult.textContent = "COMPUTER WINS";
        return;
    }
    
    result = playRound(playSelection, computerSelection);
    changeImage(playSelection, computerSelection);
    
    if (result == "win") {
        playerTotal = + playerTotal + 1;
        playerScore.textContent = `Player: ${playerTotal}`;
        if(playerTotal ==winScore){
            matchResult.textContent = "PLAYER WINS";
            return;
        }
    }
    else if (result == "lose") {
        computerTotal = + computerTotal + 1;
        computerScore.textContent = `Computer: ${computerTotal}`;
        if(computerTotal==winScore){
            matchResult.textContent = "COMPUTER WINS";
            return;
        }

    }
    move(result);
    matchResult.textContent = result.toUpperCase();
    matchResult.classList.add("result_bigger");
    
}

function resetGame(){
    playerTotal = 0;
    computerTotal =0;
    playerScore.textContent = `Player: ${playerTotal}`;
    computerScore.textContent = `Computer: ${computerTotal}`;
    matchResult.textContent = "-";
    
}
function returnChoice(e) {
    return e.target.className.split(' ')[1]
}

function changeImage(pStr, cStr) {
    playerImage.src = `/images/${pStr}.png`;
    computerImage.src = `/images/${cStr}.png`;
}

function move(result) {

    if (result == "lose") {
        computerImage.classList.add("move-left");
        setTimeout(()=>{
            playerImage.classList.add("move-left");

        },100)

    }
    else if (result == "win") {
        playerImage.classList.add("move-right");
        setTimeout(()=>{
            computerImage.classList.add("move-right");

        },100)

    }
}

matchResult.addEventListener('transitionend', () => {
    matchResult.classList.remove("result_bigger");
});


playerImage.addEventListener('transitionend', () => {
    playerImage.classList.remove("move-right");
    playerImage.classList.remove("move-left");


});

computerImage.addEventListener('transitionend', () => {
    computerImage.classList.remove("move-left");
    computerImage.classList.remove("move-right");

});

resetButton.addEventListener('click', ()=>{
    resetGame();
})

buttons.forEach(button => button.addEventListener('click', (e) => {
    const playerChoice = returnChoice(e);
    const computerChoice = getComputerChoice();
    //changeImage(playerChoice, computerChoice);
    game(playerChoice, computerChoice);
}));

