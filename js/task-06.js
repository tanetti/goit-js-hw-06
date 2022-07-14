const validationInputRef = document.querySelector('input#validation-input');

const onValidationInputBlur = ({ currentTarget: { value, dataset, classList } }) =>
  value.length == dataset.length ? (classList.value = 'valid') : (classList.value = 'invalid');

validationInputRef.addEventListener('blur', onValidationInputBlur);
