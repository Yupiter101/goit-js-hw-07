import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galaryRef = document.querySelector(".gallery");

// === создание коллекции =====
function createGalary(galary) {
    const newGalleryItems = galary.map( ({preview, original, description}) => {
    // li
    const galaryItem = document.createElement('li');
    galaryItem.classList.add("gallery__item");
    // a
    const galleryLink = document.createElement('a');
    galleryLink.classList.add("gallery__link");
    galleryLink.setAttribute('href', original);
    // img 
    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery__image");
    galleryImage.src = preview;
    // galleryImage.setAttribute('data-source', original);
    // console.log(galleryImage);
    galleryImage.alt = description;

    galleryLink.append(galleryImage);
    galaryItem.append(galleryLink);
    // console.log(galaryItem);
    // galaryRef.append(galaryItem);
    // newGalleryItems.push(galaryItem);
    return galaryItem;
  });
  galaryRef.append(...newGalleryItems);
}

createGalary(galleryItems);
// === создание коллекции /конец=====


// galaryRef.addEventListener('click', onShowImg);

// function onShowImg(event) {
//     const options = {
//         captionsData: "alt",
//         captionDelay: 250,
//     };
//     event.preventDefault();
//     if(event.target.nodeName !== "IMG") {
//         console.log('мимо');
//         return
//     }
//     var lightbox = new SimpleLightbox('.gallery a', options);    
//     console.log('попал');
// }


const options = {
            captionsData: "alt",
            captionDelay: 250,
        };
var lightbox = new SimpleLightbox('.gallery a', options);
