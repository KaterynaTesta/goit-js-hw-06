const input = document.querySelector('#validation-input');
console.log(input);
const lengthValueCheck = Number(input.getAttribute('data-length'));
console.log(lengthValueCheck);

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur => {
    if (onInputBlur.target.value.length === lengthValueCheck) {
        input.className = 'valid';
    } else input.className = 'invalid';

    console.log('Validation of input');
});

function onInputFocus() {
    console.log('Get focus');
}
function onInputBlur() {
    console.log('Get blur');
}
