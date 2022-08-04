const textInput = document.querySelector('#validation-input');
//console.log(textInput.dataset.length);

textInput.addEventListener('blur', evt => {
  if ((evt.currentTarget.value.length = textInput.dataset.length)) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
