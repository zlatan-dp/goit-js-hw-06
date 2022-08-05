const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  //console.log(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const mailName = formElements.email.name;
  const passwordName = formElements.password.name;

  if (mail === '' || password === '') {
    return alert('Все поля должны быть заполнены!');
  }

  //console.log(mail, password);
  const formValues = {
    [mailName]: mail,
    [passwordName]: password,
  };

  console.log(formValues);
  form.reset();
}
