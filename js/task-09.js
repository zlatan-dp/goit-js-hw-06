function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

colorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
