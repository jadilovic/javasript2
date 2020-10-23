/**
const spinner = document.querySelector("div");

let rotateCount = 0;

let startTime = null;

let rAF;

const body = document.querySelector("body");

function draw(timestamp){
	
	if(!startTime){
		startTime = timestamp;
	}
	
	rotateCount = (timestamp - startTime) / 6;
	
	if(rotateCount > 359){
		rotateCount %= 360;
	}
	
	spinner.style.transform = `rotate(${rotateCount}deg)`;
	
	rAF = requestAnimationFrame(draw);
	
	console.log(startTime);
}

draw();

body.addEventListener("click", () => {
	if(startTime == 0){
		draw();
	} else {
		cancelAnimationFrame(rAF);
		startTime = 0;
	}
});

**/

const spinner = document.querySelector(".spinner p");
const spinnerContainer = document.querySelector(".spinner");

let rotateCount = 0;
let startTime = null;
let rAF;

const btn = document.querySelector("button");
const result = document.querySelector(".result");

spinnerContainer.style.display = "none";
result.style.display = "none";

function random(min, max){
	let num = Math.floor(Math.random() * (max - min)) + min;
	return num;
}

function draw(timestamp){
	
	if(!startTime){
		startTime = timestamp;
	}
	
	rotateCount = (timestamp - startTime) / 3;
	
	if(rotateCount > 359){
		rotateCount %= 360;
	}
	
	spinner.style.transform = `rotate(${rotateCount}deg)`;
	
	rFA = requestAnimationFrame(draw);
}

function reset(){
	btn.style.display = "block";
	result.textContent = "";
	result.style.display = "none";
}

btn.addEventListener("click", start);

function start(){
	draw();
	spinnerContainer.style.display = "block";
	btn.style.display = "none";
	setTimeout(setEndgame, random(5000, 10000));
}

function setEndgame(){
	  cancelAnimationFrame(rAF);
	  spinnerContainer.style.display = 'none';
	  result.style.display = 'block';
	  result.textContent = 'PLAYERS GO!!';
	  
	  document.addEventListener('keydown', keyHandler);

	  function keyHandler(e) {
	    let isOver = false;
	    console.log(e.key);
	    
	    if (e.key === "a") {
	      result.textContent = 'Player 1 won!!';
	      isOver = true;
	    } else if (e.key === "l") {
	      result.textContent = 'Player 2 won!!';
	      isOver = true;
	    }

	    if (isOver) {
	      document.removeEventListener('keydown', keyHandler);
	      setTimeout(reset, 5000);
	    }
	  };
}


// Promise

let promise = fetch("images/coffee.jpg");

let promise2 = promise.then(response => {
	if(!response.ok){
		throw new Error(`HTTP Error! status: ${response.status}`);
	} else {
		return response.blob();
	}
});

let promise3 = promise2.then(myBlob => {
	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement("img");
	image.src = objectURL;
	document.body.appendChild(image);
});

let errorCase = promise3.catch(e => {
	console.log("There has been problem with your fetch operation " + e.message);
});

// short version

fetch("images/oko.jpg")
.then(response => {
	if(!response.ok){
		throw new Error(`HTTP error! status: ${response.status}`);
	} else {
		return response.blob();
	}
})
.then(myBlob => {
	let objectURL = URL.createObjectURL(myBlob);
	let image = document.createElement("img");
	image.src = objectURL;
	document.body.appendChild(image);
})
.catch(e => {
	console.log("There was a problem with your fetch operation " + e.message);
});


// Fetch and Decode

function fetchAndDecode(url, type){
	return fetch(url).then(response => {
		if(!response.ok){
			throw new Error(`HTML Error status: ${response.status}`);
		} else {
			if(type === "blob"){
				return response.blob();
			} else if (type === "text"){
				return response.text();
			}
		}
	})
	.catch(e => {
		console.log("There was a problem with your catch operation " + e.message);
	});
}














