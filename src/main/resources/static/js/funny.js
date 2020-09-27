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
    let madeAString = myArray.join(' ');
    // returns 'I love chocolate frogs'
    let madeAString = myArray.join(",");
    // returns 'I,love,chocolate,frogs'
    
    
    
    
    