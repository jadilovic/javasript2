  
    // IMAGE GALLERY EXERCISE
    
    const displayedImage = document.querySelector('.displayed-img');
    const displayedImage2 = document.querySelector('.displayed-img2');

    const thumbBar = document.querySelector('.thumb-bar');
    const thumbBar2 = document.querySelector('.thumb-bar2');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Looping through images */

        for(let i = 1; i <= 5; i++) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', 'images/pic' + i + '.jpg');
            thumbBar.appendChild(newImage);
            newImage.onclick = function(e) {
              displayedImage.src = e.target.src;
            }
          }

        /* Looping through images 2*/

        for(let i = 1; i <= 5; i++) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', 'images/pic' + i + '.jpg');
            thumbBar2.appendChild(newImage);
            newImage.onclick = function(e) {
              displayedImage2.src = e.target.src;
            }
          }
        
        
    /* Wiring up the Darken/Lighten button */

    btn.onclick = function() {
      const btnClass = btn.getAttribute('class');
      if(btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }


    