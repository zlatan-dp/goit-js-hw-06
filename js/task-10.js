function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainer = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const numBoxesInput = document.querySelector('input');
let numBoxes = 0;

numBoxesInput.addEventListener('input', evt => {
  numBoxes = evt.currentTarget.value;
});

function createBoxes() {
  let amount = numBoxes;
  const boxEl = [];
  let boxWidth = 20;
  let boxHeight = 20;
  for (let i = 0; i < amount; i += 1) {
    boxWidth += 10;
    boxHeight += 10;

    const box = document.createElement('div');
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '10px';
    boxEl.push(box);
  }

  boxContainer.append(...boxEl);
}

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', () => {
  boxContainer.innerHTML = '';
});
