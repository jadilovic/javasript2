  
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
    
    const section = document.querySelector("section");
    
    let cat = {
  		  name : 'Bertie',
  		  breed : 'Cymric',
  		  color : 'white',
  		  greeting: function() {
  		    console.log('Meow!');
  		  }
  		}

  		// Put your code here
    	let catName = cat.name;
 
    
cat.color = "black";

cat.greeting();

  		// Don't edit the code below here

  		let para1 = document.createElement('p');
  		let para2 = document.createElement('p');

  		para1.textContent = `The cat's name is ${ catName }.`;
  		para2.textContent = `The cat's color is ${ cat.color }.`;

  		section.appendChild(para1);
  		section.appendChild(para2);