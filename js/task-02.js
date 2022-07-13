const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('ul#ingredients');

const createElements = ingredients => {
  const childrenElements = ingredients.map(ingredient => {
    const newElement = document.createElement('li');
    newElement.textContent = ingredient;
    newElement.classList.add('item');
    return newElement;
  });

  listRef.append(...childrenElements);
};

createElements(ingredients);
