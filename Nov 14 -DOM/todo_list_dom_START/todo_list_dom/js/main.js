/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

//required variables
var todo = document.querySelector('.todo-list');
var todoCount = 0;

document.querySelector('form').addEventListener('submit', function (evt)
{
	var div, 
		checkBox,
		label,
		labelText,
		todoText;

	todoText = evt.target.elements['todo-item'].value;

	//adding a todo item regardless, so increment now...
	todoCount += 1;

	if(todoText === '')
	{
		todoText = 'Todo' + (todoCount);
	}

	//create required elements
	div = document.createElement('div');
	checkBox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);

	//set attributes
	checkBox.setAttribute('type', 'checkBox');
	checkBox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');

	//build document fragment
	label.appendChild(labelText);
	div.appendChild(checkBox);
	div.appendChild(label);

	//add the doucment fragment to the document
	todo.appendChild(div);

	//clear the form
	evt.target.reset();

	evt.preventDefault();
});