//Programming Challenge
            //On Your Own:    ch. 7
            //Description:
			//Create a page that allows the user to play a game with the computer. In this game, 
			//the player will roll two dice and the computer will roll two dice. The Math.random() method will be used to generate each roll of a die, 
			//from 1 to 6. The sum of the computer’s roll should be compared to the sum of the player’s roll and whoever has the greater sum is the winner of 
			//that round. The sum of the winner’s roll for that round should be added to his or her point total. 
			//Use functions to call for each roll of two dice and the sum, for keeping track of the points, and to allow the player to continue or quit 
			//after a round of play. The following are the game rules: n If one player rolls doubles (i.e., two fours or two sixes, etc.) 
			//and is a winner for that round, he or she should get double points. n If one player rolls doubles but is not a winner, nothing special happens.
			//n If the two sums for any round are a tie, no one gets any points.
			//n The game ends when either player reaches at least 100 points or when the human player wants to quit. 
			//Save your page as dice.html and be sure to include an appropriate page title.
                        
            //Created by: Jerry French  
						//csc240
            //Created on: 4/11/2022,
			
		



	
  
   
  
    // Player name
    var player1 = "Player 1";
    var player2 = "Player 2";
  
    let total1 = 0;
	let total2 = 0;
  
    // Function to roll the dice
    function rollTheDice() {
        setTimeout(function () {
		
		//getting dice numbers
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
			var randomNumber3 = Math.floor(Math.random() * 6) + 1;
			var randomNumber4 = Math.floor(Math.random() * 6) + 1;
			
			//printing dice image
            document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 + ".png");
  
            document.querySelector(".img2").setAttribute("src",
                "dice" + randomNumber2 + ".png");
				
			document.querySelector(".img3").setAttribute("src",
                "dice" + randomNumber3 + ".png");
  
            document.querySelector(".img4").setAttribute("src",
                "dice" + randomNumber4 + ".png");
				
			// getting the total score for 1 round	
			let score1 = randomNumber1 + randomNumber2;
			let score2 = randomNumber3 + randomNumber4;
			
			//checking for doubles
			if(randomNumber1 == randomNumber2 && score1 > score2){
				document.getElementById("doubles").innerHTML= "DOUBLES";
				score1 = score1 *2;
			
			}else{
				document.getElementById("doubles").innerHTML= "Keep Going";
			}	
			
			if(randomNumber3 == randomNumber4 && score2 > score1){
				document.getElementById("doubles").innerHTML= "DOUBLES";
				score2 = score2 *2;
			
			}else{
				document.getElementById("doubles").innerHTML= "Keep Going";
			}
			
			if(score1 == score2){
			
				score1 = 0;
				score2 = 0
			
			}
			
			//adding up totals
			
				total1 += score1;
			
				total2 += score2;
			
			
			//printing elements
			document.getElementById("score1").innerHTML= "Score " + score1;
			document.getElementById("score2").innerHTML= "Score " + score2;
			
			document.getElementById("Total1").innerHTML= "Total " + total1;
			document.getElementById("Total2").innerHTML= "Total " + total2;
			
  
            if (randomNumber1 + randomNumber2 === randomNumber3 + randomNumber4 ) {
                document.querySelector("h1").innerHTML = "Draw!";
            }
  
            else if (randomNumber1 + randomNumber2 < randomNumber3 + randomNumber4) {
                document.querySelector("h1").innerHTML
                                = (player2 + " WINS!");
            }
  
            else {
                document.querySelector("h1").innerHTML
                                = (player1 + " WINS!");
								
            }
			//end game at 100 point
			if(total1 >= 100 || total2 >= 100){
				alert("Game Over");
				score1 = 0;
				score2 = 0;
  
				total1 = 0;
				total2 = 0;
			}
        }, 2500);
		
		
    }
	
	//reset the game
function resetGame() {
	score1 = 0;
	score2 = 0;
  
	total1 = 0;
	total2 = 0;
	
	document.getElementById("score1").innerHTML= "Score " + score1;
	document.getElementById("score2").innerHTML= "Score " + score2;
			
	document.getElementById("Total1").innerHTML= "total " + total1;
	document.getElementById("Total2").innerHTML= "total " + total2;
  
}
 


 
