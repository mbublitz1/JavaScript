// Enter your JavaScript for the solution here...
var current = document.querySelector('.thumbnails img');

document.querySelector('ul.thumbnails').addEventListener('click', function(evt){
	var target = evt.target;

	if(target.tagName == 'IMG' && current != target)
	{
		//tracking the currently selected image
		current = target;

		var title = document.querySelector('.editor .title');
		var image = document.querySelector('.editor img');
		var tags = document.querySelector('.editor .tags');

		//load the data
		title.innerHTML = target.title;
		image.title = target.title;
		image.alt = target.alt;
		image.src = target.src.replace('_thumb', '');
		//another option to above
		//image.src = 'image/' + toLowerCase(target.alt) + '.png;'

		//if there are tags, display them
		if(target.dataset.tags)
		{
			tags.innerHTML = target.dataset.tags;
		}
	}

});

document.querySelector('.editor form').addEventListener('submit', function(evt)
{
	var form = evt.target;

	//validate the tag field
	if(form.elements.tag.value.trim() == '' || form.elements.tag.value.trim().indexOf(' ') != -1)
	{
		var error = document.querySelector('.editor .error');
		error.innerHTML = 'Tags cannot be empty or contain spaces';
		error.classList.remove('hidden');
	} 
	else
	{
		//all is good, add the tag
		document.querySelector('.editor .tags').innerHTML += '#' + form.elements.tag.value.trim() + ' ';
		current.dataset.tags += '#' + form.elements.tags.value.trim() + ' ';

		document.querySelector('.editor input[name=tag]').value = ' ';
		docuement.querySelector('.editor .error').innerHTML = '' 
		error.innerHTML = '';
		error.classList.add('hidden');
	}

	evt.preventDefault();
});

function cleanUp()
{
		document.querySelector('.editor input[name=tag]').value = ' ';
		document.querySelector('.editor .error').innerHTML = '' 
		document.querySelector('.editor .error').error.classList.add('hidden');
}
