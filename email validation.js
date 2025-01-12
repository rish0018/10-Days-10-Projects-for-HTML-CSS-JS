// Get references to the elements
let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

// Function to check the email
function checker() {
    icon.style.display = "inline-block"; // Show the icon
    let email = emailId.value.trim(); // Fixed incorrect property usage
    if (email === "") { // Check for empty input
        icon.style.display = "none"; // Hide the icon
        errorMsg.style.display = 'none'; // Hide the error message
        emailId.style.border = "2px solid #d1d3d4"; // Reset the border
    } else if (validateEmail(email)) { // Check if the email is valid
        icon.innerHTML = '<i class="fas fa-check-circle"></i>'; // Add a success icon
        icon.style.color = '#2ecc71'; // Set success color
        errorMsg.style.display = "none"; // Hide the error message
        emailId.style.border = "2px solid #2ecc71"; // Set success border
    } else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>'; // Add an error icon
        icon.style.color = '#ff2851'; // Set error color
        errorMsg.style.display = "block"; // Show the error message
        emailId.style.border = "2px solid #ff2851"; // Set error border
    }
}

// Function to validate the email format
function validateEmail(email) {
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf("."); // Use lastIndexOf for better validation
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}
