"use strict";

const textArea = document.querySelector('#editor');
textArea.value = localStorage.getItem('area');
const clearButton = document.querySelector("button");

textArea.addEventListener('input', () => {
    localStorage.setItem('area', textArea.value);
});

clearButton.addEventListener('click', () => {
    textArea.value = "";
    localStorage.removeItem('area');
});