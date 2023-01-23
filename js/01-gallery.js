import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery")

// const imageCreate = galleryItems.map(
//         (element) =>
//             `<div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//       <img 
//         class="gallery__image"
//         src= "${element.preview}"
//         data-source= "${element.original}";
//         alt = "${element.description}"
//       />
//     </a>
//   </div>`
//     )
//     .join("")

// galleryRef.insertAdjacentHTML("afterbegin", imageCreate)

// galleryRef.addEventListener("click", event => {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return
//     }
//     const createBigImg = event.target.dataset.source;
//     const instance = basicLightbox.create(`
//     	<img width="1400" height="900" src="${createBigImg}">
//     	`,
//         document.addEventListener("keydown", event =>{
//             if (event.code === "Escape") {
//                 instance.close()
//             }
//            })
    
//        ) 
//        instance.show()

       
    
// })








const markup = galleryItems.map(element => 
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source ="${element.original}"
        alt="${element.description}"
      />
    </a>
  </div>`)
  .join("")

  galleryRef.insertAdjacentHTML("afterbegin", markup)

  galleryRef.addEventListener("click", event => {
    event.preventDefault();
    const bigImage = event.target.dataset.source;
    if(event.target.nodeName !== "IMG"){
        return; 
    }
    
    const instance = basicLightbox.create(
        `<img width="1400" height="900" src="${bigImage}">`,

        document.addEventListener("keydown", event =>{
            if(event.code === "Escape"){
                instance.close();
            }
        })
    ) 
    instance.show();

  })