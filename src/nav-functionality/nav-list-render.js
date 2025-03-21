'use strict';

import { getLocalListData } from '../get-local-data.js';

let localListData;
const navList = document.querySelector('.nav-list');

const clearNavList = function () {
    navList.innerHTML = '';
};

const renderNavList = function () {
    clearNavList();
    localListData = getLocalListData();
    localListData.forEach((list) => {
        const navItem = document.createElement('div');
        navItem.classList.add('nav-item');
        const icon = list.icon;
        const name = list.name;

        navItem.innerHTML = `
            <div class="item-icon">${icon}</div>
            <div class="item-name">${name}</div>
            <div class="item-count">${list.items.length}</div>
        `;

        navList.appendChild(navItem);
    });
};

export { renderNavList };
