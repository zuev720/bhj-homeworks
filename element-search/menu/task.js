"use strict";

let links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.closest('.menu_active')) {
            event.preventDefault();
        } else if (link.nextElementSibling) {
            event.preventDefault();
            let activeMenu = link.nextElementSibling.classList.contains('menu_active');
            checkAndDeleteMenuActive();
            if (!(activeMenu)) {
                link.nextElementSibling.classList.toggle('menu_active');
            }
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