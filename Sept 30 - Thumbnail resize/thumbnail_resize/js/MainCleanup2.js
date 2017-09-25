// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

//Code Cleanup - these declarations can be removed by selecting parent target element see event at bottom
//Select the target elements
//var liSm = document.querySelector('.thumbnails-sm'); //periods are needed because these are class names
//var liMd = document.querySelector('.thumbnails-md'); //periods are needed because these are class names
//var liLg = document.querySelector('.thumbnails-lg'); //periods are needed because these are class names

// function thumbnailSizeHandler(evt)
// {
// 	var target = evt.target;
// 	console.log(target);
// 	var thumbnails = document.querySelector('div.thumbnails');

// 	//Use what's already known in the HTML to build the class name we want
// 	if (target.tagName == 'LI' && !target.classList.contains('active')) 
// 	{
// 		//Update the active li
// 		//If the active class is on something other than our target li, remove it
// 		//add active class to our target li
// 		document.querySelector('li.active').classList.remove('active');
// 		target.classList.add('active');

// 		//Use what's already known in the HTML to build the class name we want
// 		var newClassName = 'thumbnails ';
// 		newClassName = newClassName + target.className[11] + target.className[12];
// 		console.log(newClassName)
// 		thumbnails.className = newClassName;
// 	}

	//Replaces all the if/else statements below


	//target is the li the user clicks
	//if a li they didn't click contains active remove it
	//and move active to the li they did click
	/*if(!target.classList.contains('active'))
	{
		//update the active li
		document.querySelector('li.active').classList.remove('active');
		target.classList.add('active');
	}

	//if the user click on Small button remove others and add sm
	if (target.classList.contains('thumbnails-sm')) 
	{
		thumbnails.classList.remove('md');
		thumbnails.classList.remove('lg');
		thumbnails.classList.add('sm');
	//if user clicked on the med button	remove others and add md
	} else if (target.classList.contains('thumbnails-md'))
	{
		thumbnails.classList.remove('sm');
		thumbnails.classList.remove('lg');
		thumbnails.classList.add('md');
	  //if user clieck on the large button remove others and add lg
	} else
	{
		thumbnails.classList.remove('sm');
		thumbnails.classList.remove('md');
		thumbnails.classList.add('lg');
	}*/

// }

//These event listeners can be removed and rolled into one line, see bottom of page
/*liSm.addEventListener('click', thumbnailSizeHandler);
liMd.addEventListener('click', thumbnailSizeHandler);
liLg.addEventListener('click', thumbnailSizeHandler);*/

//document.querySelector('ul.thumbnail-sizes').addEventListener('click', thumbnailSizeHandler)

//convert to an anonyomus function
document.querySelector('ul.thumbnail-sizes').addEventListener('click', function(evt)
{
	var target = evt.target;
	//var thumbnails = document.querySelector('div.thumbnails');
	console.log(target);
	var thumbnails = document.querySelector('div.thumbnails');

	//Use what's already known in the HTML to build the class name we want
	if (target.tagName == 'LI' && !target.classList.contains('active')) 
	{
		//Update the active li
		//If the active class is on something other than our target li, remove it
		//add active class to our target li
		document.querySelector('li.active').classList.remove('active');
		target.classList.add('active');

		//replaces declaration on line 80 and lines 97 to 100 can be removed
		document.querySelector('div.thumbnails').className = 'thumbnails ' + target.className[11] + target.className[12];
	}
		//Use what's already known in the HTML to build the class name we want
/*		var newClassName = 'thumbnails ';
		newClassName = newClassName + target.className[11] + target.className[12];
		console.log(newClassName)
		thumbnails.className = newClassName;*/

})