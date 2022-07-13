const refs = {
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  elementsToCreate: document.querySelector('div#controls').firstElementChild,
  boxesArea: document.querySelector('div#boxes'),
};

const BOX_START_DIMENSION = 30;
const BOX_ENLARGE_STEP = 10;

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, '0')}`;

const onCreateButtonClick = () => {
  const els = refs.elementsToCreate;

  if (!els.value) {
    alert('Please enter a Numer of elements to create!');
    return;
  } else if (Number(els.value) < Number(els.min) || Number(els.value) > Number(els.max)) {
    alert(`Number of elements to create, must be set between ${els.min} and ${els.max}!`);
    return;
  }

  createBoxes(Number(els.value));
};

const ondestroyButtonClick = () => {
  if (refs.elementsToCreate.value === '' && refs.boxesArea.innerHTML === '') {
    alert('Nothing to destroy!');
    return;
  }

  refs.elementsToCreate.value = '';
  destroyBoxes();
};

const createBoxes = amount => {
  let boxesMarkup = '';
  let boxesDimension = BOX_START_DIMENSION;

  for (let i = 1; i <= amount; i += 1) {
    boxesMarkup += `<div style="width: ${boxesDimension}px; height: ${boxesDimension}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesDimension += BOX_ENLARGE_STEP;
  }

  refs.elementsToCreate.value = '';
  destroyBoxes();
  refs.boxesArea.insertAdjacentHTML('afterbegin', boxesMarkup);
};

const destroyBoxes = () => (refs.boxesArea.innerHTML = '');

refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', ondestroyButtonClick);
