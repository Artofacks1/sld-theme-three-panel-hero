const fontSelector = document.getElementById('font-selector');
const colorSelector = document.getElementById('color-selector');
const outlineColorSelector = document.getElementById('outline-color-selector');
const backgroundColorSelector = document.getElementById('background-color-selector');
const inputText = document.getElementById('input-text');
const messageText = document.getElementById('font-info');
          
fontSelector.addEventListener('change', () => {
  inputText.style.fontFamily = fontSelector.value;
  updateMessage();
});
          
colorSelector.addEventListener('change', () => {
  inputText.style.color = colorSelector.value;
  updateMessage();
});
          
outlineColorSelector.addEventListener('change', () => {
  inputText.style.textShadow = `3px 3px 0 ${outlineColorSelector.value}, -3px 3px 0 ${outlineColorSelector.value}, 3px -3px 0 ${outlineColorSelector.value}, -3px -3px 0 ${outlineColorSelector.value}`;
  updateMessage();
});
backgroundColorSelector.addEventListener('change', () => {
  inputText.style.backgroundColor = backgroundColorSelector.value;
  updateMessage();
});

function updateMessage() {
  messageText.value = fontSelector.value
    + ", text color: " + colorSelector.value
    + ", outline color: " + outlineColorSelector.value
    + ", vehicle color: " + backgroundColorSelector.value;
}


