import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item__wrapper");

  const galleryRef = document.createElement("a");
  galleryRef.classList.add("gallery__item");
  galleryRef.setAttribute("href", `${item.original}`);

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.setAttribute("src", `${item.preview}`);
  galleryImg.setAttribute("alt", `${item.description}`);

  galleryRef.append(galleryImg);
  galleryItem.append(galleryRef);

  return galleryItem;
});

gallery.append(...galleryMarkup);

//----------------------Modal--------------------

let gallerySimpleLightBox = new SimpleLightbox(".gallery a");
gallerySimpleLightBox.on("show.simplelightbox");
gallerySimpleLightBox.options.captionsData = "alt";
gallerySimpleLightBox.options.captionDelay = 250;
