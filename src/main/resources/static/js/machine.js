
let btn = document.querySelector("button");
let ptx = document.querySelector("p");

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














