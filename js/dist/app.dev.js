"use strict";

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = function () {
  searchForm.classList.toggle('active');
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