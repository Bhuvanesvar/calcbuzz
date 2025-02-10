// Function to append value to the display when button is clicked
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression in the display
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to delete a single character from the display
function deleteCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Removes the last character
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow only valid keys (numbers, operators, and control keys)
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.', 'Enter', 'Backspace', 'Delete'];
    
    if (validKeys.includes(key)) {
        if (key === 'Enter') {
            calculate();  // Trigger calculation when Enter is pressed
        } else if (key === 'Backspace' || key === 'Delete') {
            deleteCharacter();  // Delete the last character on Backspace or Delete key press
        } else {
            appendToDisplay(key);  // Append the pressed key to the display
        }
    }
});
