
/*
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement);

//play/pause audio
playBtn.addEventListener('click', function() {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

  // if track is stopped, play it
    if (this.getAttribute('class') === 'paused') {
        audioElement.play();
        this.setAttribute('class', 'playing');
        this.textContent = 'Pause'
    // if track is playing, stop it
} else if (this.getAttribute('class') === 'playing') {
        audioElement.pause();
        this.setAttribute('class', 'paused');
        this.textContent = 'Play';
    }
});

// if track ends
audioElement.addEventListener('ended', function() {
    playBtn.setAttribute('class', 'paused');
    playBtn.textContent = 'Play';
});

const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', function() {
    gainNode.gain.value = this.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);

const em = document.createElement("em");
const bol = document.createElement("b");
const para = document.querySelector("p");
const para2 = document.querySelector(".a");
const para3 = document.querySelector(".b");
let word = "word";

em.textContent = "--- text added to para ---";
bol.textContent = "bold text";

para.appendChild(em);
console.log(em);

para2.textContent = word;
console.log(word);

para3.appendChild(bol);
console.log(bol);

///
/**
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2D");

let ball = new Ball();

Ball.prototype.draw = function(){
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
}


const link = document.querySelector("a");

link.textContent = "Mozzila Developer Network";

link.href = "https://developer.mozilla.org/"

const sect = document.querySelector("section");

const par = document.createElement("p");
par.textContent = "We hope you enjoyed the ride";

par.setAttribute("class", "highlight");

/**
par.style.color = "white";
par.style.backgroundColor = "black";
par.style.padding = "10px";
par.style.width = "250px";
par.style.textAlign = "center";


console.log(par);

sect.appendChild(par);

const text = document.createTextNode(" - the premier source for web development knowledge.");
const linkPara = document.querySelector(".link");
linkPara.appendChild(text);

// sect.appendChild(linkPara);

// sect.removeChild(linkPara);

let clonedPara = par.cloneNode(true);

sect.appendChild(clonedPara);

let clonedSect = sect.cloneNode(true);

sect.appendChild(clonedSect);

// sect.removeChild(clonedSect);

clonedSect.remove();

*/
///

let div = document.querySelector(".win");
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
	
	div.style.width = winWidth + "px";
	div.style.height = winHeight + "px";
	
	console.log(winWidth);
	console.log(winHeight);


// Shoping list
	const ulElement = document.querySelector("ul");
	const inputElement = document.querySelector("input");
	const btnElement = document.querySelector("button");
	
	btnElement.onclick = function(){
		let inputValue = inputElement.value;
		inputElement.value = "";
		
		let liElement = document.createElement("li");
		let spanElement = document.createElement("span");
		let btn2Element = document.createElement("button");
		
		liElement.appendChild(spanElement);
		spanElement.textContent = inputValue;

		liElement.appendChild(btn2Element);
		btn2Element.textContent = "Delete";
		
		ulElement.appendChild(liElement);
		
		btn2Element.onclick = function(e){
			ulElement.removeChild(liElement);
		}
		
		inputElement.focus();
	}
	
	
	// try
	/*
	   const list = document.querySelector('ul');
	      const input = document.querySelector('input');
	      const button = document.querySelector('button');

	      button.onclick = function() {
	        let myItem = input.value;
	        input.value = '';

	        const listItem = document.createElement('li');
	        const listText = document.createElement('span');
	        const listBtn = document.createElement('button');

	        listItem.appendChild(listText);
	        listText.textContent = myItem;
	        listItem.appendChild(listBtn);
	        listBtn.textContent = 'Delete';
	        list.appendChild(listItem);

	        listBtn.onclick = function(e) {
	          list.removeChild(listItem);
	        }

	        input.focus();
	      }
	
	*/
	
	
	
	
	
	
	
	







