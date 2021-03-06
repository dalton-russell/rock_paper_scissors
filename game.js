//Rock, Paper, Scissors Game
//Asks the user for their choice
//Generates random choice for computer
//Compares and prints round winner to console
//Game lasts 5 rounds
//Dalton Russell
//3/15/2021

//returns rock, paper, or scissors
function computerPlay(){
    let number = generateRandom();
    switch(number){
        case 1:
            displayComputerSelection("rock");
            return "rock";
        case 2:
            displayComputerSelection("paper");
            return "paper";
        default:
            displayComputerSelection("scissors");
            return "scissors";
    }
}

//calls playRound with button pressed and computerPlay
function listen(){
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
            button.addEventListener('click', () =>
            {
                if(round < 5){
                displayUserSelection(button.id);
                playRound(button.id, computerPlay());
                }
                else{ //no longer calling funtions on click
                    
                }
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

//start game
function game(){
    console.log("game");
    listen();
}  

//prints round outcome
function roundOutcome(playerSelection, computerSelection, winner){
    let textOut = document.getElementById("output");
    switch(winner){
        case 0:
            textOut.innerHTML = "That was a tie.";
            round++;
            document.getElementById("humanScore").innerHTML =  "You: " + playerScore;
            document.getElementById("computerScore").innerHTML =   "Me: " + computerScore;
            break;
        case 1:
            textOut.innerHTML = "You win, " + playerSelection + " beats " + computerSelection + ".";
            round++;
            playerScore++;
            document.getElementById("humanScore").innerHTML =   "You: " + playerScore;
            document.getElementById("computerScore").innerHTML =   "Me: " + computerScore;
            break;
        case 2:
            textOut.innerHTML = "You lose, " + computerSelection + " beats " + playerSelection + ".";
            round++;
            computerScore++;
            document.getElementById("humanScore").innerHTML =   "You: " + playerScore;
            document.getElementById("computerScore").innerHTML =   "Me: " + computerScore;
            break;
    }
    if(round > 4){
        gameOver();
    }
}

//print game outcome
function gameOver(){
    let textOut = document.getElementById("output");
    if(playerScore > computerScore){
        textOut.innerHTML = "Game Over!!! You are the winner."
    }
    else if(computerScore > playerScore){
        textOut.innerHTML = "Game Over!!! You are the loser."
    }
    else {
        textOut.innerHTML = "Game Over!!! Tie game."
    }
    playAgain();
} 

//create and listen for play again button press
function playAgain(){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Play Again";
    let playAgainBtn = document.getElementById("playAgain");
    if(playAgainBtn.childNodes[0] == null){ //only create one button
        playAgainBtn.style.display = "flex";
        playAgainBtn.style.justifyContent = "center";
        playAgainBtn.style.width = "auto";
        playAgainBtn.style.height = "auto";
        playAgainBtn.appendChild(btn);
        btn.addEventListener('click', () =>
            {
                location.reload();
            });
    }
}

function displayUserSelection(choice){
    let img = document.createElement("img");
    let src = document.getElementById("playerChoice");
    if(src.childNodes[0] != null){
        src.removeChild(src.childNodes[0]);
    }
    switch(choice){
        case "rock":
            img.src = "rock.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
        case "paper":
            img.src = "paper.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
        case "scissors":
            img.src = "scissors.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
    }
}

function displayComputerSelection(choice){
    let img = document.createElement("img");
    let src = document.getElementById("computerChoice");
    if(src.childNodes[0] != null){
        src.removeChild(src.childNodes[0]);
    }
    switch(choice){
        case "rock":
            img.src = "rock.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
        case "paper":
            img.src = "paper.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
        case "scissors":
            img.src = "scissors.png";
            img.style.width = "200px";
            img.style.height = "200px";
            src.appendChild(img);
            break;
    }
}

//starts game
console.log("start");
let computerScore = 0;
let playerScore = 0;
let round = 0;
game();




