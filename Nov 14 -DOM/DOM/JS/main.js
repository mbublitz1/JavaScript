//create new h1 element
console.log ('in js');
var title = document.createElement('h1');
//create some contect for the h1
var titleText = document.createTextNode('This is my titiles');
//Add the text node to the newly created h1
title.appendChild(titleText);
//ass the new h1 and it's contect into the DOM
var section = document.querySelector('section');
section.appendChild(title);

//add inline styling to the h1
title.style.color = '#ffffff'
title.style.fontFamily ='sans-serif'

var img = document.createElement('img');
img.setAttribute('src', 'http://placekitten.com/400/300');
img.setAttribute('alt', 'cute place kitten');
section.appendChild(img);
