const refs = {
  rangeInput: document.querySelector('input#font-size-control'),
  textContent: document.querySelector('span#text'),
};

// Set range-input to start position
refs.rangeInput.value = refs.rangeInput.min;

const onRangeInputChange = ({ currentTarget }) => (refs.textContent.style.fontSize = `${currentTarget.value}px`);

refs.rangeInput.addEventListener('input', onRangeInputChange);
