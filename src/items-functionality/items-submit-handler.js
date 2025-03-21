'use strict';

import { renderItemInput, removeItemInput } from './items-input-render.js';
import { submitItem } from './items-submit.js';

const addItemBtn = document.querySelector('.add-item-btn');
const submitItemBtn = document.querySelector('.item-add');
const cancelItemBtn = document.querySelector('.item-remove');

const hideAddItemBtn = function () {
    addItemBtn.classList.add('hidden');
};

const showAddItemBtn = function () {
    addItemBtn.classList.remove('hidden');
};

const submitItemHandler = function () {
    submitItemBtn.addEventListener('click', () => {
        submitItem();
        removeItemInput();
        showAddItemBtn();
    });
};

const cancelItemHandler = function () {
    cancelItemBtn.addEventListener('click', () => {
        removeItemInput();
        showAddItemBtn();
    });
};

addItemBtn.addEventListener('click', () => {
    renderItemInput();
    hideAddItemBtn();
    submitItemHandler();
    cancelItemHandler();
});
