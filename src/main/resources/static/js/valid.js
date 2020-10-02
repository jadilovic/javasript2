/**
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
**/

const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

btn.onclick = function() {
  videoBox.setAttribute('class','showing');
}

videoBox.onclick = function() {
  videoBox.setAttribute('class','hidden');
};

video.onclick = function(e) {
	e.stopPropagation();
  video.play();
};


//Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});



//Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
	}
});








