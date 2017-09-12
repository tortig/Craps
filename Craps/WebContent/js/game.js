var die1;
var die2;
var sum = 0;
var point = 0;
var rollCount = 0;
var checkWinResult = false;
var checkLoseResult = false;
//-----------------------------------------------------------

function crap() {	// main funtion

    if (rollCount == 0) {	// roll first time
        sum = roll(); 
 
        if(sum == 2 || sum == 3 || sum == 12){
        	win();
        }else
        	if(sum == 7 || sum == 11){
        		lose();
        	}else {							//need roll again
        		point = sum;
        		document.getElementById("pointText").value = point; // show point
        	}   
    }else
    	if (rollCount != 0) {	//roll NO first time
    		rollAgain();
        }
}
//-----------------------------------------------------------------------
function roll(){
	rollCount++; 	// roll counter 
	
    var die1 = Math.floor((Math.random() * 6) + 1);	// rolling the first dice
    var die2 = Math.floor((Math.random() * 6) + 1);	// rolling the second dice
    
    sum = die1 + die2;
	
    switch(die1){		//print values on html page
    case 1:
    	document.getElementById("Die1").src = "images/dice_1.png";
    case 2:
    	document.getElementById("Die1").src = "images/dice_2.png";
    case 3:
    	document.getElementById("Die1").src = "images/dice_3.png";
    case 4:
    	document.getElementById("Die1").src = "images/dice_4.png";
    case 5:
    	document.getElementById("Die1").src = "images/dice_5.png";
    case 6:
    	document.getElementById("Die1").src = "images/dice_6.png";
    }
    
    switch(die2){		
    case 1:
    	document.getElementById("Die2").src = "images/dice_1.png";
    case 2:
    	document.getElementById("Die2").src = "images/dice_2.png";
    case 3:
    	document.getElementById("Die2").src = "images/dice_3.png";
    case 4:
    	document.getElementById("Die2").src = "images/dice_4.png";
    case 5:
    	document.getElementById("Die2").src = "images/dice_5.png";
    case 6:
    	document.getElementById("Die2").src = "images/dice_6.png";
    }
    	
    document.getElementById("sumText").value = sum;

    return sum;	// return sum to use in crap() function
}
//-------------------------------------------------------------------
function rollAgain() {	//function roll again
    sum = roll();

    if (sum == 7) {
        lose();
    }
    else if (point == sum) {
        win(); 
    }
}
//--------------------------------------------------------------------
function win() {	//function show win the game
    document.getElementById("roll").innerHTML = "You Win"; // change text of roll button
    document.getElementById("winText").innerHTML = "You win";
    document.getElementById("roll").disabled = false;
}
//---------------------------------------------------------------------
function lose() {	//function show lose the game
	document.getElementById("roll").innerHTML = "You Lose"; // change text of roll button
	document.getElementById("loseText").innerHTML = "You Lose"; 
	document.getElementById("roll").disabled = false;
}