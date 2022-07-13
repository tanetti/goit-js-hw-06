const refs = {
  changeColorButton: document.querySelector('button.change-color'),
  colorText: document.querySelector('span.color'),
  body: document.body,
};

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onChangeColorButtonClick = () => {
  refs.colorText.textContent = refs.body.style.backgroundColor = getRandomHexColor();
};

refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);
