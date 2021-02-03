  
"use strict";
let userFirstName=prompt("Hi, what's your name?"),
	userLastName=prompt("What's your last name?");
 
alert("Hello, " +userFirstName+" "+userLastName);
	
let userBirthDay=prompt("Birth Day"),
	userBirthMonth=prompt("Birth Month"),
	userBirthYear=prompt("Birth Year");
 
alert("Your date of birth " + userBirthDay + " " + userBirthMonth + " " + userBirthYear);

function userAge(x) {
	let age=2020-x;
	if (confirm("Are you " + age + " years old?")) {
		alert ("Good!");
	}else {alert ("No good");}
};

userAge(userBirthYear);
