// Enter JavaScript for the exercise here...
var transactions = document.querySelector('.transactions');
var totalDebits = document.querySelector('span.total.debits');
var totalCredits = document.querySelector('span.total.credits');

  
{
    var error = document.querySelector('div.error');

    var description,
        type,
        amount,
        tblRow,
        descCell,
        descContent,
        typeCell,
        typeContent,
        amtCell,
        amtContent,
        iconCell,
        iconElement,
        errorCell,
        errorContent;

    description = evt.target.elements['description'].value;
    type = evt.target.elements['type'].value;
    amount = evt.target.elements['currency'].value;
    errorCell = document.createElement('span');
    errorContent = document.createTextNode('');
    errorCell.appendChild(errorContent);
    error.appendChild(errorCell);
    var formattedAmount = Number(amount).toFixed(2);
    var check = CheckForError(description, type, amount);

    if(check === '')
    {
        var targetNode = document.querySelector('span').firstChild;
        error.removeChild(targetNode.parentNode);
        tblRow = document.createElement('tr');
        descCell = document.createElement('td');
        descContent = document.createTextNode(description);
        typeCell = document.createElement('td');
        typeContent = document.createTextNode(type);
        amtCell = document.createElement('td');
        amtContent = document.createTextNode('$' + formattedAmount);
        iconCell = document.createElement('td');
        iconElement = document.createElement('i');

        tblRow.setAttribute('class', type);
        amtCell.setAttribute('class', 'amount');
        iconCell.setAttribute('class', 'tools');
        iconElement.setAttribute('class', 'delete fa fa-trash-o');

        descCell.appendChild(descContent);
        tblRow.appendChild(descCell);

        typeCell.appendChild(typeContent);
        tblRow.appendChild(typeCell);

        amtCell.appendChild(amtContent);
        tblRow.appendChild(amtCell);

        iconCell.appendChild(iconElement);
        tblRow.appendChild(iconCell);

        transactions.appendChild(tblRow);
        if(type === 'debit')
        {
            var currentValue = calculateTotals(totalDebits.firstChild.nodeValue);
            currentValue = Number(currentValue) + Number(amount);
            totalDebits.firstChild.nodeValue = '$' + currentValue.toFixed(2);
        }
        else
        {

            var currentValue = calculateTotals(totalCredits.firstChild.nodeValue);
            currentValue = Number(currentValue) + Number(amount);
            totalCredits.firstChild.nodeValue = '$' + currentValue.toFixed(2);
        }
        evt.target.reset();

    }
    else
    {
        var targetNode = document.querySelector('span');
        error.removeChild(targetNode);
        errorCell = document.createElement('span');
        errorContent = document.createTextNode(check);
        errorCell.appendChild(errorContent);
        error.appendChild(errorCell);
    }
    evt.preventDefault();

});

function calculateTotals(firstNumber)
{
    var pureNumber = firstNumber.replace('$','');
    return parseFloat(pureNumber);
}

document.querySelector('.transactions').addEventListener('click', function (evt)
{
    var total;
    var targetRow = evt.target.parentNode;
    var lineAmount = calculateTotals(targetRow.previousSibling.firstChild.nodeValue);

    if(evt.target.classList.contains('delete'))
    {
        var confrimRemove = confirm("Are you sure you want to remove this item?");

        if(confrimRemove === true)
        {
            if(targetRow.parentNode.classList.contains('debit'))
            {
                total = calculateTotals(totalDebits.firstChild.nodeValue) - parseFloat(lineAmount)
                totalDebits.firstChild.nodeValue = '$' + total.toFixed(2);
            }
            else
            {
                total = calculateTotals(totalCredits.firstChild.nodeValue) - parseFloat(lineAmount);
                totalCredits.firstChild.nodeValue = '$' + total.toFixed(2);
            }
            transactions.removeChild(targetRow.parentNode);
        }
    }
});

function CheckForError(description, type, amount)
{

    var errorMessage = '';
    if(description == '')
    {
        errorMessage += 'Description can not be empty. ';
    }
    if (type == '')
    {
        errorMessage += 'Debit or Credit must be selected. ';
    }
    if (amount == '')
    {
        errorMessage += 'Amount can not be blank. ';
    }
    return errorMessage;
}

function inactivityTime() {
    var idleTime;
    window.onload = resetTimer;

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function reload() {
        alert('Your session has been inactive for 2 mintues and the window will be reloaded');
        window.location.reload();
    }

    function resetTimer() {
        clearTimeout(idleTime);
        idleTime = setTimeout(reload, 120000);

    }
}

inactivityTime();