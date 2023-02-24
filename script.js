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
    if(player1 == "ROCK"){
        if(player2 == "PAPER"){
            message = `You lose! ${player2} beats ${player1}`; 
            result = "lose";
        }
        else if (player2 == "SCISSOR"){
            message = `You win! ${player1} beats ${player2}`;
            result = "win";
        }
        else{
            message = "You draw!"
            result = "draw";
        }
    }
    
    if(player1 == "SCISSOR"){
        if(player2 == "PAPER"){
            message = `You win! ${player1} beats ${player2}`;  
            result = "win";
        }
        else if (player2 == "ROCK"){
            message = `You Lose! ${player2} beats ${player1}`;
            result = "lose";
        }
        else{
            message = "You draw!";
            result = "draw";
        }
    
    }
    if(player1 == "PAPER"){
        if(player2 == "SCISSOR"){
            message = `You Lose! ${player2} beats ${player1}`;  
            result = "lose";
        }
        else if (player2 == "ROCK"){
            message = `You win! ${player1} beats ${player2}`;
            result = "win";
        }
        else{
            message = "You draw!";
            result = "draw";
        }
    
    }
    alert(message);
    return result;

}

function game(){

    let computerSelection;
    let playSelection;
    let result;
    let playerTotal = 0;
    let computerTotal = 0;
    let drawTotal = 0
    let message;
    for(let i =0; i<5; i++){
        computerSelection = getComputerChoice();
        playSelection = prompt("Rock, Paper or Scissor?");
        result= playRound(playSelection, computerSelection);
        //result= playRound("rock", "rock");

        if (result=="win"){
            playerTotal =+ playerTotal+1;
            
        }
        else if(result=="lose"){
            computerTotal=+ computerTotal+1;
        }
        else{
            drawTotal =+ drawTotal+1;
        }
        alert(`You: ${playerTotal}  Computer: ${computerTotal}  Draw: ${drawTotal}`);
    }
    if(playerTotal> computerTotal){
       message = "Winner";
    }
    else if(playerTotal< computerTotal){
        message = "Loser";
    }
    else{
        message = "Draw";
    }

    alert(`${message}\nYou: ${playerTotal}  Computer: ${computerTotal}  Draw: ${drawTotal}`);

}

game();
