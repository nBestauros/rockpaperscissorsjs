scores = {
    PlayerScore: 0, 
    ComputerScore: 0,
    NumTieGames: 0
};
function computerPlay(){
    let choice ="";
    switch(Math.floor(Math.random()*3)){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "You Tied!";
    }
    if(playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            return "You Lose! Paper beats rock!";
        }
        if(computerSelection == "Scissors"){
            return "You Win! Rock beats scissors!";
        }
    }

    if(playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            return "You Win! Paper beats rock!";
        }
        if(computerSelection == "Scissors"){
            return "You Lose! Scissors beats paper!"
        }
    }

    if(playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            return "You Lose! Rock beats scissors!";
        }

        if(computerSelection == "Paper"){
            return "You Win! Scissors beats paper!";
        }
    }
}

function getValidInput(){
    let userChoice="";
    const validChoices = ["Rock", "Paper", "Scissors"];
    while (!validChoices.includes(userChoice)){
        userChoice = prompt("Pick: Rock, Paper, Scissors");
    }
    return userChoice;
}

const buttons = document.querySelectorAll('.choicebutton');
console.log(buttons.length);
buttons.forEach(button=>button.addEventListener("click", function(e){
    console.log(this.id); 
    result = playRound(this.id, computerPlay());
    if(result.charAt(4)=="W"){
        scores.PlayerScore=scores.PlayerScore+1;
    }
    else if (result.charAt(4)=="L"){
        scores.ComputerScore=scores.ComputerScore+1;
    }
    else{
        scores.NumTieGames=scores.NumTieGames+1;
    }

    console.log(result);
    updateScore();
}));

function updateScore(){
    if(scores.PlayerScore==5){
        alert("You win!");
        resetScores();
    }
    if(scores.ComputerScore==5){
        alert("You lose.");
        resetScores();
    }

    const player = document.querySelector("#playerscore");
    const comp = document.querySelector('#computerscore');
    const tie = document.querySelector('#tiegames');

    player.textContent = "Player: "+scores.PlayerScore;
    comp.textContent = "Computer: "+scores.ComputerScore;
    tiegames.textContent = "Tie Games: "+scores.NumTieGames;



}

function resetScores(){
    scores.PlayerScore=0;
    scores.ComputerScore=0;
    scores.NumTieGames=0;
}