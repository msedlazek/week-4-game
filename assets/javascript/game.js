$(document).ready(function(){

var counter = 0;
var targetNumber = Math.floor(Math.random()*100+20);
var wins = 0;
var losses = 0; 

var crystalValueOne = Math.floor(Math.random()*12+1);
var crystalValueTwo = Math.floor(Math.random()*12+1);
var crystalValueThree = Math.floor(Math.random()*12+1);
var crystalValueFour = Math.floor(Math.random()*12+1);

$(".targetBox").text(targetNumber);

var gameReset = function() {
	counter = 0;
	$(".counterDisplay").text(counter);
	targetNumber = Math.floor(Math.random()*100+20);
	$(".targetBox").text(targetNumber);
}

// var newValue = function() {
// 	crystalValueOne = Math.floor(Math.random()*12+1);
// 	crystalValueTwo = Math.floor(Math.random()*12+1);
// 	crystalValueThree = Math.floor(Math.random()*12+1);
//  	crystalValueFour = Math.floor(Math.random()*12+1);
// }


$("#crystalImageOne").on("click", function() {
	counter += crystalValueOne; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	};
	
});

$("#crystalImageTwo").on("click", function() {
	counter += crystalValueTwo;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	};
});

$("#crystalImageThree").on("click", function() {
	counter += crystalValueThree; 
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	};
});

$("#crystalImageFour").on("click", function() {
	counter += crystalValueFour;
	$(".counterDisplay").text(counter);
	if (counter === targetNumber) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	}else if (counter >= targetNumber) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameReset();
		crystalValueOne = Math.floor(Math.random()*12+1);
		crystalValueTwo = Math.floor(Math.random()*12+1);
		crystalValueThree = Math.floor(Math.random()*12+1);
 		crystalValueFour = Math.floor(Math.random()*12+1);
	};
});

});