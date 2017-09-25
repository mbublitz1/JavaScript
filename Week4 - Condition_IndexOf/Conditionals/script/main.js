var num1 = 6;
var num2 = 8;

//basic if/else condition
if (num1 < num2)
{
	console.log(num + " is less than " + num2);
}
else  if(num1 > num2)
{
	console.log(num1 + " is greater than " + num2);
}
else
{
	console.log(num1 + "is equal to " + num2);
}

var num = prompt("Enter a number");



//nested conditional to first check that user entered a number
if(isNaN(num))
{
	alert("Didn't enter a number");
}
else
{
	if(num % 2 == 0)
{
	console.log(num + " is an even number");
}
else
{
	console.log(num + " is an odd number");
}
}