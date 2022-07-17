const validationInputRef = document.querySelector('input#validation-input');

const onValidationInputBlur = ({ currentTarget: { value, dataset, classList } }) => {
  const classes = ['valid', 'invalid'];

  value.length != dataset.length && classes.reverse();

  classList.contains(classes[1]) && classList.remove(classes[1]);
  classList.add(classes[0]);
};

validationInputRef.addEventListener('blur', onValidationInputBlur);
