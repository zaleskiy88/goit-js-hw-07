import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryRef = document.createElement("a");
  galleryRef.classList.add("gallery__link");
  galleryRef.setAttribute("href", `${item.original}`);

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.setAttribute("src", `${item.preview}`);
  galleryImg.setAttribute("data-source", `${item.original}`);
  galleryImg.setAttribute("alt", `${item.description}`);

  galleryRef.append(galleryImg);
  galleryItem.append(galleryRef);

  return galleryItem;
});

gallery.append(...galleryMarkup);

//------------------------Modal---------------------------//

gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const modal = basicLightbox.create(
    `<img class="modal__img" src="${event.target.dataset.source}" data-source="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  modal.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
});
console.log();
