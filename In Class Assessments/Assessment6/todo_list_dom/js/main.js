/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		todoText,
		spanDownArrow,
		spanUpArrow,
		spanRightArrow,
		spanDnText,
		spanUpText,
		spanRightText,
		dn = '\u21e9',
		up = '\u21e7',
		right = '\u21e8';

	todoText = evt.target.elements['todo-item'].value;
		console.log(todoText);

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);

	spanDownArrow = document.createElement('span');
	spanDnText = document.createTextNode(dn);

	spanUpArrow = document.createElement('span');
	spanUpText = document.createTextNode(up);

	spanRightArrow = document.createElement('span');
	spanRightText = document.createTextNode(right);




	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	spanDownArrow.setAttribute('class', 'arrow dn');
	spanUpArrow.setAttribute('class', 'arrow up');
	spanRightArrow.setAttribute('class', 'arrow right');


	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	spanDownArrow.appendChild(spanDnText);
	div.appendChild(spanDownArrow);

	spanUpArrow.appendChild(spanUpText);
	div.appendChild(spanUpArrow);

	spanRightArrow.appendChild(spanRightText);
	div.appendChild(spanRightArrow);



	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function(evt)
{
	var targetTodo = evt.target.parentNode;
	var todoList = targetTodo.parentNode;
	var siblingTodo;
	console.log(evt.target.parentNode);
	if(evt.target.classList.contains('arrow'))
	{

		if(evt.target.classList.contains('dn'))
		{
			siblingTodo = targetTodo.nextElementSibling;
			todoList.insertBefore(siblingTodo, targetTodo);
			console.log(evt.target.parentNode + 'down...');
		}
		else if (evt.target.classList.contains('up'))
		{
			siblingTodo = targetTodo.previousElementSibling;
			todoList.insertBefore(targetTodo, siblingTodo);
			console.log(evt.target.parentNode +'up....')
		}
		else if (evt.target.classList.contains('right'))
		{
			var confirmRemove = confirm("Are you sure you want to remove this item");

			if(confirmRemove == true)
			{
				todos.removeChild(targetTodo);
			}
		}
	}
});