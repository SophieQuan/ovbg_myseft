// if anywhere in the map is clicked the dropdown will close
	MAP_SVG.addEventListener('click', function(e) {
		DROP_DOWN_ITEM_START.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			if (item.value !== 0) {
				item.classList.add('hidden');
			} else {
				item.classList.remove('hidden');
			}
      document.querySelector('.endPoint').classList.toggle('hidden');			

    });

    DROP_DOWN_ITEM_END.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			if (item.value !== 0) {
				item.classList.add('hidden');
			} else {
				item.classList.remove('hidden');
			}
      // Reset dropdown text value to select destination
    document.querySelector('.endPoint').classList.toggle('hidden');
    
    });
    
    PATH_FINDER.classList.add('hidden');
  });
  
  TOP_BAR.addEventListener('click', function() {
    // this.classList.toggle('hidden');
    PATH_FINDER.classList.toggle('hidden');

    document.querySelector('.placeholder-start').textContent = `${LOCATIONS[id + 1]}`;
  });

	// Create event listener on drop down menu
	DROP_DOWN_START.addEventListener('click', function() {
    // Hide the endpoint select
    document.querySelector('.endPoint').classList.toggle('hidden');
		// Loop through the elements in the drop down and add event listeners to them
		DROP_DOWN_ITEM_START.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			item.classList.toggle('hidden');
      
			// Add the event listener to the item
			item.addEventListener('click', function() {
        // will set destination location based item in dropdown being selected
				if (item.value !== 0) {
          id = item.value;
        }
        
				// Upon clicking an item in the list set the displayed text to the selected location name
				document.querySelector('.placeholder-start').textContent = `${LOCATIONS[item.value]}`;
			});
		});
  });

  	// Create event listener on drop down menu
	DROP_DOWN_END.addEventListener('click', function() {
		// Loop through the elements in the drop down and add event listeners to them
		DROP_DOWN_ITEM_END.forEach(item => {
			// toggle the hidden class on each item in the list (unhiding them)
			item.classList.toggle('hidden');

			// Add the event listener to the item
			item.addEventListener('click', function() {
				// will set destination location based item in dropdown being selected
				if (item.value !== 0) {
          // pathZoomIn(item.value - 1);
          destination = item.value - 1;
				}
				// Upon clicking an item in the list set the displayed text to the selected location name
        document.querySelector('.placeholder-end').textContent = `${LOCATIONS[item.value]}`;
        // TOP_BAR.classList.toggle('hidden');
        // PATH_FINDER.classList.toggle('hidden');
			});
		});
  });

  GO_BTN.addEventListener('click', function() {
    pathZoomIn(destination);
    PATH_FINDER.classList.add('hidden');
  });
