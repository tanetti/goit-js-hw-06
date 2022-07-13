const categoriesListRef = document.querySelector('ul#categories');
const categoriesRef = categoriesListRef.querySelectorAll('li.item');
const fallbackMessage = 'Not Found!!!';

console.log(`Number of categories: ${categoriesRef.length}`);
console.log('\n');

const findInnerCategories = categories => {
  let countOfElements = 0;

  categories.forEach(category => {
    countOfElements += 1;
    console.group(`Element ${countOfElements}`);

    const categoryTitleRef = category.querySelector('h2');
    const categoryListRef = category.querySelector('ul');

    console.log(`Category: ${categoryTitleRef ? categoryTitleRef.textContent : fallbackMessage}`);
    console.log(`Elements: ${categoryListRef ? categoryListRef.children.length : fallbackMessage}`);

    console.groupEnd();
    console.log('\n');
  });
};

findInnerCategories(categoriesRef);
