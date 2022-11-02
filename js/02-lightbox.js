import { galleryItems } from './gallery-items.js';
// Change code below this line

const  galleryPictures= document.querySelector(".gallery");

createGallery();

function createGallery() {
  const list = galleryItems.map((img) =>
    `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>`).join("");
galleryPictures.insertAdjacentHTML("afterbegin", list); 
}

galleryPictures.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  let lightbox = new SimpleLightbox('.gallery a',
    {
      captions: true,
      captionSelector: 'img',
      captionsData: 'alt',
      captionDelay: 250
    });
  return
};