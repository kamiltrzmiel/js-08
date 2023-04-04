import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeGallery = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join('');
};

galleryEl.innerHTML = makeGallery();

const galleryInstance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
