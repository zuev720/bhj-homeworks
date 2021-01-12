"use strict";

Array.from(document.querySelectorAll('.tab')).forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        if (!(event.target.classList.contains('tab_active'))) {
            deleteActiveElement();
            event.target.classList.add('tab_active');
            Array.from(document.querySelectorAll('.tab__content'))[index].classList.add('tab__content_active');
        } else {
            event.target.classList.toggle('tab_active');
            Array.from(document.querySelectorAll('.tab__content'))[index].classList.toggle('tab__content_active');
        }
    })
});

function deleteActiveElement() {
    if (document.querySelector('.tab_active')) {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    }
}