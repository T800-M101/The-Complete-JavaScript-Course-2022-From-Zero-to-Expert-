'use strict'



function logger(){
    console.log('My name is Guillermo');
}


// calling, running or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){

   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
   return juice;
}

fruitProcessor(5,0);

const appleJuice = fruitProcessor(5,0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

