# IIIT Vadodara Campus Event Board

## CS445 – Web Programming | Assignment 6 + Assignment 7

## 1. Project Overview

The **IIIT Vadodara Campus Event Board** is a web-based project developed as part of the CS445 Web Programming course.

The project allows students to view campus events dynamically. It demonstrates JavaScript language basics, DOM manipulation, event handling, search, form validation, Fetch API, and structured data using JSON and XML.

## 2. Assignment Objectives

### Assignment 6 – JavaScript, DOM, Events, Fetch & Validation

- Declare variables using `const` and `let`.
- Store event information as an array of objects.
- Use conditional statements to determine event status.
- Process events using a `for...of` loop.
- Create functions with parameters and return values.
- Use arrow functions and array methods such as `filter()`.
- Understand variable scope.
- Select HTML elements using DOM selection methods.
- Create and display event cards dynamically.
- Change content, classes, styles, and attributes using JavaScript.
- Add a hamburger menu using click events.
- Understand `event.target` and event bubbling.
- Search events while typing and clear search using Escape.
- Load event data using Fetch API with loading, success, and error states.
- Validate the registration form using HTML validation and `setCustomValidity()`.
- Test the webpage and JavaScript using browser DevTools.

### Assignment 7 – JSON & XML

- Store campus event data in JSON and XML files.
- Load JSON data using the Fetch API.
- Parse XML data using `DOMParser`.
- Convert JavaScript objects to JSON strings using `JSON.stringify()`.
- Read and display JSON/XML information.
- Calculate and compare JSON and XML file sizes.
- Understand JSON and XML validation and schemas.

## 3. Project Files

| File | Description |
|---|---|
| `index.html` | Main webpage of the Campus Event Board |
| `style.css` | Styling and responsive layout |
| `script.js` | JavaScript functionality for Assignments 6 and 7 |
| `events.json` | Campus event data in JSON format |
| `events.xml` | Campus event data in XML format |
| `README.md` | Project documentation |
| `NOTES.pdf` | Assignment explanations, answers, and code appendix |

## 4. Assignment 6 Implementation

### Section A – Language Basics & Logic

| Task | Implementation |
|---|---|
| A1–A2: Variables and data types | `const`, `let`, string, number, and boolean |
| A3: Event data | Array of event objects containing `title`, `date`, `seats`, and `online` |
| A4: Control flow | `getStatus()` returns Full, Few left, or Open |
| A5: Loop | `for...of` processes every event |
| A6: Function | `formatEvent(event)` returns a readable event string |
| A7: Arrow function | `availableEvents()` uses `filter()` to find events with available seats |
| A8: Scope | Variables are declared in the smallest suitable scope |

### Section B – DOM, Events, Fetch & Validation

| Task | Implementation |
|---|---|
| B1: Select elements | `querySelector()`, `querySelectorAll()`, and `getElementById()` |
| B2: Render events | Event cards are created using `createElement()`, `textContent`, and `appendChild()` |
| B3: Change content | `classList`, `style`, and `setAttribute()` update event card states |
| B4: Click event | Hamburger menu toggles navigation using `addEventListener()` and `classList.toggle()` |
| B5: Event object | RSVP buttons use `event.target`; event delegation demonstrates bubbling |
| B6: Search | Input listener filters event titles; Escape clears the search |
| B7: Fetch | JSON data is loaded using `fetch()` and `async/await`, with loading, success, and error handling |
| B8: Form validation | Built-in validation, `pattern`, `setCustomValidity()`, `checkValidity()`, and `preventDefault()` |
| B9: DevTools | Console output is used to inspect event data and JavaScript behavior |

## 5. Assignment 7 Implementation

### JSON (`events.json`)

- Stores events as an array of objects.
- Each event includes an ID, title, date, available seats, and online status.
- JSON data is fetched and rendered dynamically on the webpage.

### XML (`events.xml`)

- Stores matching event information using XML elements.
- XML is loaded using Fetch API and parsed with `DOMParser`.
- The first event title is displayed on the webpage.

### JSON/XML Comparison

- `JSON.stringify()` converts event data into a JSON string.
- `Blob` is used to calculate the JSON and XML file sizes in bytes.
- The webpage displays the JSON and XML file-size comparison.

## 6. Technologies Used

- **HTML5:** Webpage structure and form.
- **CSS3:** Styling and responsive design.
- **JavaScript:** Logic, DOM manipulation, events, search, and validation.
- **JSON:** Structured campus event data.
- **XML:** Structured event data in XML format.
- **VS Code:** Development environment.
- **Live Server:** Local web server for running the project.

## 7. How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Keep `index.html`, `style.css`, `script.js`, `events.json`, and `events.xml` in the correct project locations.
4. Install the Live Server extension if it is not installed.
5. Right-click `index.html`.
6. Select **Open with Live Server**.
7. The Campus Event Board will open in the browser.

**Note:** Use Live Server instead of directly opening the HTML file because Fetch API requires a web server to load JSON and XML files correctly.



### Assignment 6

- Event cards rendered from data.
- Search filter working.
- Fetch loading state.
- Fetch success state with events displayed.
- Fetch error state with a friendly message.
- Registration form validation error.
- Registration form after correcting the input.
- Browser DevTools Console output.

### Assignment 7

- JSON event data and dynamically rendered events.
- XML title displayed after parsing.
- JSON and XML file-size comparison.

## 9. Learning Outcomes

After completing these assignments, I learned:

- How to use `const` and `let` and understand variable scope.
- How to model event data using arrays and objects.
- How to use conditions, loops, functions, and arrow functions.
- How to manipulate HTML elements using the DOM.
- How to handle click, input, and keyboard events.
- How event bubbling and `event.target` work.
- How to fetch and process JSON data asynchronously.
- How to validate forms using built-in and custom validation.
- How to parse XML using `DOMParser`.
- How to convert JSON data and compare JSON/XML file sizes.
- How to test JavaScript using browser DevTools.

## 10. GitHub Repository

- **Repository link:** https://github.com/jannatverma/event-board
- **GitHub Pages link:** https://jannatverma.github.io/event-board/

The repository contains the project files and an updated README. Changes are maintained with readable commit messages.

## 11. Conclusion

The IIIT Vadodara Campus Event Board demonstrates the practical use of JavaScript, DOM manipulation, events, Fetch API, form validation, JSON, and XML in web development. These assignments helped me understand how to build an interactive webpage that loads and displays structured event data dynamically.

---

**Course:** CS445 – Web Programming  
**Project:** IIIT Vadodara Campus Event Board  
**Assignments:**  – JavaScript & DOM | 7 – JSON & XML  

