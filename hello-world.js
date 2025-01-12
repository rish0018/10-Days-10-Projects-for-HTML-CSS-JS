const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');

//listener
btnElement.onclick = function(){
    const yourName = prompt("Enter your Name");
    spanElement.textContent =yourName;
}