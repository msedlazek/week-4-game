$(document).ready(function(){

var counter = 0

$("#crystalImageOne").on("click", function() {
	counter += 1; 
	$(".counterDisplay").text(counter);
});

$("#crystalImageTwo").on("click", function() {
	counter += 2;
	$(".counterDisplay").text(counter);
});

$("#crystalImageThree").on("click", function() {
	counter += 3; 
	$(".counterDisplay").text(counter);
});

$("#crystalImageFour").on("click", function() {
	counter += 4;
	$(".counterDisplay").text(counter);
});

});