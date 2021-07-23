'use strict';

// Variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpemModal = document.querySelectorAll('.show-modal');

// Functions

const opemModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Execution

for (let i = 0; i < btnOpemModal.length; i++) {
  btnOpemModal[i].addEventListener('click', opemModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});