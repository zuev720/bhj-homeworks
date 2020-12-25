"use strict";

let links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.closest('.menu_sub')) {
            event.preventDefault();
        }
        if (link.nextElementSibling.classList.contains('menu_sub')) {
            event.preventDefault();
            checkAndDeleteMenuActive();
            link.nextElementSibling.classList.toggle('menu_active');
        }
    })
})

function checkAndDeleteMenuActive() {
    Array.from(document.querySelectorAll('.menu_sub')).forEach(element => {
        if (element.classList.contains('menu_active')) {
            element.classList.remove('menu_active');
        }
    })
}