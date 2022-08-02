const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingrList = ingredients.map(ingredient => {
  const ingrLi = document.createElement('li');
  ingrLi.textContent = ingredient;
  ingrLi.classList.add('item');

  return ingrLi;
});

// console.log(ingrList);

const ingridientsEl = document.querySelector('#ingredients');

ingridientsEl.append(...ingrList);
