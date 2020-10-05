  
function Shape(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
      this.calcPerimeter = function(){
    	  alert("Perimeter of shape " + this.name + " with " + this.sides + " sides is " + (this.sides * this.sideLength));
      }
    }

    // Write your code below here
  	    
  	    let square = new Shape("square", 4, 5);
  	    square.calcPerimeter();
  	    
  	    
  	    
  	    