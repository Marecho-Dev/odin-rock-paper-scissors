//created list with each shape you can make in rock paper scissors.
//generate a random integer which will be used with the list to find the position being output
//returns the shape the computer will play
function getComputerChoice(){
    const shapes = ["Rock", "Paper", "Scissors"];
    let position = Math.floor(Math.random() * 3);
    return shapes[position];
}

