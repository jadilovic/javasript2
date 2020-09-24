
let btn = document.querySelector("button");
let ptx = document.querySelector("p");

let myNum = 123;
let myString = myNum.toString();
typeof myString;
alert(typeof myString);

btn.addEventListener("click", updateBtn);

function updateBtn(){
	if(btn.textContent === "Start Machine"){
		btn.textContent = "Stop Machine";
		ptx.textContent = "Machine is Running";
	} else {
		btn.textContent = "Start Machine";
		ptx.textContent = "Machine Stopped";
	}
}

let song = "Fight the youth";
let song1 = `Fight the youth xxx`;

let score = 9;
let highestScore = 10;

const output = document.querySelector(".output");

//output.textContent = "I like the song " + song + " I gave it score of " + (score * highestScore) + "%";

output.textContent = `I like the song " ${song} ". I gave it score of ${score * highestScore}%`;

const examReport = document.querySelector(".examReport");
let examScore = prompt("Enter exam score.");
let examHighestScore = 70;
examReport.textContent = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%).
				${ (examScore/examHighestScore) >= 0.5 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;












