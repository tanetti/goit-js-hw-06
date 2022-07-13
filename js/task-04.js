const refs = {
  counterButtons: document.querySelectorAll('[data-action]'),
  valueHandler: document.querySelector('span#value'),
};

let counterValue = 0;

const incrementCouter = () => (refs.valueHandler.textContent = counterValue += 1);
const decrementCouter = () => (refs.valueHandler.textContent = counterValue -= 1);

refs.counterButtons.forEach(
  button =>
    (button.dataset.action === 'increment' && button.addEventListener('click', incrementCouter)) ||
    (button.dataset.action === 'decrement' && button.addEventListener('click', decrementCouter))
);
