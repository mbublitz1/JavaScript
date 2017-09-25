//var name = prompt("Enter your full name");
//alert ("My name is " + name + ", you killed my father")

//function princessBrideQuote()
//{
	//do the stuff
//	var name = prompt("Enter your full name");
//	alert ("My name is " + name + ", you killed my father")
//	return;
//}

// princessBrideQuote(); //Have to call the function before it's executed

// function greetUser(username)
// {
// 	//select h1
// 	var mainTitle = document.querySelector("h1.intro");
// 	//update the inner HTML
// 	mainTitle.innerHTML = "Welcome " + username + " to "mainTitle.innerHTML;
// }

// greetUser(prompt("Enter Name:"))

//This demonstrates using a delclared function
// greetUser();

// function getUser()
// {
// 	//select h1
// 	var mainTitle = document.querySelector("h1.intro");
// 	var userName = prompt("Enter your name: ");
// 	//update inner HTML
// 	mainTitle.innerHTML = "Welcome " + userName + " to " + mainTitle.innerHTML;

 
// }


var greetUser = function()
{
	//select the h1
	var mainTitle = document.querySelector("h1.intro");
	var userName = prompt("Enter your name: ");
	mainTitle.innerHTML = "Welcome " + userName + " to " + mainTitle.innerHTML;

}; //this one requires a semi colon because it's consider a statement since it is assigned to a variable

greetUser();