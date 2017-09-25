var featureLink = document.querySelector('a.feature.link');
var featureImage = document.querySelector('img.feature');
var featureTitle = document.querySelector('p.feature.title');

function featureLinkHandler(event)
{
	//set the images src value using the href from the link
    featureImage.src = featureLink.href;
    //remove the hidden class
    featureImage.classList.remove('hidden');
    //prevent event from using default action
    event.preventDefault();
    featureImage.alt = featureLink.title;
    console.log(featureImage.alt);
}

function mouseOnImage()
{
	featureTitle.innerHTML = featureImage.alt;
	console.log(featureTitle.innerHTML);
}

function mouseOffImage()
{
	featureTitle.innerHTML = "";
	console.log(featureTitle.innerHTML);
}

featureLink.addEventListener('click', featureLinkHandler);
featureImage.addEventListener("mouseover", mouseOnImage)
featureImage.addEventListener("mouseout", mouseOffImage)

