var taeguek1 = [
	"taeguek1/joonBi_Small.mp4",
	"taeguek1/step1_Small.mp4",
	"taeguek1/step2_Small.mp4",
	"taeguek1/step3_Small.mp4",
	"taeguek1/step4_Small.mp4",
	"taeguek1/step5_Small.mp4",
	"taeguek1/step6_Small.mp4",
	"taeguek1/step7_Small.mp4",
	"taeguek1/step8_Small.mp4",
	"taeguek1/step9_Small.mp4",
	"taeguek1/step10_Small.mp4",
	"taeguek1/step11_Small.mp4",
	"taeguek1/step12_Small.mp4",
	"taeguek1/step13_Small.mp4",
	"taeguek1/step14_Small.mp4",
	"taeguek1/step15_Small.mp4",
	"taeguek1/step16_Small.mp4",
	"taeguek1/baro_Small.mp4",
	"taeguek1/taeguek1Complete.mp4",
	];
var currentStep = 0;
var correctStep = "";
var incorrectStep = "";

function reload(video) {
	document.getElementById(video).load();
	document.getElementById(video).play();
}

function randomizeStepButton() {
	var randomButtonNumber = Math.floor(Math.random()*2 +1);
	var otherButtonNumber = 3-randomButtonNumber;

	correctStep = taeguek1[currentStep+1];
	incorrectStep = taeguek1[Math.floor(Math.random()*18)];

	document.getElementById("choice" + randomButtonNumber).src = correctStep;
	document.getElementById("choice" + otherButtonNumber).src = incorrectStep; 

	currentStep += 1;
	document.getElementById("step").innerHTML = "Step " + currentStep;

	//check for correct videos
/*	console.log(randomButtonNumber);
	console.log(otherButtonNumber); 
	console.log(correctStep);
	console.log(incorrectStep);
	console.log(document.getElementById("choice1"));
	console.log(document.getElementById("choice2"));*/

	reload("vid1");
	reload("vid2");
}

/*function checkNextStep(answer) {
	if (answer ==
} */

function begin() {
	//randomize choices
	randomizeStepButton();
}