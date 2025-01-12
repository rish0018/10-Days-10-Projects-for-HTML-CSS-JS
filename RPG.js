const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy"); // Corrected name

const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|~`";
    let password = "";
    const lengthOfPassword = 10; // Corrected variable name and syntax
    for (let i = 0; i < lengthOfPassword; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordBox.value = password; // Set generated password in the input field
};

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => { // Corrected "clicl" to "click"
    const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy) {
        alert("No password to copy! Generate a password first.");
        return;
    }
    navigator.clipboard.writeText(passwordCopy).then(() => {
        alert("Password copied to clipboard!");
    });
});
