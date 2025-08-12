document.addEventListener('DOMContentLoaded', () => {
  // Slider principal - só executa se existir
  const sliderTrack = document.querySelector('.slider-track');
  const prevButton = document.querySelector('.slider-arrow.prev');
  const nextButton = document.querySelector('.slider-arrow.next');
  const dotsNav = document.querySelector('.slider-dots');

  if (sliderTrack && prevButton && nextButton && dotsNav) {
    const slides = Array.from(sliderTrack.children);
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
  }

  // Menu sanduíche - agora funciona em todas as páginas
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});
