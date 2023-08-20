let slides = document.getElementsByClassName('slide__item');
let container = document.querySelector('.item-container');
let carouselInner = document.querySelector('#carousel-inner');
let imgArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let startingIndex = 0;
let slideIndex = 1;

let msnry = new Masonry(container, {
  horizontalOrder: true,
  gutter: 43,
  columnWidth: 204,
  itemSelector: '.item',
});

showSlides(slideIndex);

createImg();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function createImg(startIndex) {
  carouselInner.innerHTML = '';

  for (let i = 0; i <= imgArray.length - 1; i++) {
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');

    imgContainer.setAttribute('class', 'carousel-item');
    img.setAttribute('class', 'd-block w-100');
    img.setAttribute('alt', `project-${i}`);
    img.setAttribute('src', `assets/img/projects/Photo-${imgArray[i]}.jpg`);

    if (i === startIndex) {
      imgContainer.classList.add('active');
    }

    imgContainer.appendChild(img);
    carouselInner.appendChild(imgContainer);
  }
}

const itemImages = document.querySelectorAll('.item-img');

itemImages.forEach((img, index) => {
  img.dataset.bsTarget = '#exampleModal';
  img.dataset.bsToggle = 'modal';

  img.addEventListener('click', () => {
    startingIndex = index;
    createImg(startingIndex);
  });
});
