const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);
console.log('\n');

const categorySummary = parrentEl => {
  let countOfElements = 0;

  for (const childrenElement of parrentEl.children) {
    countOfElements += 1;

    console.group(`Element ${countOfElements}`);

    for (const childrenInnerElement of childrenElement.children) {
      if (childrenInnerElement.localName === 'h2') {
        console.log(`Category: ${childrenInnerElement.innerHTML}`);
      } else if (childrenInnerElement.localName === 'ul') {
        console.log(`Elements: ${childrenInnerElement.children.length}`);
      }
    }

    console.groupEnd();
    console.log('\n');
  }
};

categorySummary(categories);
