// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;
var slideShowInterval;
var pause;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0];

// add the appropriate number of selector bullets
for (idx = 0; idx < images.length; idx += 1) {
    document.querySelector('.image-tracker').innerHTML += '<span data-idx="' + idx + '">&bull;</span>';
}

// highlight the first bullet as 'active'
document.querySelector('.image-tracker').querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function(evt) {

    var target = evt.target;
    if (target.classList.contains('control') || target.hasAttribute('data-idx')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            currentImg = (currentImg >= images.length) ? 0 : currentImg;
        } else if (target.classList.contains('prev')) {
            // move to the previous index in the array
            currentImg -= 1;
            currentImg = (currentImg < 0) ? images.length - 1 : currentImg;
        } else {
            // selector bullet clicked
            // use Number() to convert from string to number
            currentImg = Number(target.dataset.idx);
        }

        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        document.querySelector('.image-tracker .active').classList.remove('active');
        document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');

        updateSlide(currentImg);
 }
});

    slideShowInterval = setInterval(intv, 3000);


// add a keypress event listener for left/right navigation
document.addEventListener('keydown', function(evt) {
    var click;
    switch (evt.keyCode) {
        case 39:
            // right arrow, trigger .next click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.next').dispatchEvent(click);
            break;
        case 37:
            // left arrow, trigger .prev click
            click = document.createEvent('HTMLEvents');
            click.initEvent('click', true, true);
            document.querySelector('.carousel .control.prev').dispatchEvent(click);
            break;
    }
});

function updateSlide(index)
{
    //display the new current image
    document.querySelector('.carousel>img').src = 'images/' + images[index];
    //upade the active selection bullet
    document.querySelector('.images-tracker .active').classList.remove('active');
    document.querySelectorAll('[data-idx]').classList.add('active');
}

document.querySelector('.carousel>img').addEventListener('mouseover', function() {
    clearTimeout(slideShowInterval);
});

document.querySelector('.carousel>img').addEventListener('mouseout', function() {
    slideShowInterval = setInterval(intv, 3000);
});

function intv()
{
    currentImg += 1;
    if (currentImg == images.length)
    {
        currentImg = 0;
    }
    updateSlide(currentImg);
}