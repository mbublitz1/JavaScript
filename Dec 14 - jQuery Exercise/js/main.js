// Assume current image is the first one


var currentThumb = $('.thumbnails>li>img')[0];  //Grabs the first thumbnail using drilling down from thumbnail class and selecting the first element

//$('nav ul').on('click', 'img', function(evt)
$('nav ul').click('img', function(evt)
{
	//catch the current thumbnail
	currentThumb = evt.target;
	console.log(currentThumb);
	//update the editor title
	console.log($('.title').text());
	$('.title').text(evt.target.title);


	//update the editor image
	//update the src, alt & title
	//option 1

	// $('.editor img').attr('src', evt.target.src.replace('_thumb', ''));
	// $('.editor img').attr('alt', evt.target.alt);
	// $('.editor img').attr('title', evt.target.title);

	//option 2
	//$('editor img').attr('src', evt.target.src.replace('_thumb', '')).attr('alt', evt.target.alt).attr('title', evt.target.title);

	//Option3
	$('.editor img').attr({
		src : evt.target.src.replace('_thumb', ''),
		alt :  evt.target.alt,
		title : evt.target.title
	});

	//Display tags if any
	$('p.tags').text($(currentThumb).attr('data-tags'));
});

//Handle submitting the tage form

$('.editor form').on('submit', function(evt){
	//get the tag value
	var value = $(evt.target.elements.tag).val();
			console.log(value);
	//if value isn't empty update the p.tags text & update the data-tags

	if(value.trim().length  > 0  && value.indexOf(' ') == -1)
	{
		$('p.tags').append('#' + value + ' ');

		$(currentThumb).attr('data-tags', $('p.tags').text());
		//clear and reset the form
		evt.target.reset();
	}
	else
	{
		//Update the error paragraph and show it
		$('p.error').text("You must enter a tag").removeClass('hidden').fadeOut(3000, function(){
			$('p.error').addClass('hidden').removeAttr('style');
		});
	}

	evt.preventDefault();

});