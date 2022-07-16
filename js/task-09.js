const refs = {
  changeColorButton: document.querySelector('button.change-color'),
  colorText: document.querySelector('span.color'),
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;

const applyGeneratedColor = generatedColor => {
  refs.colorText.textContent = generatedColor;
  document.body.style.backgroundColor = generatedColor;
};
    
const onChangeColorButtonClick = () => applyGeneratedColor(getRandomHexColor());

refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);
