const refs = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  elementsToCreate: document.querySelector('div#controls').firstElementChild,
  boxesArea: document.querySelector('div#boxes'),
};

const BOX_START_DIMENSION = 30;
const BOX_ENLARGE_STEP = 10;

// Turn off destroy button
refs.destroyButton.disabled = true;
// Autofocus to els field
refs.elementsToCreate.focus();

// Add hint to buttons
refs.createButton.textContent += ' (Enter)';
refs.destroyButton.textContent += ' (Enter/Esc)';


const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;


const createBoxes = amount => {
  let boxesMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    const boxDimension = BOX_START_DIMENSION + i * BOX_ENLARGE_STEP;

    boxesMarkup += `<div style="width: ${boxDimension}px; height: ${boxDimension}px; background-color: ${getRandomHexColor()}"></div>`;
  }

  refs.boxesArea.innerHTML = boxesMarkup;
};


const destroyBoxes = () => (refs.boxesArea.innerHTML = '');


const toggleControlsState = () => {
  refs.elementsToCreate.value = '';
  refs.elementsToCreate.disabled = !refs.elementsToCreate.disabled;
  refs.createButton.disabled = !refs.createButton.disabled;
  refs.destroyButton.disabled = !refs.destroyButton.disabled;
};


const onWindowKeyDown = ({ code }) => {
  if (!refs.createButton.disabled) {
    (code === 'NumpadEnter' || code === 'Enter') && onCreateButtonClick();
  } else {
    (code === 'NumpadEnter' || code === 'Enter' || code === 'Escape') && onDestroyButtonClick();
    refs.elementsToCreate.focus();
  }
};


const onCreateButtonClick = () => {
  const { value, min, max } = refs.elementsToCreate;
  const valueNumber = Number(value);

  if (!value) {
    alert('Please enter a Number of elements to create!');
    return;
  } else if (valueNumber < min || valueNumber > max) {
    alert(`Number of elements to create, must be set between ${min} and ${max}!`);
    refs.elementsToCreate.value = '';
    return;
  }

  createBoxes(valueNumber);
  toggleControlsState();
};


const onDestroyButtonClick = () => {
  destroyBoxes();
  toggleControlsState();
};


window.addEventListener('keydown', onWindowKeyDown);
refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
