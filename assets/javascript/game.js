$(document).ready(function(){

var counter = 0;
var targetNumber = Math.floor(Math.random()*100+20);
var wins = 0;
var losses = 0; 

// function newTargetNumber() {
// 	Math.floor(Math.random()*100+20);
// }

$(".targetBox").text(targetNumber);

// This function will condense code for crystal clicks.
// function crystalLogic() {
// 	var crystalValue = Math.floor(Math.random()*12+1);
// }

// function gameReset() {
// 	counter = 0;
// 	newTargetNumber();
// 	// var crystalValue = Math.floor(Math.random()*12+1);
// }


// Lines 16 and 17 won't work as intended as it always changes.
$("#crystalImageOne").on("click", function() {
	counter += 1; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	};
	
});

$("#crystalImageTwo").on("click", function() {
	counter += 2;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	};
});

$("#crystalImageThree").on("click", function() {
	counter += 3; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	};
});

$("#crystalImageFour").on("click", function() {
	counter += 4;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = 50;
		$(".targetBox").text(targetNumber);
	};
});
// Note to self: create function to condense the anon function 
// in every instance of clicking that we might call a named 
// function. We would have to build the function first.




});