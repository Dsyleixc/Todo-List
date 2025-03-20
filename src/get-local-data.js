'use strict';

let localListData = [];

const getLocalListData = function () {
    if (!localStorage.getItem('list')) {
        localStorage.setItem('list', JSON.stringify([]));
    } else {
        localListData = JSON.parse(localStorage.getItem('list'));
    }
    return localListData;
};

export { getLocalListData };
