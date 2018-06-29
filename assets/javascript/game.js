var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
var goalNumber = Math.floor(Math.random() * 101) + 19;
var playerNumber = 0;
var wins = 0;
var losses = 0;

$("#goal-score-text").text(goalNumber);


$("#crystal-one").on("click" , function(){
   playerNumber +=crystalOne;
   console.log(playerNumber)
   $("#player-score-var").text(playerNumber)
   if(playerNumber === goalNumber) {
       wins++
       $("#wins-var").text(wins);
       alert("You WON!");
       crystalOne = Math.floor(Math.random() * 12) + 1;
       crystalTwo = Math.floor(Math.random() * 12) + 1;
       crystalThree = Math.floor(Math.random() * 12) + 1;
       crystalFour = Math.floor(Math.random() * 12) + 1;
       goalNumber = Math.floor(Math.random() * 101) + 19;
       playerNumber = 0;
       $("#player-score-var").text(playerNumber);
       $("#goal-score-text").text(goalNumber);
   }
   else if(playerNumber > goalNumber) {
       losses++
       $("#losses-var").text(losses);
       alert("you LOSE!");
       crystalOne = Math.floor(Math.random() * 12) + 1;
       crystalTwo = Math.floor(Math.random() * 12) + 1;
       crystalThree = Math.floor(Math.random() * 12) + 1;
       crystalFour = Math.floor(Math.random() * 12) + 1;
       goalNumber = Math.floor(Math.random() * 101) + 19;
       playerNumber = 0;
       $("#player-score-var").text(playerNumber);
       $("#goal-score-text").text(goalNumber);
   }
})

$("#crystal-two").on("click" , function(){
    playerNumber +=crystalTwo;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber)
    if(playerNumber === goalNumber) {
        wins++
        $("#wins-var").text(wins);
        alert("You WON!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
    else if(playerNumber > goalNumber) {
        losses++
        $("#losses-var").text(losses);
        alert("you LOSE!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
 })

 $("#crystal-three").on("click" , function(){
    playerNumber +=crystalThree;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber)
    if(playerNumber === goalNumber) {
        wins++
        $("#wins-var").text(wins);
        alert("You WON!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
    else if(playerNumber > goalNumber) {
        losses++
        $("#losses-var").text(losses);
        alert("you LOSE!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
 })
 
 $("#crystal-four").on("click" , function(){
    playerNumber +=crystalFour;
    console.log(playerNumber)
    $("#player-score-var").text(playerNumber);
    if(playerNumber === goalNumber) {
        wins++
        $("#wins-var").text(wins);
        alert("You WON!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
    else if(playerNumber > goalNumber) {
        losses++
        $("#losses-var").text(losses);
        alert("you LOSE!");
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        goalNumber = Math.floor(Math.random() * 101) + 19;
        playerNumber = 0;
        $("#player-score-var").text(playerNumber);
        $("#goal-score-text").text(goalNumber);
    }
 });

