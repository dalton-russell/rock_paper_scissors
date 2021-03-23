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

//returns user input from prompt
function playerPlay(){
    let noPlay = true;
    while(noPlay){
        let selection = prompt("Type Rock, Paper, or Scissors");
        selection = selection.toLowerCase();
        switch(selection){
            case "rock":
                return "rock";
            case "paper":
                return "paper";
            case "scissors":
                return "scissors";
        }
    }
}

//returns 1, 2, or 3
function generateRandom(){
    return Math.floor(Math.random()*3)+1;
}

//returns 0 for tie, 1 for player win, and 2 for computer win
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 0;
    }
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return 2;
        }
        if(computerSelection == "scissors"){
            return 1;
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return 1;
        }
        if(computerSelection == "scissors"){
            return 2;
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return 2;
        }
        if(computerSelection == "paper"){
            return 1;
        }
    }
}

//5 round game
//prints score and outcome to console
function game(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++ ){
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        let  winner = playRound(playerSelection,computerSelection);
        switch(winner){
            case 0:
                console.log("That was a tie.")
                break;
            case 1:
                console.log("You win, " + playerSelection + " beats " + computerSelection + ".");
                playerScore++;
                break;
            case 2:
                console.log("You lose, " + computerSelection + " beats " + playerSelection + ".");
                computerScore++;
                break;
        }
    }
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
game();



