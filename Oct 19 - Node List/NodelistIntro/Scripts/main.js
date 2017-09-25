var select = document.querySelector('.items')


select.addEventListener('change', function (evt)
{
	//create a list depending on the number of list items the user selects
	var numOfItems = evt.target.value;
	var list = '<ul>';
	var count;

	for (count = 0; count < numOfItems; count++)
	{
		list = list + '<li>' + '<input type="checkbox"/>' + '<label contenteditable>ToDo Item' + (count + 1) + '</label>' + '</li>';
	}

    list = list + '</ul>';

    document.querySelector('.todo-list').innerHTML = list;
 });

console.log(document.querySelectorAll('p')); // will display info on all nodes
var paraNodeList = document.querySelectorAll('p');
console.log(paraNodeList[2]); //will select node at second index
console.log(paraNodeList.length); //shows number of elements in node list
