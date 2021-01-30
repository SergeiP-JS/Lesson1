"use strict";

const thirdCity = {};
const fourthCity = Object.assign({}, secondCity);

for (let key in firstCity) {
    thirdCity[key] = firstCity[key];
}

thirdCity.name = 'Novosibirsk';
thirdCity.date = new Date(1985, 10, 15);
fourthCity.name = 'Kemerovo';
fourthCity.date = new Date(1999, 3, 10);

const showAllCitiesInformation = function() { return this.full_information(); }

thirdCity.inf = showAllCitiesInformation;
fourthCity.inf = showAllCitiesInformation;

console.error('Task 2');
console.log(thirdCity.inf());
console.log(fourthCity.inf());

