/* 
Hover effect translate
logic:

If cursorHover > xAxisCenter {
    let hoverImg = translateLeft;
} else {
    return
}

const xAxisRightOfCenter = (event) => {
    let x = event.clientX;
    if (x > 50%) {
        let hoverImg = translateLeft;
    }
}

if (document.querySelector('.hover-img a:hover span') > ) {

} 
*/

// Updates Latest Standings in the navigation for all pages
const effLatestSeason = document.getElementById('eff-latest-season');
const effLatestSeason93 = document.getElementById('eff-latest-season-93');
const effPreviousSeason = document.getElementById('eff-previous-season');

effLatestSeason.textContent = "Eff's Phoenix Cardinals (Gen IV) 2-0";
effLatestSeason93.textContent = "Eff's Minnesota Vikings (Gen I '93) 15-0";
effPreviousSeason.textContent = "Eff's Philadelphia Eagles (Gen IV) 16-0, Superbowl Champions";