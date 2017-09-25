//1. Select the target element
var featureImage = document.querySelector('img.feature');
//var secondImage = document.querySelector('img.second');


//2. Create the event listener function
function handleFeatureClick()
{
	//remove the hidden class if it is present
	//otherwise add it back
	//console.log('img.feature was clicked');
	var desc = document.querySelector('.feature.description');
	//if(desc.classList.contains('hidden'))
	//{
	//	desc.classList.remove('hidden');
	//}
	//else
	//{
//		desc.classList.add('hidden');
	//}
	if(desc.className.indexOf('hidden') >= 0)
	{
		desc.classList.remove('hidden')
	}
	else
	{
		desc.classList.add('hidden');
	}

}

/*function handleSecondClick()
{
	console.log('img.second was clicked');
	var newImage = document.querySelector('.color');
	newImage.classList.remove('hidden');

}
*/
//3. add event listener
featureImage.addEventListener('click', handleFeatureClick);
//secondImage.addEventListener('click', handleSecondClick);