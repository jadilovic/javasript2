    const btn = document.querySelector('.circle');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    function draw() {
      ctx.clearRect(0,0,WIDTH,HEIGHT);
      for(let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(20), 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    btn.addEventListener('click', draw);

    
    const myButton = document.querySelector('.hi');

    myButton.onclick = function() {
      alert('hello from the anonymous function');
    }
    
    let mojPozdrav = function(){
    	alert("Cao");
    }
    
    mojPozdrav();
    
    // TEST FUNCTION
    
    const btx = document.querySelector(".test");
    
    btx.onclick = function(){
    	alert("you clicked me");
    }
    
    
    let myArray = ['I', 'love', 'chocolate', 'frogs'];
    let madeAStringd = myArray.join(' ');
    // returns 'I love chocolate frogs'
    let madeAString = myArray.join(",");
    // returns 'I,love,chocolate,frogs'
    alert(madeAString);
    
    
    // FUNCTION SCOPE EXAMPLE
    let x = 1;

    function a() {
      let y = 2;
      output(y);
    }

    function b() {
      let z = 3;
      output(z);
    }

    function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = 'Value: ' + value;
    }
    
    output(x);
    a();
    b();
    
    function heading(value){
    	const head = document.createElement("h1");
    	document.body.appendChild(head);
    	head.textContent = "Naslov je " + value;
    }
    
    heading("hi");
    
    
    // CUSTOM ALERT WINDOW
    
    const btnn = document.querySelector(".mess");
    btnn.onclick = function(){
    	displayMessage("Wou, this is different message.");
    }
    
    
    function displayMessage(msgText, msgType){
    	const html = document.querySelector('html');

    	const panel = document.createElement('div');
    	panel.setAttribute('class', 'msgBox');
    	html.appendChild(panel);

    	const msg = document.createElement('p');
    	msg.textContent = msgText;
    	panel.appendChild(msg);

    	const closeBtn = document.createElement('button');
    	closeBtn.textContent = 'x';
    	panel.appendChild(closeBtn);

    	closeBtn.onclick = function() {
    	  panel.parentNode.removeChild(panel);
    	}
    	
    	if (msgType === 'warning') {
    		  msg.style.backgroundImage = 'url(icons/warning.png)';
    		  msg.style.backgroundSize = "contain";
    		  panel.style.backgroundColor = 'red';
    		} else if (msgType === 'chat') {
    		  msg.style.backgroundImage = 'url(icons/chat.png)';
    		  msg.style.backgroundSize = "contain";
    		  panel.style.backgroundColor = 'aqua';
    		} else {
    		  msg.style.paddingLeft = '20px';
    		}
    }
    
    displayMessage();
    displayMessage('Your inbox is almost full — delete some mails', 'warning');
    displayMessage('Brian: Hi there, how are you today?','chat');
    
    
    // SAMPLE RETURN FUNCTIONS
    
    const input = document.querySelector(".numberInput");
    const pard = document.querySelector("p");
    
    input.onchange = function(){
    	const num = input.value;
    	if(isNaN(num)){
    		pard.textContent = "Please enter some number";
    	} else {
    		pard.textContent = num + " squared is " + squared(num) + ". - " +
    							num + " cubed is " + cubed(num) + ". - " +
    							num + " factorial " + factorial(num) + ".";
    	}
    }
    
    
    function squared(num) {
    	  return num * num;
    	}

    	function cubed(num) {
    	  return num * num * num;
    	}

    	function factorial(num) {
    	  if (num < 0) return undefined;
    	  if (num == 0) return 1;
    	  let x = num - 1;
    	  while (x > 1) {
    	    num *= x;
    	    x--;
    	  }
    	  return num;
    	}
    
    
    // SAMPLE CHANGE BACKGROUND COLOR
    	
    	const bbt = document.querySelector(".color");
    	
    	function random(num){
    		return Math.floor(Math.random() * (num + 1));
    	}
    		
    	function bgChange(){
    		let bgc = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
    		document.body.style.backgroundColor = bgc;
    	}	
    		
    		bbt.addEventListener("click", bgChange);
    		bbt.addEventListener("click", displayMessage);
    		
    		
    		const bbt2 = document.querySelector(".color2");
    		
    		bbt2.addEventListener("click", function(){
        		let bgc = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
        		document.body.style.backgroundColor = bgc;
        		bbt.removeEventListener("click", bgChange);
    		});
    		
    
    