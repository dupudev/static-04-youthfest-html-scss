/// Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});

/// Sticky Navbar

// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', () => {
//   nav.classList.toggle('sticky', window.scrollY > 350);
// });

/// Carousel

const carousel = document.querySelector('.carousel');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const arrows = document.querySelectorAll('.arrow');

let direction = null;

prev.addEventListener('click', () => {
  if (direction === -1 || direction === null) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }

  sliderContainer.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(25%)';
});

next.addEventListener('click', () => {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    direction = -1;
  } else if (direction === null) {
    direction = -1;
  }

  sliderContainer.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-25%)';
});

slider.addEventListener('transitionend', () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = '0.7s ease-in-out';
  });
});

window.addEventListener('loaded', () => {
  interval();
});

sliderContainer.addEventListener('mouseover', () => {
  clearInterval(interval);
});

sliderContainer.addEventListener('mouseleave', () => {
  interval = setInterval(autoSlide, 3000);
});

arrows.forEach((arrow) => {
  arrow.addEventListener('mouseover', () => {
    clearInterval(interval);
  });
  arrow.addEventListener('mouseleave', () => {
    interval = setInterval(autoSlide, 3000);
  });
});

const autoSlide = () => {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    direction = -1;
  } else if (direction === null) {
    direction = -1;
  }

  sliderContainer.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-25%)';
};

let interval = setInterval(autoSlide, 3000);
