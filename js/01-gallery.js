import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryItemRef = document.createElement("a");
  galleryItemRef.classList.add("gallery__link");
  galleryItemRef.setAttribute("href", `${item.original}`);

  const galleryItemImg = document.createElement("img");
  galleryItemImg.classList.add("gallery__image");
  galleryItemImg.setAttribute("src", `${item.preview}`);
  galleryItemImg.setAttribute("data-source", `${item.original}`);
  galleryItemImg.setAttribute("alt", `${item.description}`);

  galleryItemRef.append(galleryItemImg);
  galleryItem.append(galleryItemRef);

  return galleryItem;
});

gallery.append(...galleryMarkup);

//------------------------Modal---------------------------//
gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  //--------Openning modal image
  const modalImg = basicLightbox.create(
    `<img class="modal__img" src="${event.target.dataset.source}" data-source="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  modalImg.show();
  //-----------------------------------

  //--------Closing modal image on keypress "ESC"
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modalImg.close();
    }
  });
});
