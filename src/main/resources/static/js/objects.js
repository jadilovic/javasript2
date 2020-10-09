  
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
  	    
  	    let square2 = Object.create(square);
  	    
  	    let square3 = new square2.constructor("kocka", 2, 3);
  	    
  	    
  	    // CREATING OBJECTS 
  	    
    	  function Person(first, last, age, gender, interests) {
    		  this.name = {
    				  first: first,
    				  last: last
    		  		},
    		  this.age = age,
    		  this.gender = gender,
    		  this.interests = interests,
    		  this.bio = function(){
    			  let heshe = (this.gender === "male") ? "he" : "she";
    			  let interestsList = "";
    			  for(let i = 0; i < interests.length; i++){
    				  if(i === (interests.length - 2)){
    	  				  interestsList += interests[i] + " and ";
    				  } else if (i === (interests.length - 1)){
    	  				  interestsList += interests[i] + ".";
    				  } else {
    	  				  interestsList += interests[i] + ", ";
    				  }
    			  }
    			  alert(this.name.first + " is " + this.age + " years old and " + heshe + " has interests " + interestsList);
    		  }
    		  this.greeting = function() {
    		    alert('Hi! I\'m ' + this.name.first + '.');
    		  }
    		}
    	  
    	  Person.prototype.farewell = function(){
    		  alert(this.name.first + " has left the building");
    	  }
  	    
    	  let person = new Person("Jasmin", "Adilovic", 42, "male", ["golf", "skiing", "singing"]);
    	  
    	  
    	  // INHERITANCE OBJECTS
    	  
    	  function Individual(first, last, age, gender, interests) {
    		  this.name = {
    		    first,
    		    last
    		  };
    		  this.age = age;
    		  this.gender = gender;
    		  this.interests = interests;
    		};
    		
    		Individual.prototype.greeting = function() {
    			  alert('Hi! I\'m ' + this.name.first + '.');
    			};
    			
    	
    	function Teacher(first, last, age, gender, interests, subject) {
    				  Individual.call(this, first, last, age, gender, interests);

    				  this.subject = subject;
    				}	
    	
    	Teacher.prototype = Object.create(Individual.prototype);
    	
    	Object.defineProperty(Teacher.prototype, "constructor", {
    		value: Teacher,
    		enumerable: false,
    		writable: true
    	});
    	
    	Teacher.prototype.greeting = function() {
    		  let prefix;

    		  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    		    prefix = 'Mr.';
    		  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    		    prefix = 'Ms.';
    		  } else {
    		    prefix = 'Mx.';
    		  }

    		  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
    		};
    		
    		
    		function Student(first, last, age, gender, interests){
    			Person.call(this, first, last, age, gender, interests);
    		}
    		
    		Student.prototype = Object.create(Person.prototype);
    		
    		Object.defineProperty(Student.prototype, "constructor", {
        		value: Student,
        		enumerable: false,
        		writable: true
    		});
    		
    		Student.prototype.greeting = function(){
    			alert("Yo, I am " + this.name.first);
    		}
    		
    		Student.prototype.farewell = function(){
    			alert("Goodby mutherfucker, I am " + this.name.first);
    		}
    			
    	function Brick(){
    		this.width = 10;
    		this.height = 20;
    	}
    			
    	function BrickBlueKind(){
    		Brick.call(this);
    		this.color = "blue";
    		this.opacity = 0.5;
    	}		
    			
    class Man {
    	constructor(first, last, age, gender, interests){
    		this.name = {
    				first,
    				last
    		    };
    		this.age = age;
    		this.gender = gender;
    		this.interests = interests;
    	}
    	
    	greeting(){
    		console.log("Hi from Man Class, I am " + this.name.first);
    	}
    	
    	farewell(){
    		console.log(`${this.name.last} has left the building`);
    	}
    }			
    		
    	  
    	  
  	    