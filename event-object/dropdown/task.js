"use strict";

let dropdownValue = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list')

document.querySelector('.dropdown').addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown__value')) {
        dropdownList.classList.toggle('dropdown__list_active');
    } else if (event.target.closest('.dropdown__list_active')) {
        dropdownValue.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
    }
});

