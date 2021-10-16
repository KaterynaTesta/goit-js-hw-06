const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');
console.log(output);

function onInPutChange(event) {
    if (input.value !== ``) {
        output.textContent = event.currentTarget.value;
    } else output.textContent = 'Anonymous';
}

input.addEventListener('input', onInPutChange);
