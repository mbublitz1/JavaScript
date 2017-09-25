//create a ul and li elements for the list 

var topTen = document.querySelector('.top-ten');
var count = 0;
var list = '<ul>';

while(count < 10)
{
	list = list + '<li>' +  (count + 1) + '</li>';
	count ++;
}

topTen.innerHTML = list;

//stripe odd li's
//selecting and working with all li's ie:nodelist
var items = document.querySelectorAll('li');
//console.log(items); //find out what's in list of items

for (count = 0; count < items.length; count += 2)
{
	items[count].classList.add('stripe');
}

//rewrite as for loop
/*for(var count = 0; count < 10; count ++)
{
	list = list + '<li>' +  (count + 1) + '</li>';
}*/

//rewrite as do while
/*do
{
	list = list + '<li>' +  (count + 1) + '</li>';
	count ++;
} While(count < 10)*/