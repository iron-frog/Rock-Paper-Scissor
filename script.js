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

function play(playSelection, computerSelection) {
    let player1 = playSelection.toUpperCase();
    let player2 = computerSelection.toUpperCase();
    let result = (player1 == "ROCK" && player2 == "PAPER") 
    ?    "You lose! Paper beats Rock"
    :   (player1 == "ROCK" && player2 == "SCISSOR")
    ?   "You win! Rock beats Scissor"
    :   "You draw!"

    return result;

}

const computerSelection = getComputerChoice();
const computerSelection1 = getComputerChoice();
const computerSelection2 = getComputerChoice();

console.log(play("rock", computerSelection));
console.log(play("rock", computerSelection1));
console.log(play("rock", computerSelection2));