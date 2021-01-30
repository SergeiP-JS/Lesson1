"use strict";

let getDigitSum = num => {
    let temp = 0;
    while (num > 0) {
        temp += num  % 10;
        num  = Math.trunc(num  / 10);
    }
    return (temp);
}

alert(getDigitSum(parseInt(prompt('(3) Enter the number'))));