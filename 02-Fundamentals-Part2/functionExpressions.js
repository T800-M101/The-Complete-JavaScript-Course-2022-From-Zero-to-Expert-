//Function declaration supporrts hoisting
function calcAge1(birthYear){
    return 2021 - birthYear;
    
 }
 
 const age = calcAge1(1971);
 console.log(age);
 
 // function expression or anonymous function does not support hoisting
 
 const calcAge2 = function(birthYear){
     return 2021 - birthYear;
 }
 
 console.log(calcAge2(1971));