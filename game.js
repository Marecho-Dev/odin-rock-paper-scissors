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
    console.log("CPU SELECTION IS " + computerSelection);
    console.log("player selection is "+ playerSelection);
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS"){
        return ["CPU","You Lose! Rock beats Scissors"]
    }
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER"){
        return ["Player","You Win! Paper beats rock"]
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase() =="ROCK"){
        return ["CPU","You Lose! Paper beats rock"]
    }
    if (computerSelection=="PAPER" && playerSelection.toUpperCase()=="SCISSORS"){
        return ["Player","You Win! Scissors beats paper"]
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="PAPER"){
        return ["CPU","You Lose! Scissors beats Paper"]
    }
    if (computerSelection=="SCISSORS" && playerSelection.toUpperCase()=="ROCK"){
        return ["Player","You Win! Rock beats Scissors"]
    }
    else{
        return ["DRAW","Draw, you both played the same thing!"]
    }
}

function game(){
    let CPUScore = 0;
    let PlayerScore = 0;
    for (let i = 0; i<5; i++){
        let roundEnd = playRound(getComputerChoice(),getPlayerSelection());
        if (roundEnd[0] == "CPU"){
            CPUScore = CPUScore + 1;
        }
        else if (roundEnd[0] == "Player") {
            PlayerScore = PlayerScore+1;
        } 
        console.log(roundEnd[1]);
    }
    
    if (CPUScore>PlayerScore){
        console.log("You lose!" + CPUScore + "-" + PlayerScore);
    }
    else if(PlayerScore > CPUScore){
        console.log("You Win! " + PlayerScore + "-" + CPUScore);
    }
    }
let results = document.querySelector('.Result');
const rpsDivs = document.querySelectorAll('#rps');
let cpu = 0;
let player = 0;
function alterScore(result){
    let cpuScore = document.querySelector('.playerScore');
    let playerScore = document.querySelector('.cpuScore');
    if (result=="CPU"){
        cpu = cpu+1;
        cpuScore.textContent = cpu;
    }

    if (result=="Player"){
        player=player+1;
        playerScore.textContent = player;
    }

    if (cpu == 5){
        results.textContent = "CPU WINS, YOU LOSE!"
    }

    if (player == 5){
        results.textContent = "You Win!!"
    }
}
// game();
rpsDivs.forEach(rpsDiv=>{
    rpsDiv.addEventListener(
        'click',
        ()=>{
            roundResult = playRound(getComputerChoice(),rpsDiv.textContent);
            results.textContent = roundResult[1];
            alterScore(roundResult[0]);
        }
    );
});




console.log(results);
// console.log(currentScore);



