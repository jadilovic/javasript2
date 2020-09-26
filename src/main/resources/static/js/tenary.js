
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