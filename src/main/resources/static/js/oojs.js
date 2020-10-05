  
    // OBJECT ORIENTED EXERCISE
    
    const person = {
    		name: {
    			first: "Jasmin", 
    			last: "Adilovic"
    			},
    		age: 32,
    		gender: "male",
    		interests: ["music", "skiing"],
    		bio: function(){
    			alert(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. He likes " + this.interests[0] + " and " + this.interests[1]);
    		},
    		greeting: function(){
    			alert("Hi, I am " + this.name[0]);
    		}
    	};
    

    let myDataName = "height";
    let myDataValue = 1.75;
    person[myDataName] = myDataValue;
    
    
    // OBJECT BASICS
    
    const section = document.querySelector(".section1");
    
    let cat = {
  		  name : 'Bertie',
  		  breed : 'Cymric',
  		  color : 'white',
  		  greeting: function() {
  		    console.log('Hello said ' + this.name + " the " + this.breed);
  		  }
  		}

  		// Put your code here
    	let catName = cat["name"];
 
    
cat.color = "black";

let cat2 = {
		  name : 'Bety',
		  breed : 'Siamic',
		  color : 'yellow',
		  greeting: function() {
		    console.log('Hello said ' + this.name + " the " + this.breed);
		  }
		}

function Animal(name, breed, color){
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.greeting = function(){
		console.log('Hello said ' + this.name + " the " + this.breed);
	}
}

const cat3 = new Animal("Cici", "Tiger", "Green");

cat3.greeting();

cat.greeting();
cat2.greeting();


let cats = [];
cats.push(cat);
cats.push(cat2);

cats[0].greeting();


  		// Don't edit the code below here

  		let para1 = document.createElement('p');
  		let para2 = document.createElement('p');

  		para1.textContent = `The cat's name is ${ catName }.`;
  		para2.textContent = `The cat's color is ${ cat.color }.`;

  		section.appendChild(para1);
  		section.appendChild(para2);
  		
  		
  		// SECOND ASSIGNMENT OBJECTS
  		
  	    const section2 = document.querySelector(".section2");
  	    
  	    let para = document.createElement("p");
  	    
  	    let band1 = {
  	    		name: "Oasis",
  	    		nationality: "Britain",
  	    		genre: ["alternative", "rock", "punk"],
  	    		members: 5,
  	    		formed: 1994,
  	    		split: false,
  	    		albums: [
  	    			{name: "Blue", released: 1999},
  	    			{name: "Red", released: 2009},
  	    			{name: "Yellow", released: 2019}
  	    			]
  	    		}
  	    let active = (band1.split === false) ? (new Date().getFullYear() - band1.formed) : (band1.split - band1.formed);
  	    
  	    let bandInfo = band1.name + " is from " + band1.nationality + " and active " + active + " and style " + 
  	    				band1.genre[0] + " and frist album was " + band1.albums[0]["name"] + " released in " + 
  	    				band1.albums[0]["released"];
  	    
  	    para.textContent = bandInfo;
  	    section2.appendChild(para);
  	   
  	    
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
  	  
  	    let person1 = new Person("Mark", "Cucker", 55, "male", ['ball', 'softball', 'rugdby']);
  	    let person2 = new Person("Bob", "Muker", 55, "female", ['ball']);
  	    let person3 = new Person("Chirs", "Fucker", 55, false, ['ball', 'softball']);
  	    let person4 = new Person("Veli", "Budala", 55, "male", ['ball', 'softball', 'rugdby', 'tenis', 'mlatis']);
  	    let person6 = new Person("Bob", "Muker", 55, "female", []);
  	    let person5 = new Person("Mark");
  	    
  	    
  	    let person7 = new Object();
  	    
  	    person7.name = "Aki";
  	    person7["age"] = 42;
  	    person7.greeting = function(){
  	    	alert("Hi, my name is " + this.name);
  	    }
  	    
  	    
  	    let person8 = Object.create(person7);
  	    
  	    
  	    
  	    
  	    
  	    
  	    
  	    
  	    