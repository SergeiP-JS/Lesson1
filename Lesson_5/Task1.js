"use strict";

const firstCity = {
    name: 'Sofia',
    date: new Date(1992, 5, 3),
    population: 1413507,
    country: 'Bulgaria',
};

const secondCity = {
    name: 'Belgrade',
    date: new Date(2005, 7, 3),
    population: 1233796 ,
    country: 'Serbia',
};

const showFullInformation = function() {
    return `The city ${this.name} was founded in ${this.date} and is located in the country ${this.country}, the population of the city is ${this.population} people.`;
}

let city_name = (first, second) => {
        let result = first.name.length > second.name.length ? 'longer ' :
            first.name.length < second.name.length ? 'shorter ' : 'equal in length ';
        return `Сity ​​name ${first.name} is ${result} than city name ${second.name}`;
}

let city_date = (first, second) => {
        let result = first.date < second.date ? 'earlier' :
            first.date > second.date ? 'later' : 'at the same time as ';
        return `Сity ​​${first.name} was founded ${result} than city ${second.name}`;
}

let city_population  = (first, second) => {
        let result = first.population > second.population ? 'larger' :
        first.population < second.population ? 'less' : 'equal';
    return `City ​​${first.name} has a ${result} population than city ${second.name}`;
}

firstCity.full_information = showFullInformation;
secondCity.full_information = showFullInformation;

console.error('Task 1:');
console.warn('First function:');
console.log(city_name(firstCity, secondCity));

console.warn('Second function:');
console.log(city_date(firstCity, secondCity));

console.warn('Third  function:');
console.log(city_population(firstCity, secondCity));

console.warn('Full information:');
console.log(firstCity.full_information());
console.log(secondCity.full_information());