import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galaryRef = document.querySelector(".gallery");
const newGalleryItems = [];

galleryItems.forEach(item => {
    // li
    const galaryItem = document.createElement('li');
    galaryItem.classList.add("gallery__item");
    // a
    const galleryLink = document.createElement('a');
    galleryLink.classList.add("gallery__link");
    galleryLink.setAttribute('href', item.original);
    // img 
    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.preview;
    galleryImage.setAttribute('data-source', item.original);
    // console.log(galleryImage);
    galleryImage.alt = item.description;

    galleryLink.append(galleryImage);
    galaryItem.append(galleryLink);
    // console.log(galaryItem);
    // galaryRef.append(galaryItem);
    newGalleryItems.push(galaryItem);
});
galaryRef.append(...newGalleryItems);


let instance;


galaryRef.addEventListener('click', onShowImg);

function onShowImg(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return
    }

    // из библиотеки
    instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600"> `);

    instance.show();

    document.addEventListener('keydown', onClose);
    console.log('add EventListener'); 
}




function onClose(e) {
    // console.log(e.type);
    if(e.code !== 'Escape') {
        return
    }

    document.removeEventListener('keydown', onClose);
    // showEl.removeEventListener('click', onClose);
    console.log('removed EventListener');
    instance.close();
}















// let instance;


// galaryRef.addEventListener('click', onShowImg);

// function onShowImg(event) {
//     event.preventDefault();
//     if(event.target.nodeName !== "IMG") {
//         return
//     }

//     // из библиотеки
//     instance = basicLightbox.create(`
//         <img src="${event.target.dataset.source}" width="800" height="600"> `);

//     instance.show();

//     document.addEventListener('keydown', onClose);
//     console.log('add EventListener'); 
// }




// function onClose(e) {
//     // console.log(e.type);
//     if(e.code !== 'Escape') {
//         return
//     }

//     document.removeEventListener('keydown', onClose);
//     // showEl.removeEventListener('click', onClose);
//     console.log('removed EventListener');
//     instance.close();
// }
