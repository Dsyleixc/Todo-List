'use strict';

let localListData;

const getLocalListData = function () {
    if (!localStorage.getItem('list')) {
        localListData = [];
        localStorage.setItem('list', JSON.stringify(localListData));
    } else {
        localListData = JSON.parse(localStorage.getItem('list'));
    }
    return localListData;
};

export { getLocalListData };
