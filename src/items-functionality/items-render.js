'use strict';

const itemInputDiv = document.querySelector('.item-input');
const itemListDiv = document.querySelector('.item-list');

const getClickedListName = function () {
    return document.querySelector('.clicked .item-name').textContent;
};

const getItems = function () {
    const lists = JSON.parse(localStorage.getItem('list'));
    const list = lists.find((list) => list.name === getClickedListName());
    console.log(list.items);

    return list.items;
};

const renderItems = function () {
    const items = getItems();
    items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img class="item-status" src="/public/unchecked.svg" alt="unchecked" />
            <div class="item-task">${item.description}</div>
        `;
        itemListDiv.insertBefore(itemElement, itemInputDiv);
    });
};

export { renderItems };
