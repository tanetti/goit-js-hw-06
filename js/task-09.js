const refs = {
  changeColorButton: document.querySelector('button.change-color'),
  colorText: document.querySelector('span.color'),
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;

const onChangeColorButtonClick = () => {
  const currentColor = getRandomHexColor();

  refs.colorText.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
};

refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);
