// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;

//displays the current image
document.querySelector('.carousel>img').src = 'images/'+ images[0];

//add the appropriate number of selector bullets
for(idx = 0; idx < images.length; idx++)
{
	document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

//Highligh the first bullet as 'active'
document.querySelector('.image-tracker span').classList.add('active');

document.querySelector('.carousel').addEventListener('click', function(evt)
{
	var target = evt.target;

	//grab both the arrows and the bullets
	if(target.classList.contains('control') || target.hasAttribute('data-idx'))
	{
		console.log('control clicked....')
		if (target.classList.contains('next')) {
			//currentImg += 1;
			currentImg = parseFloat(currentImg) + 1
			if(currentImg >= images.length)
			{
				currentImg = 0;
			}
		}
		else if (target.classList.contains('prev')) {

			currentImg -= 1;
			if(currentImg < 0)
			{
				currentImg = images.length - 1;
			}
		} 
		else
		{
			//Selector bullet clicked
			currentImg = target.dataset.idx
		}
		//use universal function
		changeImage(currentImg);
	}
});

//add a keypressed event listener for left/right navigation
document.addEventListener('keydown', function(evt)
{
	var click;
	switch(evt.keyCode)
	{
		case 39:
			//right arrow, trigger .next click
			click = document.createEvent('HTMLEvents');
			click.initEvent('click', true, true);
			document.querySelector('.carousel .control.next').dispatchEvent(click);
			break;
		case 37:
			//left arrow, trigger .prev click
			click = document.createEvent('HTMLEvents');
			click.initEvent('click', true, true);
			document.querySelector('.carousel .control.prev').dispatchEvent(click);
			break;
	}
});

function changeImage(index)
{
			//display the new current image
		document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

		//update the active selector bullet
		document.querySelector('.image-tracker .active').classList.remove('active');
		document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');


}