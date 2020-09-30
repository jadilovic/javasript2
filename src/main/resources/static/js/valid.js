const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.onsubmit = function(e){
	if(fname.value === "" || lname.value === ""){
		e.preventDefault();
		para.textContent = "You need to fill in both names";
	}
}


const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

btn.onclick = function() {
  videoBox.setAttribute('class','showing');
}

videoBox.onclick = function() {
  videoBox.setAttribute('class','hidden');
};

video.onclick = function() {
  video.play();
};