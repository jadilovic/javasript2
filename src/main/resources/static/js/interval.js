
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

function displayClock(){
	let date = new Date();
	let time = date.toLocaleTimeString();
	document.querySelector(".clock").textContent = time;
}

displayClock();
const createTimeClock = setInterval(displayClock, 1000);


clearInterval(createClock);








