
// Timeouts and Intervals

const inputForm = document.querySelector("form");
const inputName = document.getElementById("name");

const btnGreet = document.querySelector(".greet");
const btnCancel = document.querySelector(".cancel");

btnCancel.disable = true;

function sayHi(who){
	alert("Welcom dear " + who + "!");
	btnCancel.disable = true;
}

let myGreeting;

inputForm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	btnCancel.disable = false;
	
	myGreeting = setTimeout(sayHi, 4000, inputName.value);
});

btnCancel.addEventListener("click", () = >{
	clearTimeout(myGreeting);
	btnCancel.disable = true;
	console.log("Greeting canceled!");
})











