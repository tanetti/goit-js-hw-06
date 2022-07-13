const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

const createElements = ingredients => {
  const childrenElements = [];

  ingredients.forEach(ingredient => {
    const newElement = document.createElement('li');
    newElement.textContent = ingredient;
    newElement.classList.add('item');
    childrenElements.push(newElement);
  });

  listRef.append(...childrenElements);
};

createElements(ingredients);
