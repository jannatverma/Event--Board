
/* =====================================================
   IIIT VADODARA CAMPUS EVENT BOARD
   CS445 - ASSIGNMENT 6 + ASSIGNMENT 7
   ===================================================== */


/* ================= A1 + A2: VARIABLES ================= */

// String
const boardTitle = "IIIT Vadodara Campus Event Board";

// Number
const defaultSeats = 30;

// Boolean
const isOnline = true;

// let: value can change
let totalEvents = 0;

// A3: Array of event objects (loaded from JSON)
let events = [];


/* ================= B1: SELECT ELEMENTS ================= */

const container = document.getElementById("json-events");

const jsonOutput = document.querySelector("#json-output");

const xmlTitle = document.querySelector("#xml-title");

const fileSize = document.querySelector("#file-size");

const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const eventForm = document.querySelector(".event-form");

const studentName = document.querySelector("#student-name");

const searchBox = document.querySelector("#event-search");

const navItems = document.querySelectorAll(".nav-links a");


/* ================= A4: IF / ELSE ================= */

// Decide event availability
function getStatus(event) {

    if (event.seats === 0) {
        return "Full";
    }

    else if (event.seats < 5) {
        return "Few left";
    }

    else {
        return "Open";
    }

}


/* ================= A6: FUNCTION + RETURN ================= */

// Function with parameter and return value
function formatEvent(event) {

    return `${event.title} - ${event.date} - ${getStatus(event)}`;

}


/* ================= A7: ARROW FUNCTION ================= */

// Arrow function + filter()
const availableEvents = () => {

    return events.filter(event => event.seats > 0);

};


/* ================= A5: FOR...OF LOOP ================= */

function processEvents() {

    for (const event of events) {

        console.log(formatEvent(event));

    }

}


/* ================= B2 + B3: RENDER JSON EVENT CARDS ================= */

function renderEvents(eventList) {

    if (!container) {
        console.error("Events container not found");
        return;
    }

    // Clear previous cards
    container.innerHTML = "";

    // Loop through events
    for (const event of eventList) {

        // Create event card
        const card = document.createElement("article");

        card.classList.add("event-card");

        // Event title
        const title = document.createElement("h3");

        title.textContent = event.title;

        // Event date
        const date = document.createElement("p");

        date.textContent = "Date: " + event.date;

        // Available seats
        const seats = document.createElement("p");

        seats.textContent = "Available Seats: " + event.seats;

        // Event status
        const status = document.createElement("p");

        status.textContent = "Status: " + getStatus(event);

        // Change classes and styles
        if (event.seats === 0) {

            card.classList.add("full");

            status.style.color = "red";

        }

        else if (event.seats < 5) {

            card.classList.add("few-left");

            status.style.color = "orange";

        }

        else {

            card.classList.add("open");

            status.style.color = "green";

        }

        // Add custom attribute
        card.setAttribute("data-event-title", event.title);

        // Online / Offline information
        const online = document.createElement("p");

        online.textContent = event.online
            ? "Mode: Online"
            : "Mode: Offline";

        // Create RSVP button
        const button = document.createElement("button");

        button.type = "button";

        button.classList.add("rsvp-button");

        button.textContent = event.seats === 0
            ? "Event Full"
            : "RSVP";

        button.disabled = event.seats === 0;

        // Append elements to card
        card.appendChild(title);

        card.appendChild(date);

        card.appendChild(seats);

        card.appendChild(status);

        card.appendChild(online);

        card.appendChild(button);

        // Append card to container
        container.appendChild(card);

    }

    // Display total events
    const info = document.getElementById("json-info");

    if (info) {

        info.textContent = "Total Events: " + eventList.length;

    }

}


/* ================= B4: HAMBURGER MENU ================= */

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const expanded = navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(expanded)
        );

        console.log("Menu toggled:", expanded);

    });

}


// Close menu after clicking navigation
navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks?.classList.remove("active");

        menuButton?.setAttribute("aria-expanded", "false");

    });

});


/* ================= B5: EVENT OBJECT + EVENT.TARGET ================= */

// Event delegation and event bubbling
if (container) {

    container.addEventListener("click", function (event) {

        const clickedElement = event.target.closest(".rsvp-button");

        if (!clickedElement || !container.contains(clickedElement)) {
            return;
        }

        // Find clicked event card
        const card = clickedElement.closest(".event-card");

        const eventTitle = card.getAttribute("data-event-title");

        console.log("RSVP clicked:", eventTitle);

        clickedElement.textContent = "Selected";

        clickedElement.classList.toggle("selected");

        const info = document.getElementById("json-info");

        if (info) {

            info.textContent = "Selected Event: " + eventTitle;

        }

    });

}


/* ================= B6: SEARCH + ESCAPE ================= */

// Search the Featured Events section
const searchInput = searchBox;


// Find the section containing the search box
function getFeaturedCards() {

    if (!searchInput) {
        return [];
    }

    let searchSection = searchInput.closest("section");

    // Fallback if the search box is not inside a section
    if (!searchSection) {

        searchSection =
            searchInput.closest(".featured-events") ||
            searchInput.parentElement?.parentElement;

    }

    if (!searchSection) {
        return [];
    }

    // Find cards only inside Featured Events
    const cards = searchSection.querySelectorAll(
        ".event-card, .featured-card, .event, article"
    );

    // Do not include the search input or its parent
    return Array.from(cards).filter(card => {

        return !card.contains(searchInput);

    });

}


