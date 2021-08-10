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

function game(){
    let playerScore = 0;
    playerSelection = getValidInput();
    result = playRound(playerSelection, computerPlay());
    if(result.charAt(4)=="W"){
        playerScore++;
    }
    console.log(result);

}

function getValidInput(){
    let userChoice="";
    const validChoices = ["Rock", "Paper", "Scissors"];
    while (!validChoices.includes(userChoice)){
        userChoice = prompt("Pick: Rock, Paper, Scissors");
    }
    return userChoice;
}