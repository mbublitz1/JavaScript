// Enter your JavaScript for the solution here...
var count = 0;
var list = document.querySelectorAll('.thumb-display');
var resetButton = document.querySelector('.reset');

document.querySelector('form').addEventListener('input', function(evt)
{
    var searchValue = evt.target.value.trim();

    for (count = 0; count < list.length; count ++)
    {
        if (list[count].textContent.toLowerCase().includes(searchValue.toLowerCase()))
        {
            list[count].classList.remove('hidden');
            resetButton.classList.remove('hidden');
        }
        else
        {
            list[count].classList.add('hidden');
        }

        if(searchValue.length < 1)
        {
            resetButton.classList.add('hidden')
        }
    }

    evt.preventDefault();
});

document.querySelector('.reset').addEventListener('click', function(evt)
{
    for (count = 0; count < list.length; count ++)
    {
        list[count].classList.remove('hidden');
        resetButton.classList.add('hidden');
        document.querySelector('[type=text]').value = '';
    }
});
