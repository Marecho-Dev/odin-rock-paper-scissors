//created list with each shape you can make in rock paper scissors.
//generate a random integer which will be used with the list to find the position being output
//returns the shape the computer will play
function getComputerChoice(){
    const shapes = ["ROCK", "PAPER", "SCISSORS"];
    let position = Math.floor(Math.random() * 3);
    return shapes[position];
}

function getPlayerSelection(){
    return shape = prompt("What will you play?");
}


function round(computerSelection, playerSelection){
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS"){
        return "You Win! Rock beats Scissors"
    }
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER"){
        return "You Lose! Paper beats rock"
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase() =="ROCK"){
        return "You Win! Paper beats rock"
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase()=="SCISSORS"){
        return "You Lose! Scissors beats paper"
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="PAPER"){
        return "You Win! Scissors beats Paper"
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="ROCK"){
        return "You Lose! Rock beats Scissors"
    }
}


console.log(getPlayerSelection());