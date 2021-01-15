"use strict";

window.addEventListener('scroll', () => {
    Array.from(document.querySelectorAll('.reveal')).forEach(element => {
        let coords = element.getBoundingClientRect();
        if (coords.top > window.innerHeight || coords.bottom <= 0) {
            element.classList.remove('reveal_active');
        } else {
            element.classList.add('reveal_active');
        }
    });
})