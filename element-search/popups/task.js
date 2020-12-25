"use strict";

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');

for (let close of document.getElementsByClassName('modal__close')) {
    close.addEventListener('click', () => {
        Array.from(document.getElementsByClassName('modal')).forEach(element  => {
            if (element.classList.contains('modal_active')) {
                element.remove();
            }
        });
    })
}

for (let button of document.getElementsByClassName('btn')) {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn_danger')) {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.add('modal_active');
        }
    })
}