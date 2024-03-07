//your JS code here. If required.
// Find the element with the id "level"
let targetElement = document.getElementById("level");

// Function to determine the DOM level of an element
function getDOMLevel(element) {
    let level = 0;
    while (element !== document.documentElement) {
        level++;
        element = element.parentNode;
    }
    // Add 1 to include the root html element
    return level + 1;
}

// Get the DOM level of the target element
let domLevel = getDOMLevel(targetElement);

// Display the result
alert("The level of the element is: " + domLevel);