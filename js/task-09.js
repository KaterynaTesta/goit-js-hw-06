const body = document.querySelector('body');
const bgColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
changeColor.addEventListener('click', OnBodyRandomColor);

function OnBodyRandomColor(event) {
    event.preventDefault();
    body.style.background = getRandomHexColor();
    bgColor.textContent = getRandomHexColor();
}
