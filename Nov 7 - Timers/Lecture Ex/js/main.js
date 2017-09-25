// function greenLight()
// {

// 	document.querySelector('.green').classList.remove('hidden');
// 	document.querySelector('.red').classList.add('hidden');

// }

function greenLight()
{
	var greenCircle = document.querySelector('.green');
	var redCircle = document.querySelector('.red');

	if(greenCircle.classList.contains('hidden'))
	{
		greenCircle.classList.remove('hidden');
		redCircle.classList.add('hidden');
	}
	else
	{
		greenCircle.classList.add('hidden');
		redCircle.classList.remove('hidden');
	}

}

greenLight();

//Sets timeout for 3 seconds
//setTimeout(greenLight, 3000); 
//sets interval for 6 seconds
//setInterval(greenLight, 6000);


var trafficLights = setTimeout(function()
{
	document.querySelector('.green').classList.remove('hidden');
	document.querySelector('.red').classList.add('hidden');
});

//cancel setTimeout
clearTimeout(trafficLights);

//passing in parameters - not supported in IE9
var myVal;

function start()
{
	myVar = setTimeout(alertFucttion, 3000, 'first param', 'second param');

}

//instead we can use an anonymous function which works in all browsers

function start()
{
	myVar = setTimeout(function(){alertfunction('first param', 'second param')}, 3000);

}
