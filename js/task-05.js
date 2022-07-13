const refs = {
  nameInprut: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};

const changeOutputName = event => (refs.nameOutput.textContent = event.currentTarget.value || 'Anonymous');

refs.nameInprut.addEventListener('input', changeOutputName);
