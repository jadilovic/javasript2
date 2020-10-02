
let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    function drawCircle(x, y, size) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    let x = 50;
    let y = 15;
    const size = 30;

    drawCircle(x, y, size);
    
    window.addEventListener("keydown", function(event) {
    	  let str = event.key.toLowerCase();
    	  if(str === "w"){
    		  y--;
    	  } else if(str === "s"){
    		  y++;
    	  } else if(str === "a"){
    		  x--;
    	  } else if(str === "d"){
    		  x++;
    	  } else {
    		  alert("Use WASD keys only");
    	  }
    	    drawCircle(x, y, size);
    	}, true);


    
    document.getElementById('buttonId').addEventListener('click', function(){
    	console.log('Clicked!')
    });
    
    
    const buttons = document.getElementsByClassName('buttonClass');
    
    for (const button of buttons) {
      button.addEventListener('click', () => console.log('Clicked!'));
    }

    
    // Events 3
    
    let docs = document.querySelector(".button-bar");
    docs.addEventListener('click', event => {
    let target = event.target.getAttribute("data-color");
    	docs.style.backgroundColor = target;
    });