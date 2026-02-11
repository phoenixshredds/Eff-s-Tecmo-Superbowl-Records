// 1. MOUSE FUNCTIONS (Keeps the Body tag from crashing)
function mouseYOver(event) {
    // We'll put your scaling logic back here once the data shows up!
}

function mouseYOut(event) {
    // Added this because your console was looking for it
}

// 2. THE DATA ENGINE
async function loadRecords() {
    // Check which page we are on
    const recordsContainer = document.getElementById('records-list');
    const homeContainer = document.getElementById('content-wrapper');

    try {
        const response = await fetch('records.json');
        const data = await response.json();

        // ALWAYS update standings (since the sidebar is on every page)
        updateStandings(data.standings);

        // IF we are on the RECORDS page
        if (recordsContainer) {
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('cat') || 'passing';
            const categoryData = data[category];

            if (categoryData) {
                // We are skipping the title update entirely because you 
                // handled it manually in the HTML.

                // Build the records grid (the green boxes)
                try {
                    renderGrid(categoryData.sections, categoryData.title);
                } catch (gridError) {
                    console.error("The grid failed to build:", gridError);
                }
            }
        }
        // IF we are on the HOME page
        else if (homeContainer) {
            console.log("Home page detected. Standings updated.");
            // We don't need to run renderGrid here because your home HTML is hardcoded
        }

    } catch (error) {
        console.error("Data Engine Error:", error);
    }
}

// 3. Clean rendering function to keep code tidy
function renderGrid(sections, title) {
    const mainContainer = document.getElementById('records-list');
    mainContainer.innerHTML = ""; // Clear old content

    // I. Create the key
    const keyDiv = document.createElement('div');
    keyDiv.className = "key-header framed-bg";
    keyDiv.innerHTML = `
        <p>Key:</p>
        <ul class="key">
            <li><i>* symbol indicates manual counting above the game's cap of 63 touchdowns.</i></li>
            <li><i>+ symbol indicates the game's maximum scrimmage yardage (4095 yards).</i></li>
        </ul>
    `;

    // II. Add the Key to the top
    mainContainer.appendChild(keyDiv);

    // III. ADD THE SUB-TITLE

    // Div for the subtitle
    const subTitleDiv = document.createElement('div');
    subTitleDiv.className = "football-subtitle football-title";
    subTitleDiv.style.margin = "1em 1em";

    // Category title display
    subTitleDiv.innerHTML = title;
    mainContainer.appendChild(subTitleDiv);

    // IV. Build the records content
    sections.forEach((section, index) => {
        const sectionElement = document.createElement('section');
        sectionElement.className = `content-${index + 1}`;

        let html = `<p class="record-header">${section.title}:</p>`;
        section.entries.forEach(entry => {
            html += `
                <li class="hover-img ${entry.teamClass}">
                    <a href="#">
                        ${entry.label}: ${entry.stat}, ${entry.player} - ${entry.tag}
                        <img src="${entry.image}" alt="${entry.player}">
                    </a>
                </li>`;
        });
        sectionElement.innerHTML = html;
        mainContainer.appendChild(sectionElement);
    });
}
// 4. STANDINGS
function updateStandings(standingsData) {
    if (!standingsData) return;

    standingsData.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.textContent = item.text;
        }
    });
}

// 5. RUN EVERYTHING ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    loadRecords();
});