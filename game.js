//create function computerPlay return r,p,s
//generate random 1 - 3
//switch statement for return
//returns rock, paper, or scissors randomly

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

function generateRandom(){
    return Math.floor(Math.random()*3)+1;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "That was a tie."
    }
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return("You lose, " + computerSelection + " beats " + playerSelection + ".");
        }
        if(computerSelection == "scissors"){
            return("You win, " + playerSelection + " beats " + computerSelection + ".");
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return("You win, " + playerSelection + " beats " + computerSelection + ".");
        }
        if(computerSelection == "scissors"){
            return("You lose, " + computerSelection + " beats " + playerSelection + ".");
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return("You lose, " + computerSelection + " beats " + playerSelection + ".");
        }
        if(computerSelection == "paper"){
            return("You win, " + playerSelection + " beats " + computerSelection + ".");
        }
    }
}


function game(){
    for(let i = 0; i < 5; i++ ){
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();



