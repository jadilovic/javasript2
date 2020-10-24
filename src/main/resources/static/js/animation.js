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
	}).finally(() => {
		console.log(`Fetch element for ${url} finished`);
	});
}

let coffee = fetchAndDecode("images/coffee.jpg", "blob");
let tea = fetchAndDecode("images/tea.jpg", "blob");
let description = fetchAndDecode("images/description", "text");

Promise.all([coffee, tea, description]).then(values =>{
	console.log(values);
	
	let objectURL1 = URL.createObjectURL(values[0]);
	let objectURL2 = URL.createObjectURL(values[1]);
	let descText = values[2];
	
	let image1 = document.createElement("img");
	let image2 = document.createElement("img");
	image1.src = objectURL1;
	image2.src = objectURL2;
	document.body.appendChild(image1);
	document.body.appendChild(image2);
	
	let para = document.createElement("p");
	para.textContent = descText;
	document.body.appendChild(para);
});


//
let timeoutPromise = new Promise((resolve, reject) => {
	setTimeout(function(){
		alert("Success!");
	}, 2000);
});

timeoutPromise.then((message) => {
	alert(message);
});

timeoutPromise.then(alert);


function timeoutPromise2(message, interval){
	return new Promise((resolve, reject) => {
		if(message === "" || typeof message !== "string"){
			reject("Entered message is empty or not a string.");
		} else if(interval < 0 || typeof interval !== "number"){
			reject("Entered interval is negative or not a number");
		} else {
			setTimeout(function(){
				resolve(message);
			}, interval);
		}
	});
};

timeoutPromise2("what", 3000)
.then(message => {
	alert(message);
}).catch(e => {
	console.log("Error: " + e);
})


//

async function hello() {
	return greeting = await Promise.resolve("Hello");
}

hello().then(alert);


// Define custom promise function

function timeoutPromiseX(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("done");
    }, interval);
  });
};

async function timeTestFast() {
  const timeoutPromise1 = timeoutPromiseX(3000);
  const timeoutPromise2 = timeoutPromiseX(3000);
  const timeoutPromise3 = timeoutPromiseX(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}

async function timeTestSlow() {
	 await timeoutPromiseX(3000);
	 await timeoutPromiseX(3000);
	 await timeoutPromiseX(3000);
	}

let startTimeX = Date.now();
timeTestFast().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTimeX;
  alert("Fast Time Test taken in milliseconds: " + timeTaken);
});

timeTestSlow().then(() => {
	  let finishTime = Date.now();
	  let timeTaken = finishTime - startTimeX;
	  alert("SlowTime Test2 taken in milliseconds: " + timeTaken);
	});


//

class Person {
	  constructor(first, last, age, gender, interests) {
	    this.name = {
	      first,
	      last
	    };
	    this.age = age;
	    this.gender = gender;
	    this.interests = interests;
	  }

	  async greeting() {
	    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
	  };

	  farewell() {
	    console.log(`${this.name.first} has left the building. Bye for now!`);
	  };
	}

	let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

	han.greeting().then(console.log);
	
	
	//
	
	function loadAsset(url, type, callback) {
		  let xhr = new XMLHttpRequest();
		  xhr.open('GET', url);
		  xhr.responseType = type;

		  xhr.onload = function() {
		    callback(xhr.response);
		  };

		  xhr.send();
		}

		function displayImage(blob) {
		  let objectURL = URL.createObjectURL(blob);

		  let image = document.createElement('img');
		  image.src = objectURL;
		  document.body.appendChild(image);
		}

		loadAsset('images/oko.jpg', 'blob', displayImage);
		
	
		let i = Date.now();
		
		setTimeout(function run(){
			console.log(i);
			i++;
			
			setTimeout(run, 1000);
		}, 1000);
		
		
		///
		
		function doClock(){
			let date = new Date();
			let time = date.toLocaleTimeString();
			document.getElementById("demo").textContent = time;
		}
		
		const runTime = setInterval(doClock, 1000)
		
		
		
		
		
		
		
