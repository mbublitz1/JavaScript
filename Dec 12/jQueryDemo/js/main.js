//encure you have a conole opeen to view output

//the jQuery function is avaialble by name and the alias $
console.log($ === jQuery);

console.log ($('p'));

//jQuery allows use of most/all CSS1-3 selectors and make use of a few customer selectors as well

//grab second paragraph using jQuery pseudo selector
console.log($('p:eq(1)').text());

//same as above using CSS selector
console.log($('p:nth-of-type(2)').text());
//method chaining allows us to run multiple jQuery commands one after the other
console.log($('p:first').css('color','red').text('Red paragraph'));

//add event listenders is easy too, one thing to note when using jQuery is that looping over elements is implicit
//this means that simply selecting elements will ensure that a function is applied to all elements in the set

//for example, assing a listener for all paragraphs is as follows
$('p').on('click', function(evt) {
	//console.log(evt.target.innerHTML);
	//same as above, this is the same as evt.target
	console.log($(this).text());
});

//notice there is no loop in the above example
//but adding event listeners on all paragraphs is not very efficient and would be better to add the listener
//on a parent element

//first remove the event listeners from all the paragrpahs
$('p').off('click');

//next, delegate from the parent container - in this case main
$('main').delegate('p', 'click', function(evt)
{
	//console.log('second attempt: ' + evt.target.innerHTML);
	//same as above except using this keyword
	console.log('second attempt: ' + $(this).text());
});
