"use strict";
const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

const modal = document.querySelector('#subscribe-modal');

document.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal=closed';
});

window.addEventListener('DOMContentLoaded', () => {
    if (getCookie('modal') !== 'closed') {
        modal.classList.add('modal_active');
    }
});
