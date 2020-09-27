
const choice = document.querySelector("select");
const html = document.querySelector("html");

document.body.style.padding = "10px";

function update(bgColor, textColor){
	html.style.backgroundColor = bgColor;
	html.style.color = textColor;
}

choice.onchange = function(){
	(choice.value === "black") ? update("black", "white") : update("white", "black");
}


// CAT LOOP EXAMPLE

const cats = ["cica", "mica", "maca"];
const par = document.querySelector(".cat");
let myCats = "Moje macke se zovu: ";

for(let i = 0; i < cats.length; i++){
	myCats += cats[i] + ", "
}

par.textContent = myCats;


// SEARCH LOOP EXAMPLE

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector(".look");

btn.addEventListener("click", function(){
	let searchName = input.value.toLowerCase();
	input.value = "";
	input.focus();
	for(let i = 0; i < contacts.length; i++){
		let name = contacts[i].split(":");
		if(name[0].toLowerCase() === searchName){
			para.textContent = name[0] + "\'s number is: " + name[1];
			break;
		} else {
			para.textContent = "Contact was not found.";
		}
	}
});


// SAMPLE GENERATING INTEGER SQUARES

const enter = document.querySelector(".cal");
const btnx = document.querySelector(".btn");
const parax = document.querySelector(".sqr");

btnx.addEventListener("click", function(){
	let num = enter.value;
	
	for(let i = 1; i <= num; i++){
		let sqrr = Math.sqrt(i);
		if(Math.floor(sqrr) !== sqrr){
			continue;
		}
		parax.textContent += i + ", ";
	}
});


// SAMPLE LAUNCH COUNTDOWN

const output = document.querySelector('.output');

let i = 10;

while(i >= 0){
	const para = document.createElement('p');
	if(i === 10)
		para.textContent = "Countdown " + i;
	else if(i === 0)
		para.textContent = "Blast off";
	else
		para.textContent = i;
	output.appendChild(para);
	i--;
}


// SAMPLE TWO LISTS OF NAMES

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector(".adm");
const refused = document.querySelector(".ref");

admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";
let count = 0;

for(let i = 0; i < people.length; i++){
	if(people[i] === "Phil" || people[i] === "Lola"){
		count++;
		refused.textContent += (count === 2) ? people[i] + "." : people[i] + ", ";
	} else {
		admitted.textContent += (i === (people.length - 1)) ? people[i] + "." : people[i] + ", ";
	}
}
	
	
// SAMPLE LOOP LIST

let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here

for(let i = 0; i < myArray.length; i++){
	let item = document.createElement("li");
	item.textContent = myArray[i];
	list.append(item);
}

// Don't edit the code below here!

const section = document.querySelector('.preview');
section.appendChild(list);
	

// SECOND SEARCH SAMPLE WITH LOOP
	
let name = 'Mustafa';
let j = 0;
let parag = document.createElement('p');

let phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here
while(j < phonebook.length){
	if(phonebook[j].name === name){
		parag.textContent = phonebook[j].name + ", phone num: " + phonebook[j].number;
		break;
	}
	j++;
}

// Don't edit the code below here!
let sectionx = document.querySelector('.book');
sectionx.appendChild(parag);
	
	



