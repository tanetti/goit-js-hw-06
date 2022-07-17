const refs = {
  counterButtons: document.querySelectorAll('[data-action]'),
  valueField: document.querySelector('span#value'),
};

let counterValue = 0;

const onCouterButtonClick = ({ currentTarget: { dataset } }) => {
  if (dataset.action === 'increment') counterValue += 1;
  if (dataset.action === 'decrement') counterValue -= 1;

  refs.valueField.textContent = counterValue;
};

refs.counterButtons.forEach(button => button.addEventListener('click', onCouterButtonClick));
