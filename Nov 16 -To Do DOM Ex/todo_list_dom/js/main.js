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
		spanDnText,
		spanUpText,
		dn = '\u21e9',
		up = '\u21e7';

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



	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	spanDownArrow.setAttribute('class', 'arrow dn');
	spanUpArrow.setAttribute('class', 'arrow up');


	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	spanDownArrow.appendChild(spanDnText);
	div.appendChild(spanDownArrow);
	spanUpArrow.appendChild(spanUpText);
	div.appendChild(spanUpArrow);



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
	if(evt.target.classList.contains('arrow'))
	{

		if (evt.target.classList.contains('dn')) {
            if (targetTodo.nextElementSibling)
            {
            	siblingTodo = targetTodo.nextElementSibling;
            	todoList.insertBefore(siblingTodo, targetTodo);
            	console.log(evt.target.parentNode + 'down...');
        	}
        	else
			{
				console.log('last element')
				targetTodo.insertBefore(todoList.firstChild, targetTodo);
			}
		}
		else if (evt.target.classList.contains('up')) {

			siblingTodo = targetTodo.previousElementSibling;
			todoList.insertBefore(targetTodo, siblingTodo);
			console.log(evt.target.parentNode + 'up....')
		}
	}
});


