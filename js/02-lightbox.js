import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems.map(
    element => 
        `<a class="gallery__item" href="${element.original}">
        <img class="gallery__image" src="${element.preview}" data-source = "${element.original}" alt="${element.description} " />
      </a>`
    
)
.join("")

galleryRef.insertAdjacentHTML("afterbegin", markup)
let lightBox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250})


;

;

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

// // with jQuery nearly the same
// let gallery2 = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });




