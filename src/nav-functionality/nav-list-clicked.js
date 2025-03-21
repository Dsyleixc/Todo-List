'use strict';

(function () {
    const navList = document.querySelector('.nav-list');
    let previousClickedList;
    let newClickedList;

    const removeClickedClass = function (list) {
        if (previousClickedList) {
            previousClickedList.classList.remove('clicked');
        }
    };

    const addClickedClass = function (list) {
        list.classList.add('clicked');
    };

    const handleNewClickedList = function (e) {
        // Check if user clicks on an already clicked item
        if (e.target.classList.contains('clicked')) return;

        if (e.target.classList.contains('nav-item')) {
            previousClickedList = newClickedList;
            newClickedList = e.target;
            removeClickedClass(previousClickedList);
            addClickedClass(newClickedList);
        }
    };

    navList.addEventListener('mousedown', handleNewClickedList);
})();
