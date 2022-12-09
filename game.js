//created list with each shape you can make in rock paper scissors.
//generate a random integer which will be used with the list to find the position being output
//returns the shape the computer will play
function getComputerChoice(){
    const shapes = ["Rock", "Paper", "Scissors"];
    let position = Math.floor(Math.random() * 3);
    return shapes[position];
}

function getPlayerSelection(){
    return shape = prompt("What will you play?");
}


function round(computerSelection, playerSelection){
    if (computerSelection == "Rock" && playerSelection == "Scissors"){
        return "You Win! Rock beats Scissors"
    }
    if (computerSelection == "Rock" && playerSelection == "Paper"){
        return "You Lose! Paper beats rock"
    }
    if (computerSelection=="Paper" && playerSelection=="Rock"){
        return "You Win! Paper beats rock"
    }
    if (computerSelection=="Paper" && playerSelection=="Scissors"){
        return "You Lose! Scissors beats paper"
    }
    if (computerSelection=="Scissors" && playerSelection=="Paper"){
        return "You Win! Scissors beats Paper"
    }
    if (computerSelection=="Scissors" && playerSelection=="Rock"){
        return "You Lose! Rock beats Scissors"
    }
}


console.log(getPlayerSelection());