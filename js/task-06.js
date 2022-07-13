const validationInputRef = document.querySelector('input#validation-input');

const onValidationInputBlur = ({ currentTarget: input }) =>
  input.value.length == input.dataset.length ? (input.classList.value = 'valid') : (input.classList.value = 'invalid');

validationInputRef.addEventListener('blur', onValidationInputBlur);
