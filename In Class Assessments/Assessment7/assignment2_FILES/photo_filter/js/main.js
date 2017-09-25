// Enter your JavaScript for the solution here...
var count =0;
//var list = document.querySelectorAll('.thumb-display');
var images = $('.thumb-display');
var resetButton = $('.reset');

$('form').on('input', function(evt)
{
    var searchValue = $(evt.target).val();
        console.log(images.text());
        if (images.text().indexOf(searchValue))
        {

            images.removeClass('hidden');
            resetButton.removeClass('hidden');
        }
        // $(images).each(function(idx, elem)
        // {
        //     var wrappedElem = $(elem);
        //     if (wrappedElem.text().indexOf(searchValue))
        //     {
        //
        //         wrappedElem.removeClass('hidden');
        //         resetButton.removeClass('hidden');
        //     }
        // });
    // for (count = 0; count < images.length; count ++)
    //  {
    //      var test = $('images')[count];
    //     if (images.text().indexOf(searchValue))
    //     {
    //         test.removeClass('hidden');
    //         resetButton.removeClass('hidden');
    //     }
    //     else
    //     {
    //         $(images)[count].addClass('hidden');
    //     }
    //
    //     if(searchValue.length < 1)
    //     {
    //         resetButton.addClass('hidden');
    //     }
    // }

    evt.preventDefault();
});

// $('.reset').on('click', function(evt)
// {
//     for (count = 0; count < list.length; count ++)
//     {
//         list[count].removeClass('hidden');
//         resetButton.addClass('hidden');
//         $('[type=text]').value = '';
//     }
// });