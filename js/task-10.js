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
  let boxesDimension = BOX_START_DIMENSION;

  for (let i = 1; i <= amount; i += 1) {
    boxesMarkup += `<div style="width: ${boxesDimension}px; height: ${boxesDimension}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesDimension += BOX_ENLARGE_STEP;
  }

  refs.boxesArea.insertAdjacentHTML('afterbegin', boxesMarkup);
};

const destroyBoxes = () => (refs.boxesArea.innerHTML = '');

const onWindowKeyDown = ({ code }) => {
  if (!refs.createButton.disabled) {
    (code === 'NumpadEnter' || code === 'Enter') && onCreateButtonClick();
  } else {
    (code === 'NumpadEnter' || code === 'Enter' || code === 'Escape') && onDestroyButtonClick();
    refs.elementsToCreate.focus();
  }
};

const onCreateButtonClick = () => {
  const els = refs.elementsToCreate;

  if (!els.value) {
    alert('Please enter a Number of elements to create!');
    return;
  } else if (Number(els.value) < Number(els.min) || Number(els.value) > Number(els.max)) {
    alert(`Number of elements to create, must be set between ${els.min} and ${els.max}!`);
    refs.elementsToCreate.value = '';
    return;
  }

  createBoxes(Number(els.value));
  refs.elementsToCreate.value = '';
  refs.elementsToCreate.disabled = true;
  refs.createButton.disabled = true;
  refs.destroyButton.disabled = false;
};

const onDestroyButtonClick = () => {
  destroyBoxes();
  refs.elementsToCreate.disabled = false;
  refs.createButton.disabled = false;
  refs.destroyButton.disabled = true;
};

window.addEventListener('keydown', onWindowKeyDown);
refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);
