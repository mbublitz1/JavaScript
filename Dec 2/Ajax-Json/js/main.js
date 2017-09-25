//At present, you will have to call the getFriends() function in the console.

//1. Update the renderFriends function to use DOM API vs .innderHTML string
//2. Add a button (or some other control) to the page for triggering the getFriends() function
//3. Add some additional properties to the JSON data filed for each friend(ie. photURL, hometown, etc)

//show friends
var div,
	headingRow,
	headingContent,
	nameRow,
	nameContent,
	emailRow,
	emailContent;

function renderFriends(friends) 
{
	var display = document.querySelector('.friends');
	var output = 'Friends';

	var index;
	
	div = document.createElement('div');
	nameRow = document.createElement('h1');
	nameContent = document.createTextNode(output);
	nameRow.appendChild(nameContent);
	div.appendChild(nameRow);

	//render each friend in the array
	for (var index = 0; index < friends.length; index++)
	{

		headingRow = document.createElement('h2');
		headingContent = document.createTextNode(friends[index].firstName + ' ' + friends[index].lastName)

		emailRow = document.createElement('p');
		emailContent = document.createTextNode(friends[index].email)

		div.setAttribute('class', 'friend');

		headingRow.appendChild(headingContent);
		div.appendChild(headingRow);

		emailRow.appendChild(emailContent);
		div.appendChild(emailRow);

		display.appendChild(div);
	}


}
function getFriends()
{
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'data/friend_data.json', true);

	xhr.addEventListener('load', function()
	{
		if(xhr.status == 200)
		{
			//good status get response
			renderFriends(JSON.parse(xhr.response));
		}
		else
		{
			alert('Error', + xhr.status + '-' + xhr.statusText);
		}
	});

	//indicate that nothing is being sent
	xhr.send(null);
}