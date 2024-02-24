// Passer Rating Calculator: Formula takes 5 inputs: pass attempts, completions, yards, touchdowns and interceptions and spits out a single output.

document.getElementById('passer-rating-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const passAttValue = parseFloat(document.getElementById('pass-att').value);
    const passCompValue = parseFloat(document.getElementById('pass-comp').value);
    const passYdsValue = parseFloat(document.getElementById('pass-yds').value);
    const passTdValue = parseFloat(document.getElementById('pass-td').value);
    const passIntValue = parseFloat(document.getElementById('pass-int').value);

    const calculationA = Math.min(Math.max((passCompValue / passAttValue - 0.3) * 5, 0), 2.375);
    const calculationB = Math.min(Math.max((passYdsValue / passAttValue - 3) * 5, 0), 2.375);
    const calculationC = Math.min(Math.max((passTdValue / passAttValue) * 20, 0), 2.375);
    const calculationD = Math.min(Math.max(2.375 - (passIntValue / passAttValue * 25), 0), 2.375);

    const passerRating = (calculationA + calculationB + calculationC + calculationD) / 6 * 100;

    document.getElementById('result').value = passerRating.toFixed(1);
    console.log(passAttValue, passCompValue, passIntValue, passTdValue, passYdsValue, passerRating);

    if (passCompValue > passAttValue) {
        alert('Passing completions cannot exceed passing attempts. Please try again.');
        return;
    } else if (passTdValue + passIntValue > passAttValue) {
        alert('Passing touchdowns and/or interceptions cannot exceed passing attempts. Please try again.');
        return;
    } else if (passAttValue < 0 || passCompValue < 0 || passYdsValue < 0 || passTdValue < 0 || passIntValue < 0) {
        alert('Invalid input: Number cannot be negative. Please try again.');
        return;
    };  
});

