'use strict';
const listIcon = document.querySelector('#list-icon');
const listName = document.querySelector('#list-name');

const clearForm = function () {
    listIcon.value = '';
    listName.value = '';
};

export { clearForm };
