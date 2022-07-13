const refs = {
  changeColorButton: document.querySelector('button.change-color'),
  colorText: document.querySelector('span.color-text'),
};

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
