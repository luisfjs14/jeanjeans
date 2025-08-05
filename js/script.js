document.addEventListener('DOMContentLoaded', () => {
  // CÓDIGO EXISTENTE DO SLIDER
  const sliderTrack = document.querySelector('.slider-track');
  const slides = Array.from(sliderTrack.children);
  const prevButton = document.querySelector('.slider-arrow.prev');
  const nextButton = document.querySelector('.slider-arrow.next');
  const dotsNav = document.querySelector('.slider-dots');
  const dots = Array.from(dotsNav.children);

  let currentSlideIndex = 0;

  const updateSlider = (index) => {
    sliderTrack.style.transform = 'translateX(-' + (index * 100 / slides.length) + '%)';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  };

  const nextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider(currentSlideIndex);
  };

  const prevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlider(currentSlideIndex);
  };

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSlider(currentSlideIndex);
    });
  });

  // NOVO: FUNÇÃO DO MENU SANDUÍCHE
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

// SLIDER DAS NOVIDADES
const trackNov = document.querySelector('.novidades-track');
const nextNov = document.querySelector('.next-nov');
const prevNov = document.querySelector('.prev-nov');

let indexNov = 0;

nextNov.addEventListener('click', () => {
  if (indexNov < 1) {
    indexNov++;
    trackNov.style.transform = `translateX(-${indexNov * 270}px)`;
  }
});

prevNov.addEventListener('click', () => {
  if (indexNov > 0) {
    indexNov--;
    trackNov.style.transform = `translateX(-${indexNov * 270}px)`;
  }
});

const catTrack = document.querySelector('.categorias-track');
const prevCat = document.querySelector('.prev-cat');
const nextCat = document.querySelector('.next-cat');

let catIndex = 0;

nextCat.addEventListener('click', () => {
  if (catIndex < 3) {
    catIndex++;
    catTrack.style.transform = `translateX(-${catIndex * 270}px)`;
  }
});

prevCat.addEventListener('click', () => {
  if (catIndex > 0) {
    catIndex--;
    catTrack.style.transform = `translateX(-${catIndex * 270}px)`;
  }
});
