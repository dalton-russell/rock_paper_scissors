//Rock, Paper, Scissors Game
//Asks the user for their choice
//Generates random choice for computer
//Compares and prints round winner to console
//Game lasts 5 rounds
//Dalton Russell
//3/17/2021

//returns rock, paper, or scissors
function computerPlay(){
    let number = generateRandom();
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}

//calls playRound with button pressed and computerPlay
function listen(){
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
            button.addEventListener('click', () =>
            {
                playRound(button.id, computerPlay());
            });
        })
    
}

//returns 1, 2, or 3
function generateRandom(){
    return Math.floor(Math.random()*3)+1;
}

//0 for tie, 1 for player win, and 2 for computer win
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        roundOutcome(playerSelection, computerSelection, 0);
    }
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            roundOutcome(playerSelection, computerSelection, 2);
        }
        if(computerSelection == "scissors"){
            roundOutcome(playerSelection, computerSelection, 1);
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            roundOutcome(playerSelection, computerSelection, 1);
        }
        if(computerSelection == "scissors"){
            roundOutcome(playerSelection, computerSelection, 2);
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            roundOutcome(playerSelection, computerSelection, 2);
        }
        if(computerSelection == "paper"){
            roundOutcome(playerSelection, computerSelection, 1);
        }
    }
}

//5 round game
//prints score and outcome to console
function game(){
    console.log("game");
    listen();
}  
    
function roundOutcome(playerSelection, computerSelection, winner){
    switch(winner){
        case 0:
            console.log("That was a tie.")
            round++;
            break;
        case 1:
            console.log("You win, " + playerSelection + " beats " + computerSelection + ".");
            round++;
            playerScore++;
            break;
        case 2:
            console.log("You lose, " + computerSelection + " beats " + playerSelection + ".");
            round++;
            computerScore++;
            break;
    }
    if(round > 4){
        gameOver();
    }
}
    
function gameOver(){
    console.log("Game Over!!!");
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if(playerScore > computerScore){
        console.log("You are the winner.")
    }
    else if(computerScore > playerScore){
        console.log("You are the loser.")
    }
    else {
        console.log("Tie game.")
    }
}

//starts game
console.log("start");
let computerScore = 0;
let playerScore = 0;
let round = 0;
game();




