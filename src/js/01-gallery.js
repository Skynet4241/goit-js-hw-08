// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems
  .map(item => {
    return `<div class="gallery__item"> 
  <a class="gallery__link" href = "${item.original}">
  <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`;
  })
  .join('');
galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
