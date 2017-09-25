// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;

document.querySelector('.carousel>img').src = 'images/'+ images[0];

document.querySelector('.carousel').addEventListener('click', function(evt)
{
	var target = evt.target;
	if(target.classList.contains('control'))
	{
		console.log('control clicked....')
		if (target.classList.contains('next')) {
			if(currentImg < images.length - 1)
			{
				currentImg += 1;
			}
			else
			{
				currentImg = 0;
			}
		}
		else if (target.classList.contains('prev')) {
			if(currentImg > 0)
			{
				currentImg -= 1;
			}
			else
			{
				currentImg = images.length - 1;
			}
		}
		document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
	}
});