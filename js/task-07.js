const refs = {
  rangeInput: document.querySelector('input#font-size-control'),
  textField: document.querySelector('span#text'),
};

// set range-input to start position
refs.rangeInput.value = refs.rangeInput.min;

const onRangeInputChange = ({ currentTarget: range }) => (refs.textField.style.fontSize = `${range.value}px`);

refs.rangeInput.addEventListener('input', onRangeInputChange);
