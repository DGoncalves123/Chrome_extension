
'use strict';


var categories = '';

let select = document.getElementById('category');

window.onload = function () {
	chrome.storage.sync.get('categories', function(data) {
    categories = data.categories;
    console.log('Just got this categories: ',categories);
    for (name in categories){
	    	var option = document.createElement('option');
	        option.text = option.value = categories[name];
	        select.add(option, 0);
	    }
  });
	console.log(categories)
	    
};

