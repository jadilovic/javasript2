let login = prompt("Enter position");

let msg = (login == "Employee") ? "Hello" :
		(login == "Director") ? "Greetings" :
				(login == "") ? "No login" : "";

alert(msg);

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



let a, b = 3;

let rez = (a + b < 4) ? "Below" : "Over";

alert(rez);

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}


/**

let broj = prompt("Unesite broj");

if(broj > 0){
	alert(1);
} else if(broj < 0){
	alert(-1);
} else {
	alert(0);
}


let name = prompt("What is official name of JavaScript?");

if(name == "ECMAScript"){
	alert("Right!");
} else {
	alert("Wrong!");
}


let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

let a = prompt("First number?");
let b = prompt("Second number?");

alert(+a + +b); // 12


let counter = 1;
let a = counter++; // (*)

alert(a); // 2

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
		
alert(2 + 2 + '1' ); // "41" and not "221"


alert(Number(""));

alert(Boolean(""));

alert(String(false));

let name = prompt("What is your name?", "");
alert(`your name is ${name}`);

let isBoss = confirm("Are you the boss?");
alert(isBoss);

let value = "#value";

value = "Hello World";

let result = prompt("how old are you");

alert(`you are old ${result} years`);


 * http://usejsdoc.org/


alert("Whaaaat");
[1, 2].forEach(alert);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
alert(1 / 0);
alert("not a number" / 8);
	 */	

console.log(typeof true);
alert(typeof "ha");

		let str = "Hello";
		let str2 = 'Single quotes are ok too';
		let phrase = `can embed another ${str} ${str2}`;
		
		//alert(phrase);
		
		let isGreater = 4 > 1;

		//alert( isGreater ); // true (the comparison result is "yes")