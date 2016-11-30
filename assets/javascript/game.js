$(document).ready(function(){

var counter = 0;
var targetNumber = Math.floor(Math.random()*100+20);

$(".targetBox").text(targetNumber);

// This function will condense code for crystal clicks.
// function crystalLogic() {
// 	var crystalValue = Math.floor(Math.random()*12+1);
// }


// Lines 16 and 17 won't work as intended as it always changes.
$("#crystalImageOne").on("click", function() {
	var crystalValue = Math.floor(Math.random()*12+1);
	counter += crystalValue; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		alert("You Win!");
	}else if (counter >= targetNumber) {
		alert("You Lose!");	
	};
});

$("#crystalImageTwo").on("click", function() {
	counter += 2;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		alert("You Win!");
	}else if (counter >= targetNumber) {
		alert("You Lose!");	
	};
});

$("#crystalImageThree").on("click", function() {
	counter += 3; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		alert("You Win!");
	}else if (counter >= targetNumber) {
		alert("You Lose!");	
	};
});

$("#crystalImageFour").on("click", function() {
	counter += 4;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		alert("You Win!");
	}else if (counter >= targetNumber) {
		alert("You Lose!");	
	};
});
// Note to self: create function to condense the anon function 
// in every instance of clicking that we might call a named 
// function. We would have to build the function first.




});