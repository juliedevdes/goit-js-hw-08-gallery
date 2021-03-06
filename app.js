const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
//0 references obj
const refs = {
  ulGallery: document.querySelector(' ul.js-gallery'),
  closeBtn: document.querySelector('button[data-action="close-lightbox'),
  lightBox: document.querySelector('div.lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightBoxOver: document.querySelector('div.lightbox__overlay'),
};

//1 ?????????????? ????????????
const createGallery = function (arrayOfImgObj) {
  const htmlString = arrayOfImgObj
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`
    )
    .join('');
  refs.ulGallery.innerHTML = htmlString;
};
createGallery(galleryItems);

//2 ?????????????? ???????????????? ????????????????????
function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightBox.classList.add('is-open');
  refs.lightboxImg.src = event.target.dataset.source;
  window.addEventListener('keydown', onEscape);
}
refs.ulGallery.addEventListener('click', openModal);

//3 ?????????????? ???????????????? ????????????????????
function closeModal(event) {
  refs.lightBox.classList.remove('is-open');
  refs.lightboxImg.src = '';
  window.removeEventListener('keydown', onEscape);
}
refs.closeBtn.addEventListener('click', closeModal);

/* ???????????????? ???????????????????? ???????? ???? ?????????? ???? `div.lightbox__overlay`*/
refs.lightBoxOver.addEventListener('click', closeModal);

/* ???????????????? ???????????????????? ???????? ???? ?????????????? ?????????????? `ESC`*/
function onEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
