
	const verseChoose = document.querySelector("select");
	const verseDisplay = document.querySelector("pre");
	
	verseChoose.onchange = function(){
		let verse = verseChoose.value;
		updateDisplay(verse);
	}
	
	function updateDisplay(verse){
		verse = verse.replace(" ", "");
		verse = verse.toLowerCase();
		let url = "texts/" + verse + ".txt";
		console.log(url);
		
		/*
		fetch(url).then(function(response) {
			  response.text().then(function(text) {
			    verseDisplay.textContent = text;
			  });
			});
		*/
	
		let request = new XMLHttpRequest();
		
		request.open("GET", url);
		
		request.responseType = "text";
		
		request.onload = function(){
			verseDisplay.textContent = request.response;
		}
		
		request.send();
	}
	
	updateDisplay("Verse 1");
	verseChoose.value = "Verse 1";







