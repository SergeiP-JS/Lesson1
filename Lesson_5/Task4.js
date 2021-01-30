"use strict";

const fifthCity = {
    name: 'Omsk',
    established: new Date(2001, 5, 19),
    population: 1154507,
    country: 'Russia',
}

const sixthCity = {
    name: 'Tyumen',
    established: new Date(2009, 1, 18),
    population: 807400,
    country: 'Russia',
}

thirdCity.country = 'Russia';
thirdCity.population = 1625631;
fourthCity.country = 'Russia';
fourthCity.population = 556382;

let cities = [firstCity, secondCity, thirdCity, fourthCity, fifthCity, sixthCity];

function sortByPopulation(cities) {
    cities.sort((city1, city2) => city1.population > city2.population ? 1 :
        city1.population == city2.population ? 0 : -1);
}

sortByPopulation(cities);
console.error('Task 4');
console.log(cities);