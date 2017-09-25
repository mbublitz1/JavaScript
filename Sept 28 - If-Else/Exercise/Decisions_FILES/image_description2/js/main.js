var featureLink = document.querySelector('a.feature');
var linkHide = 'Hide Barcelona';
var linkView = 'View Barcelona';

function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    //if(featureImage.classList.contains('hidden') == true)
    if(featureLink.innerHTML == linkView)
    {
    	featureImage.src = featureLink.href;
    	featureImage.classList.remove('hidden');
    	featureLink.innerHTML = linkHide;
	} 
	else
	{
		featureImage.src = '';
		featureImage.classList.add('hidden');
		featureLink.innerHTML = linkView;
	}

    evt.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);