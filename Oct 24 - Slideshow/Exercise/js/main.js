// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function (evt)
{
	//console.log('toggle changed...');
	var checks = document.querySelectorAll('[name=message]');
	//console.log(checks);

	var idx = 0;

	while (idx < checks.length)
	{
		if(evt.target.checked)
		{
			checks[idx].checked = true;
		}
		else
		{
			checks[idx].checked = false;
		}

		idx = idx + 1;
	}
});

// document.querySelector('form').addEventListener('submit', function (formEvt) 
// {
// 	console.log("Search button clicked");
// 	var checks = document.querySelectorAll('[name=message]');
// 	var searchText = document.querySelector('[name=searchText');
// 	var text = document.querySelectorAll('tbody tr');
// 	console.log(text);
// 	var idx = 0;


// 	while(idx < text.length)
// 	{
// 		if (text[idx].innerHTML.toUpperCase().indexOf(searchText.value.toUpperCase()) >= 0)
// 		{
// 			text[idx].classList.add('highlight');
// 		}
// 		else
// 		{
// 			text[idx].classList.remove('highlight');
// 		}

// 		idx = idx + 1;
// 	}

// 	formEvt.preventDefault('');

// });

//add an event listener to the form, and if the user value contains a value that matches the messag - highlight the message
document.querySelector('form').addEventListener('submit', function (evt) 
{
 	//need 2 things to compare
 	//	- the value the user eneters
 	//	- list of nodes
 	// The value from the user
 	var searchValue = evt.target.elements.searchText.value;
 	//grab the list of nodes
 		console.log(list);
 	//if 2 values are comparable
 		//- add highlight to tr
 	var list = document.querySelectorAll('tr');

 	console.log(searchValue);

 	//Loop thorough our nodelist(tr.innerHTML) and compare to search value
 	for (var i = 0; i < list.length; i++) {
 		//if tr.innerHTML = search value
 			//highlight
 		//else
 			//remove highlight
 		if(list[i].textContent.toLowerCase().includes(searchValue.toLowerCase()))
 		{
 			//highlight
 			list[i].classList.add('highlight');

 		}
 		else
 		{
 			//remove highlight
 			list[i].classList.remove('highlight');
 		}
 	}
 	document.querySelector('[type=text]').value = '';
 	evt.preventDefault();
});
