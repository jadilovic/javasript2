
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














