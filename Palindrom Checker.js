function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
}

function palindromeChecker() {
    const inputText = document.getElementById("inputType");
    const result = document.getElementById("result");

    if (inputText.value === "") { // Check if the input is empty
        result.textContent = `Enter a value`;
        result.style.color = "red";
        return; // Stop further execution
    }

    if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a Palindrome`;
        result.style.color = "green";
    } else {
        result.textContent = `"${inputText.value}" is Not a Palindrome`;
        result.style.color = "red";
    }

    result.classList.add('fadeIn');
    inputText.value = ""; // Clear the input field
}

// Add event listeners
document.getElementById('CheckButton').addEventListener("click", palindromeChecker);
document.getElementById('inputType').addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        palindromeChecker();
    }
});
