var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var goalNumber = Math.floor(Math.random() * 101) + 19;
var playerNumber = 0;
var wins = 0;
var losses = 0;

$("#goal-score-text").text(goalNumber);

var reset = function(){
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    goalNumber = Math.floor(Math.random() * 101) + 19;
    playerNumber = 0;
    $("#player-score-var").text(playerNumber);
    $("#goal-score-text").text(goalNumber);
};


var winner = function (){
    wins++;
    alert("You WON!");
    $("#wins-var").text(wins);
    reset();
}

var loser = function(){
    losses++;
    alert("You LOSE!")
    $("#losses-var").text(losses);
    reset();
}


$("#crystal-one").on("click" , function(){
   playerNumber +=crystalOne;
   console.log(playerNumber)
   $("#player-score-var").text(playerNumber)
   if(playerNumber === goalNumber) {
        winner();
   }
   else if(playerNumber > goalNumber) {
        loser();
   }
})

$("#crystal-two").on("click" , function(){
    playerNumber +=crystalTwo;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber)
    if(playerNumber === goalNumber) {
        winner();
    }
    else if(playerNumber > goalNumber) {
        loser();
    }
 })

 $("#crystal-three").on("click" , function(){
    playerNumber +=crystalThree;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber)
    if(playerNumber === goalNumber) {
        winner();
    }
    else if(playerNumber > goalNumber) {
        loser();
    }
 })
 
 $("#crystal-four").on("click" , function(){
    playerNumber +=crystalFour;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber);
    if(playerNumber === goalNumber) {
        winner();
    }
    else if(playerNumber > goalNumber) {
        loser();
    }
 });

