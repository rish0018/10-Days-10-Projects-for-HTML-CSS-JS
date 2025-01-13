function detectChar() {
    const input = document.getElementById("inputText").value.trim(); // Trim whitespace
    const resultElement = document.getElementById("result");

    if (input.length === 1) { // Ensure a single character is entered
        const uniCode = input.charCodeAt(0);
        const result = `The Unicode value of "${input}" is "${uniCode}"`;
        resultElement.textContent = result;
        resultElement.style.color = "black"; // Optional: Set color to indicate success
    } else if (input.length === 0) {
        resultElement.textContent = "Please enter a character.";
        resultElement.style.color = "red"; // Optional: Set color for error
    } else {
        resultElement.textContent = "Please enter only one character.";
        resultElement.style.color = "blue"; // Optional: Set color for error
    }
}

// Add event listeners
document.getElementById("inputText").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        detectChar();
    }
});
