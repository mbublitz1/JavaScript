/*var xhr = new XMLHttpRequest();

function handleResponse() {
	console.log(xhr.responseText);
}

function sendRequest() {
	xhr.open('GET', 'plain.txt', true);
	xhr.addEventListener('load', handleResponse);
	xhr.send(null);
}*/

// call sendRequest from the console...

// var xhr = new XMLHttpRequest();

// function handleResponse()
// {
// 	if(xhr.status == 200)
// 	{
// 		//document.querySelector('main').innerHTML = xhr.responseText;
// 		//For XML
// 		 var heading = xhr.responseXML.querySelector('h1');
// 		 var main = document.querySelector('main');

// 		 main.appendChild(heading);
// 	}
// }

// function sendRequest() 
// {
// 	xhr.open('GET', 'hello.xml', true);
// 	xhr.addEventListener('load', handleResponse);
// 	xhr.send(null);
// }

// sendRequest();

var xhr = new XMLHttpRequest();

function handleResponse()
{
	if(xhr.status == 200)
	{
		document.querySelector('.photos').innerHTML = xhr.responseText;
	}
}

function sendRequest()
{
	xhr.open('GET', 'photos.html', true);
	xhr.addEventListener('load', handleResponse);
	xhr.send(null);
}

document.querySelector('button').addEventListener('click', sendRequest);