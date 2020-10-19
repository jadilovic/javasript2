  
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
    	
    class Trucker extends Man{
    	constructor(first, last, age, gender, interests, subject, grade){
        	super(first, last, age, gender, interests);
        	this.subject = subject;
        	this.grade = grade;
    	}
    }
    	  
    class Driver extends Man{
    	constructor(first, last, age, gender, interests, subject, grade){
        	super(first, last, age, gender, interests);
        	this._subject = subject;
        	this.grade = grade;
    	}
    	
    	set subject(newSubject){
    		this._subject = newSubject;
    	}
    	
    	get subject(){
    		return this._subject;
    	}
    }
    
    let drv = new Driver("bobo", "dodo", 55, "female", ["woods", "moods"], "maths", 4);

    
 // Check the default value
    console.log(drv.subject) // Returns "Dark arts"

    // Change the value
    drv.subject = "Balloon animals" // Sets _subject to "Balloon animals"

    // Check it again and see if it matches the new value
    console.log(drv.subject) // Returns "Balloon animals"
    
    
    // Using ES class syntax
    
    class ShapeES {
    	constructor(name, sides, sideLength){
    	      this.name = name;
    	      this.sides = sides;
    	      this.sideLength = sideLength;
    	}

    	calcPerimeter(){
    			alert("Perimeter of shape " + this.name + " with " + this.sides + " sides is " + (this.sides * this.sideLength));
    		}
    }
    
    class Square extends ShapeES {
    	constructor(sideLength){
    		super("square", 4, sideLength);
    	}
    	
    	calcArea(){
			alert(`Area of shape ${this.name} with ${this.sides} sides is ${Math.pow(this.sides, 2)}`);
    	}
    }
    
    	  
    const btn = document.querySelector(".press");
    
    btn.addEventListener("click", () => {
    	let myDate;
    	for(let i = 0; i < 10000000; i++){
    		let date = new Date();
    		myDate = date;
    	}
    	
    	console.log(myDate);
    	let pElm = document.createElement("p");
    	pElm.textContent = "This is newly added paragraph.";
    	document.body.appendChild(pElm);
    });
    
    
    const canvas = document.querySelector("canvas");
    
    const ctx = canvas.getContext("2D");
    
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    const fillBtn = document.querySelector(".fillBtn");
    
    const alertBtn = document.querySelector(".alertBtn");
    
    const color = "red";
    
    function expensiveOperation(color){
    	let date;
    	for(let i = 0; i < 10000000; i++){
    		date = new Date();
    	}
    	alert(date);
    }
    
    
    fillBtn.addEventListener("click", expensiveOperation);
    
    alertBtn.addEventListener("click", function(){
    	alert("Alert is activated");
    })
    
    
    // Async example
    
    const wbtn = document.querySelector(".workerBtn");
    
    const worker = new Worker("worker.js");
    
    wbtn.addEventListener("click", () => {
    	worker.postMessage("Go!");
        
        let pElem = document.createElement("p");
        pElem.textContent = "This is newly added paragraph";
        
        document.body.appendChild(pElem);
    });

    worker.onmessage = function(e){
    	console.log(e.data);
    }
    
    
    const btnNew = document.querySelector(".work");
    
    btnNew.addEventListener("click", () => {
    	alert("You clicked worker button");
        
        let ppelem = document.createElement("p");
        ppelem.textContent = "Added paragrap with text";
       document.body.appendChild(ppelem);
    });

    
    // Simple XHR async callback example
    
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

      loadAsset('images/coffee.jpg', 'blob', displayImage);
    
    
      // Simple forEach example
      
    let gods = ["Ateon", "Peteon", "Driteon", "Zeus"];
        
    gods.forEach(function(eachName, index){
    	console.log(index + ", " + eachName);
        const listOfGods = document.createElement("p");
    	listOfGods.textContent = index + ": " + eachName;
    	document.body.appendChild(listOfGods);
        loadAsset('images/coffee.jpg', 'blob', displayImage);
    });
    
    
    let fruits = ["Apple", "Peach", "Greape", "Strawberry"];
    
    fruits.forEach(eachFunction);
    
    function eachFunction(item, index){
    	document.getElementById("demo").innerHTML += index + ": " + item + "<br>";
    }
    
    
    // The nature of asynchronous code
    
    console.log("Starting");
    
    let image;
    
    fetch("images/coffee.jpg").then((response) => {
    	console.log("It worked :)");
    	return response.blob();
    }).then((myBlob) => {
    	let objectURL = URL.createObjectURL(myBlob);
    	image = document.createElement("img");
    	image.src = objectURL;
    	document.body.appendChild(image);
    }).catch((error) => {
    	console.log("There has been problem with your fetch opeartion: " + error.message);
    });
    
    console.log("All done");
    
    
    
    
    
  	    