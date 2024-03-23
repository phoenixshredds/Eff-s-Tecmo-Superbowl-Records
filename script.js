// Accesses IDs in the DOM
const effLatestSeason = document.getElementById('eff-latest-season');
const effLatestSeason93 = document.getElementById('eff-latest-season-93');
const effPreviousSeason = document.getElementById('eff-previous-season');
const attLatestSeason = document.getElementById('att-latest-season');
const attPreviousSeason = document.getElementById('att-previous-season');
const rewLatestSeason = document.getElementById('rew-latest-season');
const rewPreviousSeason = document.getElementById('rew-previous-season');

// Updates Latest Standings in the navigation for all pages
effLatestSeason.textContent = "Eff's Phoenix Cardinals (Gen IV) 2-0";
effLatestSeason93.textContent = "Eff's Minnesota Vikings (Gen I '93) 15-0";
effPreviousSeason.textContent = "Eff's Philadelphia Eagles (Gen IV) 16-0, Superbowl Champions";


/* This may end up being deleted...

// Finds mouse Y position on mouse over
const mouseYOver = (event) => {
    let mouseY = event.clientY;
    document.getElementById('mouseY').value = mouseY;

    const hoverImg = document.querySelector('.hover-img:hover img');

    // Pushes hover image up when mouseY is bottom half of screen
    if (event.type === "mouseover" && mouseY >= window.innerHeight * 0.5) {
        hoverImg.style.transform = "scale(1) translateY(-100%)";
    } else if (event.type === "mouseover" && mouseY < window.innerHeight * 0.5) {
        hoverImg.style.transform = "scale(1) translateY(20%)";
    } else if (event.type === "mouseout") {
        hoverImg.style.transform = "scale(0) translateY(0%)"; 
    }
} 

// Transitions image back to original state
// hoverImg.style.transform = "scale(0) translateY(0%)";    

// Listens for mouse events
document.addEventListener("mouseover", mouseYOver);
document.addEventListener("mouseout", mouseYOut);
*/
