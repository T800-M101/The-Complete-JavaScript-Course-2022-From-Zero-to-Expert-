// Arrow functions does not have the this keyword
// One liner functions
const calcAge = birthYear => 2021 - birthYear;

console.log(calcAge(1971));


// One parameter 
const yearsUntilRetirment = birthYear => {

    const age = 2021 - birthYear;

    return retirment = 65 - age;
       
}

console.log(yearsUntilRetirment(1971));

// many parameters
const yearsUntilRetirment2 = (birthYear,currentYear, firstname) => {

    const age = currentYear - birthYear;

    return `${firstname} retires in ${retirment = 65 - age} years`;
       
}

console.log(yearsUntilRetirment2(1990, 2021, 'Guillermo'));