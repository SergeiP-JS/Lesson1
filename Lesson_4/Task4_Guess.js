"use strict";
const RAND = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //Максимум и минимум включаются

let limit = 5;
let num_check = ans => RAND == ans ? num_equally() : RAND  > ans ? num_more() : num_less();

let num_equally = () => {
    alert('Congratulations! Number ' + RAND + ' guessed!');
    return (true);
}

let num_more = () => {
    alert('The guessed number is more than the entered');
   return (false);
}

let num_less = () => {
    alert('The guessed number is less than the entered');
    return (false);
}

do {
    limit--;
    if(num_check(prompt('(4) Enter the number'))) break;
} while (limit > 0);

if (limit == 0)  alert('You have not guessed the intended number');




