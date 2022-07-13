const refs = {
  counterButtons: document.querySelectorAll('[data-action]'),
  valueField: document.querySelector('span#value'),
};

let counterValue = 0;

const onIncrementCouterButtonClick = () => (refs.valueField.textContent = counterValue += 1);
const onDecrementCouterButtonClick = () => (refs.valueField.textContent = counterValue -= 1);

refs.counterButtons.forEach(
  button =>
    (button.dataset.action === 'increment' && button.addEventListener('click', onIncrementCouterButtonClick)) ||
    (button.dataset.action === 'decrement' && button.addEventListener('click', onDecrementCouterButtonClick))
);
