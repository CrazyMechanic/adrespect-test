const itemImages = document.querySelectorAll('.item-img');
const itemBtnMore = document.querySelector('#more');
const itemBtnLess = document.querySelector('#less');
const itemOverlay = document.querySelector('.item-overlay');
const projectsImgContainer = document.querySelector('.projects__img-container');
const slides = document.getElementsByClassName('slide__item');
const container = document.querySelector('.item-container');
// const item = document.querySelector('.item');
const carouselInner = document.querySelector('#carousel-inner');
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const imgArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
let startingIndex = 0;
let slideIndex = 1;

let msnry = new Masonry(container, {
  percentPosition: true,
  horizontalOrder: true,
  gutter: 43,
  columnWidth: '.item',
  // columnWidth: 204,
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


itemImages.forEach((img, index) => {
  img.dataset.bsTarget = '#exampleModal';
  img.dataset.bsToggle = 'modal';

  img.addEventListener('click', () => {
    startingIndex = index;
    createImg(startingIndex);
  });
});

itemBtnMore.addEventListener('click', () => {
  projectsImgContainer.style.height = 'auto';
  itemOverlay.style.display = 'none';
  itemBtnMore.style.display = 'none';
  itemBtnLess.style.display = 'block';
  itemBtnLess.style.backgroundColor = 'white';
});

itemBtnLess.addEventListener('click', () => {
  projectsImgContainer.style.height = '1475px';
  itemOverlay.style.display = 'block';
  itemBtnMore.style.display = 'block';
  itemBtnLess.style.display = 'none';

});

searchBtn.addEventListener('click', () => {
  if (search.dataset.counter !== '0') {
    search.className = 'd-none mb-3';
    search.classList.remove('active');
    search.dataset.counter = '0';
  } else {
    search.className = 'd-flex mb-3';
    search.classList.add('active');
    search.dataset.counter = '1';
  }
});
