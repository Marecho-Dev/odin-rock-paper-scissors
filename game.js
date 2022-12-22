//created list with each shape you can make in rock paper scissors.
//generate a random integer which will be used with the list to find the position being output
//returns the shape the computer will play
function getComputerChoice(){
    const shapes = ["CHARMANDER", "SQUIRTLE", "BULBASAUR"];
    let position = Math.floor(Math.random() * 3);
    return shapes[position];
}

function playRound(computerSelection, playerSelection){
    console.log("CPU SELECTION IS " + computerSelection);
    console.log("player selection is "+ playerSelection);
    if (computerSelection == "CHARMANDER" && playerSelection.toUpperCase() == "BULBASAUR"){
        return ["CPU","You Lose! Fire is SUPER effective!"]
    }
    if (computerSelection == "CHARMANDER" && playerSelection.toUpperCase() == "SQUIRTLE"){
        return ["Player","You Win! Water is SUPER effective!"]
    }
    if (computerSelection=="SQUIRTLE" && playerSelection.toUpperCase() =="CHARMANDER"){
        return ["CPU","You Lose! Water is SUPER effective!"]
    }
    if (computerSelection=="SQUIRTLE" && playerSelection.toUpperCase()=="BULBASAUR"){
        return ["Player","You Win! Grass is SUPER effective!"]
    }
    if (computerSelection=="BULBASAUR" && playerSelection.toUpperCase()=="SQUIRTLE"){
        return ["CPU","You Lose! Grass is SUPER effective!"]
    }
    if (computerSelection=="BULBASAUR" && playerSelection.toUpperCase()=="CHARMANDER"){
        return ["Player","You Win! Fire is SUPER effective!"]
    }
    else{
        return ["DRAW","Draw, you both sent out the same pokemon!"]
    }
}




let results = document.querySelector('.Result'); //modifies the div that outputs round winner
const rpsDivs = document.querySelectorAll('#rps'); //nodelist of all of the player's available pokemon charmander/squirtle/bulbasaur
let ashLife = document.querySelector('.ash-life'); //ash life div
let garyLife = document.querySelector('.gary-life'); //try and add a linear gradient for this
let cpu = 0;
let player = 0;

//this function isn't being used...it was used in the previous rps design where player score was visible
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

let curSelection = "";
// game();
rpsDivs.forEach(rpsDiv=>{
    rpsDiv.addEventListener(
        'click',
        ()=>{
            roundResult = playRound(getComputerChoice(),rpsDiv.className);

            if (roundResult[0] == "CPU" && cpu <5 && player <5){
                cpu = cpu + 1;
                // div.style.cssText = ‘color: blue; background: white’;
                // console.log('background: linear-gradient(45deg, to right, #3dff27 '+(100-(cpu*20))+'%, #2e3440 '+cpu*20+'%);');
                ashLife.style.cssText = 'background: linear-gradient(to right, #3dff27 0 '+(100-(cpu*20))+'%, #2e3440 0 '+cpu*20+'%);'
                results.textContent = roundResult[1];
                if (cpu==5){
                    results.textContent = roundResult[1] + " You have been defeated, please visit the nearest Pokemon Center and try again!!!";
                }

            }
            else if(roundResult[0] == "Player" && cpu<5 && player <5){
                player = player + 1;
                garyLife.style.cssText = 'background: linear-gradient(to right, #3dff27 0 '+(100-(player*20))+'%, #2e3440 0 '+player*20+'%);'
                results.textContent = roundResult[1]
                if (player==5){
                    results.textContent = roundResult[1] + " Gary has been defeated, you are now the champion! Congratulations!!!";
                }
            }
            else if(roundResult[0] == "DRAW" && cpu <5 && player <5){
                results.textContent = roundResult[1];
            }
            console.log(cpu);
            console.log(player);
            // alterScore(roundResult[0]);
        }
    );
});



console.log(results);
// console.log(currentScore);

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

