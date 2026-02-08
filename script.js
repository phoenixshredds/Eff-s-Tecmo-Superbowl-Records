// 1. MOUSE FUNCTIONS (Keeps the Body tag from crashing)
function mouseYOver(event) {
    // We'll put your scaling logic back here once the data shows up!
}

function mouseYOut(event) {
    // Added this because your console was looking for it
}

// 2. THE DATA ENGINE
async function loadRecords() {
    const mainContainer = document.getElementById('records-list');
    if (!mainContainer) return;

    try {
        // Look at the URL to see what category the user wants
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('cat') || 'passing'; // Default to 'passing'

        const response = await fetch('records.json');
        const data = await response.json();

        // Grab the specific data (e.g., data['passing'] or data['rushing'])
        const categoryData = data[category];

        if (categoryData) {
            // Update the page title to match the category
            document.querySelector('.football-title').textContent = categoryData.title;

            // Build the grid
            renderGrid(categoryData.sections);
        }
    } catch (error) {
        console.error("Error loading category:", error);
    }
}

// Clean rendering function to keep your code tidy
function renderGrid(sections) {
    const mainContainer = document.getElementById('records-list');
    mainContainer.innerHTML = ""; // Clear old content

    sections.forEach((section, index) => {
        const sectionElement = document.createElement('section');
        sectionElement.className = `content-${index + 1}`;

        let html = `<p class="record-header">${section.title}:</p>`;
        section.entries.forEach(entry => {
            html += `
                <li class="hover-img ${entry.teamClass}">
                    <a href="#">
                        ${entry.label}: ${entry.stat}, ${entry.player}(${entry.tag})
                        <img src="${entry.image}" alt="${entry.player}">
                    </a>
                </li>`;
        });
        sectionElement.innerHTML = html;
        mainContainer.appendChild(sectionElement);
    });
}
// 3. STANDINGS (Your existing sidebar logic)
function updateStandings() {
    const effLatest = document.getElementById('eff-latest-season');
    const eff93 = document.getElementById('eff-latest-season-93');
    const effPrev = document.getElementById('eff-previous-season');

    if (effLatest) effLatest.textContent = "Eff's Phoenix Cardinals (Gen IV) 2-0";
    if (eff93) eff93.textContent = "Eff's Minnesota Vikings (Gen I '93) 15-0";
    if (effPrev) effPrev.textContent = "Eff's Philadelphia Eagles (Gen IV) 16-0, Superbowl Champions";
}

// 4. RUN EVERYTHING ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    updateStandings();
    loadRecords();
});