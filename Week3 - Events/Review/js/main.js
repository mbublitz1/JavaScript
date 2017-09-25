var featureLink = document.querySelector('a.feature.link');

function featureLinkHandler(event)
{
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.toggle('hidden');
    event.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);