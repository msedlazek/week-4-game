$(document).ready(function(){

var counter = 0;
var targetNumber = Math.floor(Math.random()*100+20);
var wins = 0;
var losses = 0; 

var crystalValueOne = Math.floor(Math.random()*12+1);
var crystalValueTwo = Math.floor(Math.random()*12+1);
var crystalValueThree = Math.floor(Math.random()*12+1);
var crystalValueFour = Math.floor(Math.random()*12+1);

var newValue = function() {
	crystalValueOne = Math.floor(Math.random()*12+1);
	crystalValueTwo = Math.floor(Math.random()*12+1);
	crystalValueThree = Math.floor(Math.random()*12+1);
 	crystalValueFour = Math.floor(Math.random()*12+1);
}
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


$("#crystalImageOne").on("click", function() {
	counter += crystalValueOne; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	};
	
});

$("#crystalImageTwo").on("click", function() {
	counter += crystalValueTwo;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	};
});

$("#crystalImageThree").on("click", function() {
	counter += crystalValueThree; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	};
});

$("#crystalImageFour").on("click", function() {
	counter += crystalValueFour;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		counter = 0;
		$(".counterDisplay").text(counter);
		targetNumber = Math.floor(Math.random()*100+20);
		$(".targetBox").text(targetNumber);
		newValue();
	};
});
// Note to self: create function to condense the anon function 
// in every instance of clicking that we might call a named 
// function. We would have to build the function first.




});