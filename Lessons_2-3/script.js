"use strict";
var userFirstName, userLastName;
userFirstName=prompt("Hi, what's your name?");
userLastName=prompt("What's your last name?");
	alert("Hello, " +userFirstName+" "+userLastName);
var userBirthDay, userBirthMonth, userBirthYear;
userBirthDay=prompt("Birth Day");
userBirthMonth=prompt("Birth Month");
userBirthYear=prompt("Birth Year");
alert("Your date of birth " 
+userBirthDay+" "+userBirthMonth+" "+userBirthYear);
function userAge (x) {
	var age=2020-x;
	if(confirm ("Are you "+age+" years old?")) {
		alert ("Good!")
	}else alert ("No good")
};
userAge(userBirthYear);