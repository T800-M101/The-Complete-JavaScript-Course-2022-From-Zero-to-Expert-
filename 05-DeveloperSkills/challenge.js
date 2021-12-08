/*
    Given an array of forecasted maximum tempertures, the thermometer
    displays a string with these temperatures.

    Example: [17, 21, 23] will print "... 18°C in 1 days ...21°C in 2 days ...23°C in 3 days"

    Create a function 'printForecast' which takes an array 'arr' and logs a string like the above
    to the console.

    Use the problem-solving framework: Understand the problem and breakit into sub-problems!

    TEST DATA1: [17,21,23]
    TEST DATA2: [12,5,-5,0,4]

*/

function printForecast(arr){
    let forecast = "";
  for(let i = 0 ; i < arr.length; i++){
      forecast += `...${arr[i]}°C in ${i+1} days `;

  }

  return forecast;
}


const arr1 = [17,21,23];
const arr2 = [12,5,-5,0,4];

console.log(printForecast(arr1));
console.log(printForecast(arr2));