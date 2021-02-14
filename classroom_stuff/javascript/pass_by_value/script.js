/*
  //Pass by value
var quidditchWinner = "HArry Potter"

function changeWinner(winner){
    console.log("Orignal winner = "+ winner)
    winner="Draco Malfoy"
    console.log("change winner= "+winner)
}

console.log("The winner was "+quidditchWinner)

changeWinner(quidditchWinner)
console.log("Now the winner is "+quidditchWinner) */

 //pass by value as refrence

var quidditchWinner=[
    "Harry", "Ram", "Hernoine"
];
function changeWinner(winner){
    winner[0]="Draco"
    winner[1]="Crabbe"
    winner[2]="Pansy"
}

console.log("The winner were "+quidditchWinner)

changeWinner(quidditchWinner)

console.log("Now the winner are "+quidditchWinner);


/* conclusion is pass by value 
is used in javascript but in case of non-premitive types like array objects
we will use pass by value as refrence*/ 