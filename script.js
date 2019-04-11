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

//reload and play videos after being changed 
function reload(video) {
	document.getElementById(video).load();
	document.getElementById(video).play();
}

//randomize answer choices and videos
function randomizeStepButton() {
	var randomButtonNumber = Math.floor(Math.random()*2 +1);
	var otherButtonNumber = 3-randomButtonNumber;

	correctStep = taeguek1[currentStep+1];
	incorrectStep = taeguek1[Math.floor(Math.random()*(taeguek1.length-1))];

	document.getElementById("choice" + randomButtonNumber).src = correctStep;
	document.getElementById("choice" + otherButtonNumber).src = incorrectStep; 

	reload("vid1");
	reload("vid2");
}


function nextStep() {
	//update step count
	currentStep += 1;

	//check if baro or next step
	if (currentStep > (taeguek1.length-3)) {
		document.getElementById("step").innerHTML = "Baro, Back to Joon Bi";
	} else {
		document.getElementById("step").innerHTML = "Step " + currentStep;
	}

	//change main vid to show previous step
	document.getElementById("main").src = taeguek1[currentStep];
	reload("mainVid");
}

//check if selected step is correct, and if form is completed
function checkNextStep(answer) {
	var vidSource = document.getElementById(answer).src;
	if (vidSource.includes(correctStep)) {
		// window.alert("Good job! You got it right!");

		//check for form completion
		if(currentStep == (taeguek1.length-3)) {
			window.alert("Congrats! You finished the form!");
			displayHide("button1");
			displayHide("button2");
			displayHide("vid1");
			displayHide("vid2");

			//play entire form
			document.getElementById("step").innerHTML = "Complete Form :)";
			document.getElementById("main").src = taeguek1[taeguek1.length-1];
			reload("mainVid");

		} else {
			nextStep();
			randomizeStepButton();
		}


	} else {
		window.alert("Hmmm, not really, try again.");
	}
} 

//hide and show answer choices
function displayHide(id) {
  if (document.getElementById(id).style.display === "none") {
    document.getElementById(id).style.display = "inline";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
