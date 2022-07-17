const loginFormRef = document.querySelector('form.login-form');

const onLoginFormSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value) {
    alert('Please enter your Email address!');
    return;
  }
  if (!password.value) {
    alert('Please enter your Password!');
    return;
  }

  const userCredentialsObject = createUserCredentialsObject(email, password);
  console.log(userCredentialsObject);
  event.currentTarget.reset();
};

const createUserCredentialsObject = (email, password) => ({
  [email.name]: email.value,
  [password.name]: password.value,
});

loginFormRef.addEventListener('submit', onLoginFormSubmit);
