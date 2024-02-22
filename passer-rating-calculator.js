// Passer Rating Calculor: Formula takes 5 inputs: pass attempts, completions, yards, touchdowns and interceptions and spits out a single output.

const passAtt = document.getElementById('#pass-att');
const passComp = document.getElementById('#pass-comp');
const passYds = document.getElementById('#pass-yds');
const passTd = document.getElementById('#pass-td');
const passInt = document.getElementById('#pass-int');


// Handle Submit Press

/* 
if input fields not null
    formulate passer rating
        return number
*/

// Formula Variables

const a = (passComp / passAtt - 0.3) * 5;
const b = (passYds / passAtt - 3) * 5;
const c = (passTd / passAtt) * 20;
const d = 2.375 - (passInt / passAtt * 25);

/*

a = (comp / att - 0.3) X 5
b = (yds / att - 3) x 0.25
c = (td / att) x 20
d = 2.375 - (int / att x 25)

If the result of any calculation is greater than 2.375, it is set to 2.375. If the result is negative it is set to zero.

*/

// Passer Rating Formula

const passRate = (a + b + c + d / 6) * 100;

/*
The above calculations are then used to complete passer rating:

Passer Rating = (a + b + c + d / 6) x 100

*/
