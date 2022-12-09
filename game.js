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


function playRound(computerSelection, playerSelection){
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS"){
        return ["Player","You Win! Rock beats Scissors"]
    }
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER"){
        return ["CPU","You Lose! Paper beats rock"]
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase() =="ROCK"){
        return ["Player","You Win! Paper beats rock"]
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase()=="SCISSORS"){
        return ["CPU","You Lose! Scissors beats paper"]
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="PAPER"){
        return ["Player","You Win! Scissors beats Paper"]
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="ROCK"){
        return ["CPU","You Lose! Rock beats Scissors"]
    }
    else{
        return ["DRAW","Draw, you both played the same thing!"]
    }
}

function game(){
    let CPUScore = 0;
    let PlayerScore = 0;
    for (let i = 0; i<5; i++){
        playRound(getComputerChoice(),getPlayerSelection());
    }
}
console.log(getPlayerSelection());