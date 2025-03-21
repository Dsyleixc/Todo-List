'use strict';

const itemInput = document.querySelector('.item-input');

const renderItemInput = function () {
    itemInput.classList.remove('hidden');
};

const removeItemInput = function () {
    itemInput.classList.add('hidden');
};

export { renderItemInput, removeItemInput };
