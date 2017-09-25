// Your code here...
var content = document.querySelector('.content');
var div,
    spanRow,
    spanText,
    ulRow,
    listRow,
    anchorRow,
    anchorText,
    friendDiv,
    identityDiv,
    imageRow,
    h2Row,
    h2Text,
    indULRow,
    emailRow,
    emailText,
    emailSpan,
    emailSpanText,
    hometownRow,
    hometownText,
    hometownSpanRow,
    hometownSpanText,
    indPRow,
    indPText;

document.querySelector('.pure-menu').addEventListener('click', function (evt)
{
    var targetRow = evt.target;

    ClearPage();


    if(targetRow.firstChild.nodeValue == 'Friends') {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'friends/friends.json', true);
        xhr.addEventListener('load', function () {
            if (xhr.status == 200) {
                //good status get response
                renderFriends(JSON.parse(xhr.response));
            }
            else {
                alert('Error', +xhr.status + '-' + xhr.statusText);
            }
        });

        //indicate that nothing is being sent
        xhr.send(null);
    }
    else if (targetRow.firstChild.nodeValue == 'Home')
    {
        ClearPage();
    }

    evt.preventDefault();
});

function renderFriends(friends)
{
    // var display = document.querySelector('.friends');
    // var output = 'Friends';

    var index;

    div = document.createElement('div');
    div.setAttribute('class', 'pure-menu custom-restricted-width');

    spanRow = document.createElement('span');
    spanText = document.createTextNode('Friends');
    spanRow.setAttribute('class', 'pure-menu-heading');
    spanRow.appendChild(spanText);

    ulRow = document.createElement('ul');
    ulRow.setAttribute('class', 'pure-menu-list');

    // render each friend in the array
    for (var index = 0; index < friends.length; index++)
    {
        anchorRow = document.createElement('a');
        anchorRow.setAttribute('href', '#');
        anchorRow.setAttribute('class', 'pure-menu-link');
        anchorRow.setAttribute('data-id', friends[index].id);
        anchorText = document.createTextNode(friends[index].firstName + ' ' + friends[index].lastName);
        anchorRow.appendChild(anchorText);
        listRow = document.createElement('li');
        listRow.setAttribute('class', 'pure-menu-item');
        listRow.appendChild(anchorRow);

        ulRow.appendChild(listRow);
    }

    div.appendChild(spanRow);
    div.appendChild(ulRow);
    content.appendChild(div);
}

document.querySelector('.content').addEventListener('click', function (evt)
{
    var target = evt.target;

    id = target.getAttribute('data-id');
    ClearPage();

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'friends/' + id + '.json', true);
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            //good status get response
            renderIndividual(JSON.parse(xhr.response));
        }
        else {
            alert('Error', +xhr.status + '-' + xhr.statusText);
        }
    });

    //indicate that nothing is being sent
    xhr.send(null);

    evt.preventDefault();
});

function renderIndividual(individual)
{
    friendDiv = document.createElement('div');
    friendDiv.setAttribute('class', 'friend');

    imageRow = document.createElement('img');
    imageRow.setAttribute('src', individual.avatar);
    imageRow.setAttribute('class','photo');

    h2Row = document.createElement('h2');
    h2Row.setAttribute('class','name');
    h2Text = document.createTextNode(individual.firstName + ' ' + individual.lastName);
    h2Row.appendChild(h2Text);

    identityDiv = document.createElement('div');
    identityDiv.setAttribute('class', 'identity');
    identityDiv.appendChild(imageRow);
    identityDiv.appendChild(h2Row);

    indULRow = document.createElement('ul');

    emailSpan = document.createElement('span');
    emailSpan.setAttribute('class', 'label');
    emailSpanText = document.createTextNode('email: ');
    emailSpan.appendChild(emailSpanText);

    emailRow = document.createElement('li');
    emailText = document.createTextNode(individual.email);
    emailRow.appendChild(emailSpan);
    emailRow.appendChild(emailText);


    hometownSpanRow = document.createElement('span');
    hometownSpanRow.setAttribute('class', 'label');
    hometownSpanText = document.createTextNode('hometown: ');
    hometownSpanRow.appendChild(hometownSpanText);

    hometownRow = document.createElement('li');
    hometownText = document.createTextNode(individual.hometown);
    hometownRow.appendChild(hometownSpanRow);
    hometownRow.appendChild(hometownText);

    indPRow = document.createElement('p');
    indPRow.setAttribute('class','bio');
    indPText = document.createTextNode(individual.bio);
    indPRow.appendChild(indPText);

    indULRow.appendChild(emailRow);
    indULRow.appendChild(hometownRow);


    identityDiv.appendChild(indULRow);
    friendDiv.appendChild(identityDiv);
    friendDiv.appendChild(indPRow);
    content.appendChild(friendDiv);

}

function ClearPage()
{
    if(content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}