// var xhr = new XMLHttpRequest();

// function handleResponse() {
// 	console.log(xhr.responseText);
// }

// function sendRequest() {
// 	xhr.open('GET', 'plaind.txt', true);
// 	xhr.addEventListener('load', handleResponse);
// 	xhr.send(null);
// }

// call sendRequest from the console...

// var xhr = new XMLHttpRequest();
// var btnXHR = new XMLHttpRequest();

// function handleResponse(){
// 	if(xhr.status == 200){
// 		document.querySelector('main').innerHTML = xhr.responseXML;
// 		// var heading = xhr.responseXML.querySelector('h1');
// 		// var main = document.querySelector('main');

// 		// main.appendChild(heading);
// 	}
// }

// function sendRequest(){
// 	xhr.open('GET', 'hello.xml', true);
// 	xhr.addEventListener('load', handleResponse);
// 	xhr.send(null);
// }

// sendRequest();

var xhr = new XMLHttpRequest();

function handleResponse(){
	if(xhr.status == 200){
		document.querySelector('.photos').innerHTML = xhr.responseText;
	}
}

function sendRequest(){
	xhr.open('GET', 'photos.html', true);
	xhr.addEventListener('load', handleResponse);
	xhr.send(null);
}

document.querySelector('button').addEventListener('click', sendRequest);

var xhr2 = new XMLHttpRequest();

//display cat breed information
function showCatInfo(cat)
{
	var data = document.querySelector('.data');
	var output = '';
	var idx;

	for (idx = 0; idx < cat.length; idx++)
	output += '<p>' + cat[idx].catName + '</p>' + '<p>' + cat[idx].coat + '</p>';

	data.innerHTML = output;
}

//get cat breed data from JSON file
function getCatInfo()
{
	console.log('inside function');
	xhr2.open('GET', 'cat-data.json', true);
	xhr2.addEventListener('load', function()
	{
		showCatInfo(JSON.parse(xhr2.response));
	});

	xhr2.send(null);
}