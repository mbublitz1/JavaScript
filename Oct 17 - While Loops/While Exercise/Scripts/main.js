var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

/*while (monthNumber <= monthsToPrint)
{
	numSheep = numSheep * 4;
	console.log('There will be ' + numSheep + ' after ' + (monthNumber) + ' month(s)!');
	monthNumber ++;
}*/

//rewrite as for loop
/*for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++)
 {
	numSheep = numSheep * 4;
	console.log('There will be ' + numSheep + ' after ' + (monthNumber) + ' month(s)!');
};
*/
do
{
	numSheep = numSheep * 4;
	console.log('There will be ' + numSheep + ' after ' + (monthNumber) + ' month(s)!');
	monthNumber ++;
} while(monthNumber <= monthsToPrint);