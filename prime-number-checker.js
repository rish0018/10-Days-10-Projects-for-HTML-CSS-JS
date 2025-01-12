document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const resultMsg = document.getElementById("resultMessage");

    checkButton.addEventListener("click", function () {
        const number = parseInt(numberInput.value);
        if (isNaN(number)) {
            resultMsg.textContent = "Please enter number.";
            resultMsg.style.color = "red";
            return;
        }
        if (number < 1) {
            resultMsg.textContent = `${number} is not a positive number.`;
            resultMsg.style.color = "red";
            return;
        }
        if (number == 1) {  // Corrected here
            resultMsg.textContent = `${number} is an unique number.`;
            resultMsg.style.color = "blue";
            return;
        }
        if (isPrime(number)) {
            resultMsg.textContent = `${number} is a prime number.`;
            resultMsg.style.color = "green";
        } else {
            resultMsg.textContent = `${number} is not a prime number.`;
            resultMsg.style.color = "red";
        }
    });

    function isPrime(number) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
});
