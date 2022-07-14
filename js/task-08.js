const loginFormRef = document.querySelector('form.login-form');

const onLoginFormSubmit = event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value) {
    alert('Please enter your Email address!');
    return;
  } else if (!password.value) {
    alert('Please enter your Password!');
    return;
  }

  const userCredentials = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(userCredentials);

  event.currentTarget.reset();
};

loginFormRef.addEventListener('submit', onLoginFormSubmit);
