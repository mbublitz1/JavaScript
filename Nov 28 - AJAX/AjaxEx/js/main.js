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