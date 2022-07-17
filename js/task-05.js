const refs = {
  nameInprut: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};

const onNameInputValueChange = ({ currentTarget }) => (refs.nameOutput.textContent = currentTarget.value || 'Anonymous');

refs.nameInprut.addEventListener('input', onNameInputValueChange);
