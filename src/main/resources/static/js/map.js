
/*
// 1. The basic part of the example
      var L;

      window.onload = function() {
        L.mapquest.key = '9QqY014kMyWUFUwsG9qGZiNcfgrZlgHe';

        // 'map' refers to a <div> element with the ID map
        var map = L.mapquest.map('map', {
          center: [53.480759, -2.242631],
          layers: L.mapquest.tileLayer('hybrid'),
          zoom: 12
        });
        
        // added to map
        map.addControl(L.mapquest.control({ position: 'bottomright' }));

        map.addControl(L.mapquest.searchControl());
        
        map.addControl(L.mapquest.satelliteControl());
        
        L.marker([53.480759, -2.242631], {
        	  icon: L.mapquest.icons.marker({
        	    primaryColor: '#22407F',
        	    secondaryColor: '#3B5998',
        	    shadow: true,
        	    size: 'md',
        	    symbol: 'A'
        	  })
        	})
        	.bindPopup('This is Manchester!')
        	.addTo(map);
      }
*/
      
      // NY TIMES ARTICLE

      // Defining a baseURL and key to as part of the request URL

      const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
      const key = 'Bj5MCUS0S7CrqEpacHG8O2c0kFVYDF3a';
      let url;

      // Grab references to all the DOM elements you'll need to manipulate

      const searchTerm = document.querySelector('.search');
      const startDate = document.querySelector('.start-date');
      const endDate = document.querySelector('.end-date');
      const searchForm = document.querySelector('form');

      // This is never used
      // const submitBtn = document.querySelector('.submit');

      const nextBtn = document.querySelector('.next');
      const previousBtn = document.querySelector('.prev');

      const section = document.querySelector('section');
      const nav = document.querySelector('nav');

      // Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
       nav.style.display = 'none';

      // define the initial page number and status of the navigation being displayed
      let pageNumber = 0;

      // This is never used
      // let displayNav = false;

      // Event listeners to control the functionality
      searchForm.addEventListener("submit", submitSearch);
      nextBtn.addEventListener("click", nextPage);
      previousBtn.addEventListener("click", previousPage);
      
      function nextPage(e) {
    	  pageNumber++;
    	  fetchResults(e);
    	};

    	function previousPage(e) {
    	  if(pageNumber > 0) {
    	    pageNumber--;
    	  } else {
    	    return;
    	  }
    	  fetchResults(e);
    	};
      
      function submitSearch(e) {
    	  pageNumber = 0;
    	  fetchResults(e);
    	}

    	function fetchResults(e) {
    	  // Use preventDefault() to stop the form submitting
    	  e.preventDefault();

    	  // Assemble the full URL
    	  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';

    	  if(startDate.value !== '') {
    	    url += '&begin_date=' + startDate.value;
    	  };

    	  if(endDate.value !== '') {
    	    url += '&end_date=' + endDate.value;
    	  };
    	  
    	// Use fetch() to make the request to the API
    	  fetch(url).then(function(result) {
    	    return result.json();
    	  }).then(function(json) {
    	    displayResults(json);
    	  });

    	}

    	// Display results
    	function displayResults(json) {
    		  while (section.firstChild) {
    		      section.removeChild(section.firstChild);
    		  }

    		  const articles = json.response.docs;

    		  if(articles.length === 10) {
    		    nav.style.display = 'block';
    		  } else {
    		    nav.style.display = 'none';
    		  }

    		  if(articles.length === 0) {
    		    const para = document.createElement('p');
    		    para.textContent = 'No results returned.'
    		    section.appendChild(para);
    		  } else {
    		    for(var i = 0; i < articles.length; i++) {
    		      const article = document.createElement('article');
    		      const heading = document.createElement('h2');
    		      const link = document.createElement('a');
    		      const img = document.createElement('img');
    		      const para1 = document.createElement('p');
    		      const para2 = document.createElement('p');
    		      const clearfix = document.createElement('div');

    		      let current = articles[i];
    		      console.log(current);

    		      link.href = current.web_url;
    		      link.textContent = current.headline.main;
    		      para1.textContent = current.snippet;
    		      para2.textContent = 'Keywords: ';
    		      for(let j = 0; j < current.keywords.length; j++) {
    		        const span = document.createElement('span');
    		        span.textContent += current.keywords[j].value + ' ';
    		        para2.appendChild(span);
    		      }

    		      if(current.multimedia.length > 0) {
    		        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
    		        img.alt = current.headline.main;
    		      }

    		      clearfix.setAttribute('class','clearfix');

    		      article.appendChild(heading);
    		      heading.appendChild(link);
    		      article.appendChild(img);
    		      article.appendChild(para1);
    		      article.appendChild(para2);
    		      article.appendChild(clearfix);
    		      section.appendChild(article);
    		    }
    		  }
    		}
