// 1. select the target element
var featureImage = document.querySelector('img.feature');
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function handleFeatureClick() {
	console.log('img.feature was clicked...');
	var desc = document.querySelector('.feature.description');
	desc.classList.toggle('hidden');
}

function handleFeatureLinkClick(event) {
	console.log('a.feature.link was clicked...');
	//set img.feature src
	featureImage.src = featureLink.href;
	//make the image visible
	featureImage.classList.toggle('hidden');
	event.preventDefault();
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);
featureLink.addEventListener('click', handleFeatureLinkClick);














