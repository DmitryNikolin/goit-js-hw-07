import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = galleryItems
    .map(({ preview, original, description }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`)
    .join('');

console.log(galleryMarkup);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// gallery.addEventListener('click', onGalleryContainerClick);

// function createMarkup(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//             return `
//                 <li>
//                     <a class="gallery__item" href="${original}">
//                         <img
//                             class="gallery__image"
//                             src="${preview}"
//                             alt="${description}"
//                         />
//                     </a>
//                 </li>`})
//         .join('');
// }

// function onGalleryContainerClick(event) {
//     event.preventDefault();
// }

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const imageEl = galleryItems
// .map(({ preview, original, description }) =>
//     `<a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>`)
// .join('');

// galleryEl.insertAdjacentHTML('beforeend', imageEl);

// galleryEl.addEventListener('click', showBigImage);

// function showBigImage(evt) {
//     if (evt.target.nodeName === 'IMG') {
//         const lightbox = new SimpleLightbox('.gallery a', {
//             captionsData: 'alt',
//             captionDelay: 250,
//         });
//     }
// }

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const imageEl = galleryItems
// .map(({ preview, original, description }) =>
//     `<li><a class="gallery__item" href="${original}">
//         <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a></li>`)
// .join('');

// galleryEl.insertAdjacentHTML('beforeend', imageEl);

// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
// });