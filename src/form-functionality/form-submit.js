'use strict';

import { getLocalListData } from '../get-local-data.js';
import { listIcon, listName } from './form-intake.js';
import { List } from '../new-list.js';

const createBtn = document.querySelector('.form-button');

let list;

const createList = function () {
    list = new List(listIcon, listName);
};

const submitList = function (list) {
    const localListData = getLocalListData();
    localListData.push(list);

    // Update local storage with the modified list
    localStorage.setItem('list', JSON.stringify(localListData));
};

createBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (!listIcon || !listName) {
        console.error('List icon and name must be provided.');
        return; // Exit if validation fails
    }

    createList();
    submitList(list);
});
