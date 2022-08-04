let counterValue = 0;

const counterValueEl = document.querySelector('#value');

const btnDecrement = document.querySelector('[data-action="decrement"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

const btnIncrement = document.querySelector('[data-action="increment"]');

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
