'use strict';

const clickedList = document.querySelector('.clicked').textContent;

const getItems = function () {
    const lists = JSON.parse(localStorage.getItem('list'));
    const list = lists.find((list) => list.name === clickedList);
    return list.items;
};

const renderItems = function () {
    const items = getItems();
    items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = ``;
    });
};
