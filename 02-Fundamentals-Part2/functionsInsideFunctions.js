



function cutFruitPieces(fruit){
    return fruit * 4;
}



function fruitProcessor(apples, oranges){

const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);
const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`

return juice;

}
 

 const juice = fruitProcessor(1,1);

 console.log(juice);