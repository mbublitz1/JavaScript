// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.
document.querySelector('.feature.frm').addEventListener('submit', function(evt) 
{
	var frm = evt.target;
	var tag = frm.elements.tag;
	var error = document.querySelector('p.feature.error');

	if (tag.value.trim() !== '')
	{
		if(tag.value.trim().indexOf(' ') <= 0)
		{
			document.querySelector('p.feature.tags').innerHTML += '#' + tag.value + ' ';
			console.log(tag.value.trim().indexOf(' '));

			tag.value = '';
			error.classList.add('hidden');
		}
		else
		{
			error.classList.remove('hidden')
			error.innerHTML = "</br> Tag can not contain spaces";
		}
	}
	else if (tag.value.trim() ==='')
	{
		console.log('in the else if');
		error.classList.remove('hidden');
		error.innerHTML = "</br> Tags can not be empty";
	}
	else
	{
		error.classList.remove('hidden');
	}

	console.log('Form submitted....');
	evt.preventDefault();
});