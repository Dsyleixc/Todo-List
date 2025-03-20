'use strict';
const form = document.querySelector('form');
const createButton = document.querySelector('.form-button');
let listIcon;
let listName;

createButton.addEventListener('click', function (e) {
    e.preventDefault();
    listIcon = document.querySelector('#list-icon').value;
    listName = document.querySelector('#list-name').value;
    form.reset();
});

export { listIcon, listName };
