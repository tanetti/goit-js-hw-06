const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);
console.log('\n');

const findInnerCategories = parrentElement => {
  let countOfElements = 0;

  // -------------------- V 1.0 --------------------

  // for (const childrenElement of parrentElement.children) {
  //   countOfElements += 1;
  //   console.group(`Element ${countOfElements}`);

  //   for (const innerChildrenElement of childrenElement.children) {
  //     if (innerChildrenElement.localName === 'h2') {
  //       console.log(`Category: ${innerChildrenElement.innerHTML}`);
  //     } else if (innerChildrenElement.localName === 'ul') {
  //       console.log(`Elements: ${innerChildrenElement.children.length}`);
  //     }
  //   }

  //   console.groupEnd();
  //   console.log('\n');
  // }

  // -------------------- V 2.0 --------------------

  parrentElement.childNodes.forEach(childrenElement => {
    if (childrenElement.localName === 'li') {
      countOfElements += 1;
      console.group(`Element ${countOfElements}`);

      childrenElement.childNodes.forEach(innerChildrenElement => {
        innerChildrenElement.localName === 'h2' && console.log(`Category: ${innerChildrenElement.innerHTML}`);
        innerChildrenElement.localName === 'ul' && console.log(`Elements: ${innerChildrenElement.children.length}`);
      });

      console.groupEnd();
      console.log('\n');
    }
  });
};

findInnerCategories(categories);
