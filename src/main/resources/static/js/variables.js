const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

/**
const button1 = document.querySelector('button');

button1.onclick = function(){
	let age = prompt("What is your age?");
	alert("Your age is " + age + " years old.");
}

**/


const button1 = document.querySelector("button");
const nameText = document.querySelector(".name");
const ageText = document.querySelector(".age");
const townText = document.querySelector(".town");
const personInfoText = document.querySelector(".personInfo");

button1.onclick = function(){
	name = prompt("What is your name?");
	age = prompt("What is your age?");
	town = prompt("What is your town?");

	nameText.textContent = "text " + name;
	ageText.textContent= age;
	
	for(let i = 0; i < 5; i++){
		townText.textContent = town;
	}
}

myName = "Aki";

function logName(){
	console.log(myName);
}

logName();

var myName;













