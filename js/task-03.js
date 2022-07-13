const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const GALLERY_ITEM_CLASS = 'gallery__item';
const GALLERY_IMAGE_CLASS = 'gallery__image';
const GALLERY_IMAGE_WIDTH = 420;
const GALLERY_IMAGE_HEIGHT = 250;

const galleryListRef = document.querySelector('ul.gallery');

const createGalleryMarkup = images => {
  const imagesMarkup = images.map(({ url, alt }) => {
    return `<li class="${GALLERY_ITEM_CLASS}">
              <img
                class="${GALLERY_IMAGE_CLASS}"
                src="${url}"
                width="${GALLERY_IMAGE_WIDTH}"
                height="${GALLERY_IMAGE_HEIGHT}"
                alt="${alt}"
              />
            </li>`;
  });

  return imagesMarkup.join('');
};

galleryListRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(images));
