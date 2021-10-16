const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(fontSizeControl);
console.log(text);
fontSizeControl.addEventListener('input', OnFontSizeChange);

function OnFontSizeChange() {
    text.style.fontSize = `${event.target.value}px`;
}
