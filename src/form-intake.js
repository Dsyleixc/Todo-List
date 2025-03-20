'use strict';

const createButton = document.querySelector('.form-button');
let listIcon;
let listName;

createButton.addEventListener('click', function (e) {
    e.preventDefault();
    listIcon = document.querySelector('#list-icon');
    listName = document.querySelector('#list-name');
});

export { listIcon, listName };
