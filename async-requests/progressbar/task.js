"use strict";

const form = document.getElementById('form');
const progressBar = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = form.querySelector('input');
    let fileSize = input.files[0].size;
    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.upload.onprogress = function (event) {
        progressBar.value = event.loaded / Number(fileSize);
    };

    request.upload.onload = function () {
        alert(`Данные успешно отправлены.`);
    };

    request.upload.onerror = function () {
        alert(`Произошла ошибка во время отправки: ${request.status}`);
    };
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.send(formData);
});