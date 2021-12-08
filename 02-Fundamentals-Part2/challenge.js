/*
 Back to the two gymnastic teams, the Dolphins and the Koalas!
 There is a new gymnastic discipline, which works differently.
 Each team competes 3 times, and the average of the 3 scores is calculated 
 (so one average score per team).

 A team only wins if it has at least DOUBLE the average score of the other team. Otherwise,
 no team wins!

 1. Create an arrow function 'calculateAverage' to calculate the average of 3 scores.
 2. Use the function to calculate the average for both teams.
 3. Create a function 'checkWinner' that takes the average score of each team as parameters
 ('avgDolphins','avgKoalas'), and then logs the winner to the console, together with the
 victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA2.
 5. Ignore draws this time.

 TEST DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54 and 49. 
 TEST DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34 and 27. 

*/

const calculateAverage = (score1, score2, score3) => (score1+score2+score3) / 3;

let avgDolphins = 0;
let avgKoalas = 0;
let winner = 0;



function checkWinner(avgDolphins, avgKoalas){
    
    if(avgDolphins >= 2 * avgKoalas){
        
     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    }else if(avgKoalas >= 2 * avgDolphins){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    }else {
        console.log("No team wins!");
    }
}



// TEST 1
avgDolphins = calculateAverage(44,23,71);
avgKoalas = calculateAverage(65,54,49);
winner = checkWinner(avgDolphins, avgKoalas);
console.log(winner);


// TEST 2

avgDolphins = calculateAverage(85,54,41);
avgKoalas = calculateAverage(23,34,27);
winner = checkWinner(avgDolphins, avgKoalas);
console.log(winner);