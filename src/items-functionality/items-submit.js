'use strict';

const itemInput = document.querySelector('.item-input-text');

const getLists = function () {
    const lists = JSON.parse(localStorage.getItem('list'));
    return lists;
};

const getClickedListIndex = function () {
    const clickedListName = document.querySelector('.clicked').textContent;
    const lists = getLists();
    // Find the index of the clicked list
    const index = lists.findIndex((list) => list.name === clickedListName);

    // Return both the list and its index
    return index;
};

const submitItem = function () {
    const lists = getLists();
    const inputText = itemInput.value;
    const index = getClickedListIndex();
    lists[index].items.push(inputText);
    localStorage.setItem('list', JSON.stringify(lists));
};

export { submitItem };
