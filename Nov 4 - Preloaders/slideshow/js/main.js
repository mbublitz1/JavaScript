// your js here...
var images = ['mountain1.jpg','mountain2.jpg','mountain3.jpg'];
var currentImg = 0;
var viewImage = document.querySelector('.carousel>img');
var idx;


viewImage.src ='images/' + images[0] ;

//////////////being image preload/////////////////////////////////
// method 1 .. new image constructor

var preloadIdx;
var img;
// begin at 1 to skip to the first (= 1;)
for(preloadIdx == 0 ? 1:0 ; preloadIdx < images.length; preloadIdx += 1){
    img = new Image(); //this gives us the html img element
    img.src = 'images/' + images[preloadIdx];
}


//method 2 sequential loading
// begin at 0 because the index will be incremented before assigning the source
// if you want ti load all the images (including the first) initialize  preloadIdx to -1
// preloadIdx = 0;
// function preload(){
//     preloadIdx += 1;
//     if(preloadIdx < images.length){
//         img = document.createElement('img');
//         img.addEventListener('load', preload);
//         img.src = 'images/' + images[preloadIdx];
//     }
// }

// //begin the preload
// preload();


// add the appropriate number of selector bullets

for(idx = 0 ; idx < images.length ; idx++){
    document.querySelector('.image-tracker').innerHTML += '<span data-idx= "' + idx + 
    '">&bull;</span>'; 
}


// highlight the first bullet as 'active'
document.querySelector('.image-tracker span').classList.add('active');


document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;


    //grab both the arrows and the bullets 
    if(target.classList.contains('control') || target.hasAttribute('data-idx')){
        console.log('clicked!~')
        if (target.classList.contains('next')) {
            if(currentImg < images.length - 1) {
               currentImg = parseFloat(currentImg) + 1;
               // currentImg += 1;
            } else {
                currentImg = 0;
            }
        } else if (target.classList.contains('prev')) {
            if(currentImg > 0){
                currentImg -= 1;
            } else {
                currentImg = images.length - 1;
            } 
        } else {
                //selector bullet clicked
                currentImg = target.dataset.idx;
            }
 

        //call the universal function

        changeImage(currentImg);
    }
});

//add a keypress event listener for left/right navigation

document.addEventListener('keydown', function(evt){
    var click;
    switch(evt.keyCode){ //css-trick keycode

        case 39:
        //right arrow, trigger .next-click
        click = document.createEvent('HTMLEvents');
        click.initEvent('click', true, true);
        document.querySelector('.carousel .control.next').dispatchEvent(click);
        break;

        case 37:
        //left arrow, trigger .prev-click
        click = document.createEvent('HTMLEvents');
        click.initEvent('click', true, true);
        document.querySelector('.carousel .control.prev').dispatchEvent(click);
        break;
    }
});


function changeImage(index) {
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        //update the active selector buller

        document.querySelector('.image-tracker .active').classList.remove('active');

        document.querySelectorAll('[data-idx]')[currentImg].classList.add('active');
}

//switch statement:
//
//switch(expression){
//case n:
//  give it some code
//  break;
//case n:
//  give it some code
//  break;
//default:
//  give it some code  
//}
//
//

// EXAMPLE:
// var iceCream = vanilla;
// switch(iceCream){
//     case 'chocolate':
//         give it some code
//         break;
//     case 'mint':
//         give it some code
//         break;
//     default:
//         give it some code
// }


// your js here...
// var images = ['mountain1.jpg','mountain2.jpg','mountain3.jpg'];
// var currentImg = 0;
// var viewImage = document.querySelector('.carousel>img');

// viewImage.src ='images/' + images[0] ;

// document.querySelector('.carousel').addEventListener('click', function (evt){
//     var target = evt.target;
//     if(target.classList.contains('control'))
//     {
//         console.log('clicked!~')
//         if (target.classList.contains('next')) {
//             currentImg += 1;
//             if(currentImg >= images.length){
//                 currentImg = 0;
//             }
//         } else if (target.classList.contains('prev')) {
//             currentImg -= 1;
//             if(currentImg < 0) {
//                 currentImg = images.length - 1;
//             })
//         }
//         document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
//     }
// });