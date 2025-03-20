'use strict';

const form = document.querySelector('.form');
const overlay = document.querySelector('.overlay');
const formButton = document.querySelector('.form-button');
const newListBtn = document.querySelector('.new-item-btn');

const closeForm = function () {
    form.classList.add('hidden');
    overlay.classList.add('hidden');
};

const showForm = function () {
    form.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const setupFormVisibility = function () {
    overlay.addEventListener('click', function (e) {
        e.preventDefault();
        closeForm();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeForm();
        }
    });

    formButton.addEventListener('click', function (e) {
        e.preventDefault();
        closeForm();
    });

    newListBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showForm();
    });
};

export { setupFormVisibility };
