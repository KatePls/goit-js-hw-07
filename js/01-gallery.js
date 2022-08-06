import { galleryItems } from './gallery-items.js';

const  galleryPictures= document.querySelector(".gallery");

createGallery();

function createGallery() {
  const list = galleryItems.map((img) =>
  `<div class="gallery__item">
      <a class="gallery__link" href="${img.original}" target="_self">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </div>`).join("");
galleryPictures.insertAdjacentHTML("afterbegin", list); 
}

galleryPictures.addEventListener("mousedown", selectImage);

function selectImage(event) {
  console.log("event.target: ", event.target);
  galleryItems.map((img) => {
    if (event.target.src === img.preview) {
      console.log(img.original);
      const instance = basicLightbox.create(`
        <img class="gallery__link" src="${img.original}" width="800" height="600">`);
      instance.show();
      return;
    };
  });
};
