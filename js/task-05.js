const refs = {
  nameInprut: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};

const onNameInputValueChange = ({ currentTarget: input }) => (refs.nameOutput.textContent = input.value || 'Anonymous');

refs.nameInprut.addEventListener('input', onNameInputValueChange);
