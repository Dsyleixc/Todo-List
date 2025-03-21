'use strict';

import { renderItemInput, removeItemInput } from './items-input-render.js';
import { submitItem } from './items-submit.js';
import { renderItems } from './items-render.js';

// IIFE to encapsulate logic
(function () {
    const addItemBtn = document.querySelector('.add-item-btn');
    const submitItemBtn = document.querySelector('.item-add');
    const cancelItemBtn = document.querySelector('.item-remove');

    const hideAddItemBtn = function () {
        addItemBtn.classList.add('hidden');
    };

    const showAddItemBtn = function () {
        addItemBtn.classList.remove('hidden');
    };

    submitItemBtn.addEventListener('click', () => {
        submitItem();
        removeItemInput();
        showAddItemBtn();
        renderItems();
    });

    cancelItemBtn.addEventListener('click', () => {
        removeItemInput();
        showAddItemBtn();
    });

    addItemBtn.addEventListener('click', () => {
        renderItemInput();
        hideAddItemBtn();
    });
})();
