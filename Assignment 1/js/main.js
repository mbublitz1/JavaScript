// Enter your JavaScript for the solution here...
var heading = document.querySelector('div.editor h2');
var images = document.querySelector('div.editor img');
var paragraph = document.querySelector('div.editor p.tags');
var thumbTarget;
var error = document.querySelector('p.error');

document.querySelector('ul.thumbnails').addEventListener('click', function(thumbEvt)
{
	paragraph.innerHTML = '';
	thumbTarget = thumbEvt.target;
	var parsedSRC = thumbTarget.src.replace('_thumb','');
	images.src = parsedSRC;
	images.alt = thumbTarget.alt;
	images.title = thumbTarget.title;
	heading.innerHTML = thumbTarget.title;
	paragraph.innerHTML = thumbTarget.getAttribute('data-tags');
	error.classList.add('hidden');
});

document.querySelector('section.gallery').addEventListener('submit', function (formEvt)
{
	var formTarget = formEvt.target;
	var tag = formTarget.elements.tag;

	if(tag.value.trim() !== '' && tag.value.indexOf(' ') < 0)
	{
		paragraph.innerHTML += '#' + tag.value + ' ';
		tag.value = '';
		thumbTarget.setAttribute('data-tags', paragraph.innerHTML);
		error.classList.add('hidden');
	}
	else if (tag.value.trim() === '')
	{
		error.classList.remove('hidden');
		error.innerHTML = 'Tags can not be empty';
	}
	else
	{
		error.classList.remove('hidden');
		error.innerHTML = 'Tags can not contain spaces';
		tag.value = '';
	}

	formEvt.preventDefault();
});