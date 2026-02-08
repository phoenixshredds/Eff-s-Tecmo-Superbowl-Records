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
