import { galleryItems } from './gallery-items.js';

const  galleryPictures= document.querySelector(".gallery");

createGallery();

function createGallery() {
  const galleryUl = document.createElement("ul");
  
  const list = galleryItems.map((img) => {
    const liElem = document.createElement("li");
    liElem.classList.add("gallery__item");
    const imgElem = document.createElement("img");
    imgElem.classList.add("gallery__image");
    imgElem.src = img.preview;
    imgElem.alt = img.description;
    liElem.append(imgElem);
    return liElem;
  });
  galleryUl.append(...list);
  galleryUl.classList.add("gallery");
  galleryPictures.append(galleryUl); 
}

galleryPictures.addEventListener("click", selectImage);

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
