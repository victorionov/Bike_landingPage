'use strict';

const form = document.querySelector('form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
