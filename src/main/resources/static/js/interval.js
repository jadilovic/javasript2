
// Timeouts and Intervals

const inputForm = document.querySelector("form");
const inputName = document.getElementById("name");

const btnGreet = document.querySelector(".greet");
const btnCancel = document.querySelector(".cancel");

btnCancel.disabled = true;

function sayHi(who){
	alert("Welcome dear " + who + "!");
	btnCancel.disabled = true;
}

let myGreeting;

inputForm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	btnCancel.disabled = false;
	
	myGreeting = setTimeout(sayHi, 4000, inputName.value);
});

btnCancel.addEventListener("click", () =>{
	clearTimeout(myGreeting);
	btnCancel.disabled = true;
	console.log("Greeting canceled!");
})


// Wathching time

function displayTime(){
	let date = new Date();
	let time = date.toLocaleTimeString();
	document.getElementById("demo").textContent = time;
}

const createClock = setInterval(displayTime, 1000);


// New project

function displayClock(){
	let date = new Date();
	let time = date.toLocaleTimeString();
	document.querySelector(".clock").textContent = time;
}

displayClock();
const createTimeClock = setInterval(displayClock, 1000);


// STOPWATCH APP

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const displayPara = document.querySelector(".watch");

let secondCount = 0;
let stopWatch;
stopBtn.disabled = true;
resetBtn.disabled = true;

function displayCounter(){
	let hours = Math.floor(secondCount / 3600);
	let minutes = Math.floor((secondCount % 3600) / 60)
	let seconds = Math.floor(secondCount % 60);
	
	let showHours = (hours < 10) ? "0" + hours : hours;
	let showMinutes = (minutes < 10) ? "0" + minutes : minutes;
	let showSeconds = (seconds < 10) ? "0" + seconds : seconds;
	
	displayPara.textContent = showHours + ":" + showMinutes + ":" + showSeconds;
	
	secondCount++;
}

displayCounter();

startBtn.addEventListener("click", () => {
	stopWatch = setInterval(displayCounter, 1000);
	startBtn.disabled = true;
	stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
	clearInterval(stopWatch);
	startBtn.disabled = false;
	stopBtn.disabled = true;
	resetBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
	secondCount = 0;
	resetBtn.disabled = true;
	displayCounter();
})


let i = 1;

setTimeout(function run(){
	console.log(i);
	i++;
	setTimeout(run, 1000);
}, 1000);


let j = 1;
setInterval(function runj(){
	console.log(j);
	j++;
}, 1000)