// Input event: filter featured event cards
if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .trim()
            .toLowerCase();

        const featuredCards = getFeaturedCards();

        let visibleCount = 0;

        // Search through Featured Events cards
        featuredCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            const matches = cardText.includes(searchText);

            // Show matching cards and hide others
            card.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }

        });

        console.log("Search:", searchText);

        console.log("Matching featured events:", visibleCount);

        // Show message when no events match
        let noResults = document.getElementById("no-search-results");

        if (!noResults && searchInput.parentElement) {

            noResults = document.createElement("p");

            noResults.id = "no-search-results";

            noResults.textContent = "No matching events found.";

            searchInput.parentElement.appendChild(noResults);

        }

        if (noResults) {

            noResults.style.display =
                visibleCount === 0 ? "block" : "none";

        }

    });


    // Escape key clears search
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            searchInput.value = "";

            // Show all Featured Events again
            getFeaturedCards().forEach(function (card) {

                card.style.display = "";

            });

            const noResults = document.getElementById("no-search-results");

            if (noResults) {
                noResults.style.display = "none";
            }

            console.log("Search cleared");

        }

    });

}


/* ================= B7: LOAD JSON USING FETCH ================= */

async function loadJSON() {

    try {

        // Loading state
        if (container) {

            container.textContent = "Loading events...";

        }

        console.log("Loading events.json...");

        const response = await fetch("events.json");

        if (!response.ok) {

            throw new Error("JSON file not found");

        }

        const jsonText = await response.text();

        // Convert JSON text into JavaScript objects
        const loadedEvents = JSON.parse(jsonText);

        if (!Array.isArray(loadedEvents)) {

            throw new Error("JSON must contain an array");

        }

        // Check event data
        events = loadedEvents;

        totalEvents = events.length;

        // Success state
        console.log("JSON loaded successfully");

        console.log("Total Events:", totalEvents);

        // Render event cards
        renderEvents(events);

        console.log("First event:", events[0]?.title);

        console.log(
            "Seats of last event:",
            events[events.length - 1]?.seats
        );

        // Process all events
        processEvents();

        // Function return
        if (events.length > 0) {

            console.log(
                "Formatted event:",
                formatEvent(events[0])
            );

        }

        // Available events
        console.log("Available events:", availableEvents());

        // JSON round trip
        const jsonString = JSON.stringify(events, null, 2);

        console.log("JSON String:");

        console.log(jsonString);

        if (jsonOutput) {

            jsonOutput.textContent = jsonString;

        }

        // JSON file size
        const jsonSize = new Blob([jsonText]).size;

        window.jsonSize = jsonSize;

        checkFileSize();

    }
catch (error) {

    console.error("JSON Error:", error);

    if (container) {

        container.classList.add("fetch-error");

        container.textContent =
            "Sorry! Events could not be loaded. Please try again.";

    }

}
}


/* ================= B7: LOAD XML USING FETCH ================= */

async function loadXML() {

    try {

        const response = await fetch("events.xml");

        if (!response.ok) {

            throw new Error("XML file not found");

        }

        const xmlText = await response.text();

        // Parse XML
        const parser = new DOMParser();

        const xmlDoc = parser.parseFromString(
            xmlText,
            "application/xml"
        );

        // Check XML parsing errors
        if (xmlDoc.querySelector("parsererror")) {

            throw new Error("Invalid XML file");

        }

        // Read first event title
        const titles = xmlDoc.getElementsByTagName("title");

        if (titles.length > 0 && xmlTitle) {

            xmlTitle.textContent = titles[0].textContent;

        }

        // XML file size
        window.xmlSize = new Blob([xmlText]).size;

        checkFileSize();

        console.log("XML loaded successfully");

    }

    catch (error) {

        console.error("XML Error:", error);

        if (xmlTitle) {

            xmlTitle.textContent = "XML could not be loaded";

        }

    }

}


/* ================= B5: FILE SIZE COMPARISON ================= */

function checkFileSize() {

    if (
        window.jsonSize !== undefined &&
        window.xmlSize !== undefined &&
        fileSize
    ) {

        fileSize.textContent =
            `JSON Size: ${window.jsonSize} bytes | XML Size: ${window.xmlSize} bytes`;

    }

}


/* ================= B8: FORM VALIDATION ================= */

// Custom validation rule
if (studentName) {

    studentName.setAttribute(
        "pattern",
        "[A-Za-z ]{3,}"
    );

    studentName.setAttribute(
        "title",
        "Enter at least 3 letters"
    );

    studentName.addEventListener("input", function () {

        if (studentName.value.trim().length < 3) {

            studentName.setCustomValidity(
                "Name must contain at least 3 characters"
            );

        }

        else {

            studentName.setCustomValidity("");

        }

    });

}


// Validate registration form
if (eventForm) {

    eventForm.addEventListener("submit", function (event) {

        if (!eventForm.checkValidity()) {

            event.preventDefault();

            eventForm.reportValidity();

            console.log("Form validation failed");

        }

        else {

            event.preventDefault();

            console.log("Registration successful");

            alert("Registration submitted successfully!");

        }

    });

}


/* ================= B9: DEVTOOLS TESTING ================= */

console.log("================================");

console.log(boardTitle);

console.log("Online:", isOnline);

console.log("Default Seats:", defaultSeats);

console.log("Assignment 6 + 7 JavaScript loaded");

console.log("================================");


/* ================= RUN FUNCTIONS ================= */

// Load JSON and XML
loadJSON();

loadXML();
