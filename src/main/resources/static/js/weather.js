
const select = document.querySelector("select");
const para = document.querySelector(".para");

select.addEventListener("change", setWeather);

function setWeather(){
	
	const choice = select.value;
	
	  switch (choice) {
	  case "sunny": 
		  para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
		  break;
	  case "rainy":
		    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
		  break;
	  case "snowning":
		    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
		  break;
	  case "overcast":
		    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
		  break;
	  default:
		    para.textContent = '';
	  }
}

let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

let shoppingDone = false;
let childsAllowance;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance);

