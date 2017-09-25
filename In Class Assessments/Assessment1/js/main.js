
function italics(value)
{
	console.log('italics function reached');
	return '<i>' + value + '</i>';
}

function strong(value)
{
	return '<strong>' + value + '</strong>';
}

function updateInnerHTML(selector, newValue)
{
	console.log('updateInnerHTML function reached');
	document.querySelector(selector).innerHTML = newValue;
}

var spanText = document.querySelector('span.note').innerHTML;
console.log(spanText);
spanText = italics(spanText);
updateInnerHTML('span.note', spanText);