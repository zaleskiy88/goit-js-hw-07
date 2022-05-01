import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

//------------------------Modal---------------------------//
gallery.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  //--------Openning modal image
  const modalImg = basicLightbox
    .create(
      `<img class="modal__img" src="${event.target.dataset.source}" data-source="${event.target.dataset.source}" alt="${event.target.alt}">`,
      //--------Closing modal image on keypress "ESC"
      {
        onShow: (modalImg) =>
          document.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
              modalImg.close();
            }
          }),
        onclose: (modalImg) =>
          document.removeEventListener("keydown", (event) => {
            if (event.code === "Escape") {
              modalImg.close();
            }
          }),
      }
    )
    .show();
  //-----------------------------------
});
