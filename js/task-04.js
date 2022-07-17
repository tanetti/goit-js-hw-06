const refs = {
  counterButtons: document.querySelectorAll('[data-action]'),
  valueField: document.querySelector('span#value'),
};

let counterValue = 0;

const onIncrementCouterButtonClick = () => {
  counterValue += 1;
  updateCounerValue();
};

const onDecrementCouterButtonClick = () => {
  counterValue -= 1;
  updateCounerValue();
};

const updateCounerValue = () => (refs.valueField.textContent = counterValue);

refs.counterButtons.forEach(button => {
  if (button.dataset.action === 'increment') {
    button.addEventListener('click', onIncrementCouterButtonClick);
  } else if (button.dataset.action === 'decrement') {
    button.addEventListener('click', onDecrementCouterButtonClick);
  }
});
