const categoriesNum = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesNum.length}`);

const categoriesNames = document.querySelectorAll('h2');

const firstElementsNum = categoriesNum[0].querySelectorAll('li');

const secondElementsNum = categoriesNum[1].querySelectorAll('li');

const thirdElementsNum = categoriesNum[2].querySelectorAll('li');

console.log(`Category: ${categoriesNames[0].textContent}
Elements: ${firstElementsNum.length}`);

console.log(`Category: ${categoriesNames[1].textContent}
Elements: ${secondElementsNum.length}`);

console.log(`Category: ${categoriesNames[2].textContent}
Elements: ${thirdElementsNum.length}`);
