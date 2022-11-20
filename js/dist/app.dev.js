"use strict";

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = function () {
  searchForm.classList.toggle('active');
};

var loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = function () {
  loginform.classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick = function () {
  loginform.classList.remove('active');
};

window.onscroll = function () {
  if (window.scrollY > 80) {
    document.querySelector('.header-2').classList.add('active');
  } else {
    document.querySelector('.header-2').classList.remove('active');
  }
};

window.onload = function () {
  if (window.scrollY > 80) {
    document.querySelector('.header-2').classList.add('active');
  } else {
    document.querySelector('.header-2').classList.remove('active');
  }
};

var swiper = new Swiper(".book-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 950,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});