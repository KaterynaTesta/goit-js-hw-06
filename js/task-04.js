const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
let counterValue = 0;
const value = document.getElementById('value');

function incrementCount() {
    counterValue += 1;
    value.textContent = counterValue;
}
function decrementCount() {
    counterValue -= 1;
    value.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrementCount);
btnIncrement.addEventListener('click', incrementCount);
