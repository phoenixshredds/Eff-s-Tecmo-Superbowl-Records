# Eff's Tecmo Superbowl Records
 My Tecmo Superbowl Records Website

As of now I am using this file as a to-do list. Documentation to follow.

# User Stories - To Do:

Code quality:
    [] Validate HTML and adjust accordingly (Pages Done: [...])
    [] Utilize AI to refactor CSS (Pages Done: [...])
    [] Utilize AI to refactor JS (Pages Done: [...])
    [] Have a mentor provide feedback

[] Navigation: Condense individual and team records into dropdown menus.
    [] Style the dropdowns to match

[] Design laces & seams for football header

[] Create class for team logo colors: border ridge with primary team colors, make each team's color a var([][]variable[]name).
    [] Add to all records (Pages Done: [...])

[x] Latest Standings/Seasons below Nav 

[] Embedded highlight clips of TSB gameplay

[] Global search function with filters for teams, players, conferences, seasons, generations etc

[] Consider a flex alternative to grid with more simple code.

[x] Create a passer rating calculator with form inputs
    [x] Create Page
    [x] HTML/CSS Styles
    [x] Fit into layout
    [x] Text area box
    [x] User Stories
    [x] Logic for NFL passer rating
    [] Logic for TSB passer rating (if formula can be found)
        [] Bonus: Create a "NFL/TSB" switch to change the logic.

[] Right side interactive scroll menu of notable TSB players/records

[x] Soundboard page with soundboard player
    [] HTML structure with buttons, types and IDs for each sound
    [] CSS classes and styling
    [] JS for audio interactivity

[] JS Audio on record MouseClick: 1 "down", 2 "set", 3+ "hut"
    [] Use proper soundboard for record ("touchdown" "interception" "first down" "sack.")

[] Script to retrieve latest NFL scores
    [] Display where?...

[] Interactive football game
    [] Throwable football with mouseover and mousebutton interactivity
    [] Retro style (bonus if TSB sprites could be used)
    [] Score keeping

[] Scrollable football cards displaying major record holders

# Other Ideas:

[] Create Parent site "Eff's Tecmo Superbowl"
    [] Forum with member signup
    [] Custom ROM page to share rom downloads
    [] Online League Page (Original roster, latest rosters and original roster redrafts)

____________________________________________________
BUGS/IMPROVEMENTS/KINKS TO FIX:
[] Create a max[]width media query to prevent over[]stretching on ultrawide or having nav too far left (AND/OR) convert side nav to a column that floats left.
[] Default zoom is too close on mobile. Find a fix to either adjust the scale or zoom out the display. Alternatively, make side nav display at the top so its all one column. Update: Changing all pixels to em/percentages, will use media queries to make a single column view for mobile.
____________________________________________________

# DOCUMENTATION

This website is designed to keep track of Tecmo Superbowl records from the seasons played by Eff, Att, and Rew. 

The style is inspired by old newspapers with a football color scheme. It is a responsive grid design (via @media queries) with a side navigation menu.