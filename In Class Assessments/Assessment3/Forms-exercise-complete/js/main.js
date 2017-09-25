// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

document.querySelector('.feature.frm').addEventListener('submit', function(event){
	var form = event.target;
	var tag = form.elements.tag;
	var error = document.querySelector('p.feature.error');

	// ensure that the value isn't empty AND has no spaces
	// index.Of('') will look for a space in the string, if it finds a space it will return the index number of that space (starting at zero), if no space is found it returns a -1
	if (tag.value.trim() != '' && tag.value.indexOf(' ') < 0 ){
		// all is good, add tag to list of tags, clear the tag value, and remove the error
		document.querySelector('p.feature.tags').innerHTML += '#' + tag.value + ' ';
		tag.value = '';
		error.classList.add('hidden');
	} else if (tag.value.trim() == '') {
		// else if the value is empty, show error and alter the HTML back in case it previously went through the last else statement
		error.classList.remove('hidden');
		error.innerHTML = 'Tags cannot be empty';
	} else {
		// by default the last else is if there are spaces, show error and change the error innerHTML content
		error.classList.remove('hidden');
		error.innerHTML = 'Tags cannot contain spaces';
		tag.value = '';
	}

	event.preventDefault();
})