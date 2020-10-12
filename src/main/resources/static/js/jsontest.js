    const header = document.querySelector('header');
    const sectionH = document.querySelector('.heroes');

    let request = new XMLHttpRequest();
    
    let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
    	  const superHeroes = request.response;
    	  populateHeader(superHeroes);
    	  showHeroes(superHeroes);
    	}
    	  
    function populateHeader(jsonObj) {
    	  const myH1 = document.createElement('h1');
    	  myH1.textContent = jsonObj['squadName'];
    	  header.appendChild(myH1);

    	  const myPara = document.createElement('p');
    	  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    	  header.appendChild(myPara);
    	}

    
    function showHeroes(jsonObj) {
    	  const heroes = jsonObj['members'];
    	      
    	  for (let i = 0; i < heroes.length; i++) {
    	    const myArticle = document.createElement('article');
    	    const myH2 = document.createElement('h2');
    	    const myPara1 = document.createElement('p');
    	    const myPara2 = document.createElement('p');
    	    const myPara3 = document.createElement('p');
    	    const myList = document.createElement('ul');

    	    myH2.textContent = heroes[i].name;
    	    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    	    myPara2.textContent = 'Age: ' + heroes[i].age;
    	    myPara3.textContent = 'Superpowers:';
    	        
    	    const superPowers = heroes[i].powers;
    	    for (let j = 0; j < superPowers.length; j++) {
    	      const listItem = document.createElement('li');
    	      listItem.textContent = superPowers[j];
    	      myList.appendChild(listItem);
    	    }

    	    myArticle.appendChild(myH2);
    	    myArticle.appendChild(myPara1);
    	    myArticle.appendChild(myPara2);
    	    myArticle.appendChild(myPara3);
    	    myArticle.appendChild(myList);

    	    sectionH.appendChild(myArticle);
    	  }
    	}
    
    
    // CATS TEST YOUR SKILLS
    
    const section = document.querySelector('.cats');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    let motherInfo = 'The mother cats are called ';
    let kittenInfo;

    const catString = {
    		cats: [
    	    	{
    	    	    name : "Lindy",
    	    	    breed : "Cymric",
    	    	    color : "white",
    	    	    kittens : [
    	    	      {
    	    	        name : "Percy",
    	    	        gender : "m"
    	    	      },
    	    	      {
    	    	        name : "Thea",
    	    	        gender : "f"
    	    	      },
    	    	      {
    	    	        name : "Annis",
    	    	        gender : "f"
    	    	      }
    	    	    ]
    	    	},
    	    	{
    	    	    "name" : "Mina",
    	    	    "breed" : "Aphrodite Giant",
    	    	    "color" : "ginger",
    	    	    "kittens" : [
    	    	      {
    	    	        "name" : "Doris",
    	    	        "gender" : "f"
    	    	      },
    	    	      {
    	    	        "name" : "Pickle",
    	    	        "gender" : "f"
    	    	      },
    	    	      {
    	    	        "name" : "Max",
    	    	        "gender" : "m"
    	    	      }
    	    	    ]
    	    	 },
    	    	  {
    	    	    "name" : "Antonia",
    	    	    "breed" : "Ocicat",
    	    	    "color" : "leopard spotted",
    	    	    "kittens" : [
    	    	      {
    	    	        "name" : "Bridget",
    	    	        "gender" : "f"
    	    	      },
    	    	      {
    	    	        "name" : "Randolph",
    	    	        "gender" : "m"
    	    	      }
    	    	    ]
    	    	  }
    	    	]	
    };

    function displayCatInfo(catString) {
      let total = 0;
      let male = 0;

      // Add your code here
        //  const cats = JSON.parse(catString); // convert it to an object
       const cats = catString;
          
    	  for (let i = 0; i < cats.length; i++) {
      	  
    		  motherInfo += cats.cats[i].name;
    		  
    		  if(i == (cats.length - 1)){
    			  motherInfo += ".";
    		  } else if (i == (cats.length - 2)){
    			  motherInfo += " and ";
    		  } else {
    			  motherInfo += ", ";
    		  }

      	    const kittens = cats[i].kittens;
      	    for (let j = 0; j < kittens.length; j++) {
    		total++;
                    if(kittens[j].gender === "m"){
                       male++;
                      }
      	    }
           }

            let female = total - male;
           kittenInfo = "Total number of kittens: " + total + ", male: " + male + ", female: " + female;
    // Don't edit the code below here!

      para1.textContent = motherInfo;
      para2.textContent = kittenInfo;
    }

    section.appendChild(para1);
    section.appendChild(para2);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  	    