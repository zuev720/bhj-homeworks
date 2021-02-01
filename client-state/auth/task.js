"use strict";
const formContainer = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.user === 'active') {
        let welcome = document.querySelector('.welcome');
        welcome.classList.add('welcome_active');
        welcome.querySelector('#user_id').textContent = localStorage.userId;
    } else {
        formContainer.classList.add('signin_active');
        const form = document.querySelector('#signin__form');
        const btn = document.querySelector('#signin__btn');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const login = form.querySelector('.control[name="login"]');
            const password = form.querySelector('.control[name="password"]');
            if (login.value === '' || password.value === '') {
                return;
            }
            let formData = new FormData(form);
            let request = new XMLHttpRequest();
            request.open('POST', "https://netology-slow-rest.herokuapp.com/auth.php");
            request.send(formData);
            request.addEventListener('load', (event) => {
                if (event.target.status === 200 && event.target.readyState === 4) {
                    let response = JSON.parse(event.target.response);
                    if (response.success === true) {
                        formContainer.classList.remove('signin_active');
                        let userId = response.user_id;
                        welcome.classList.add('welcome_active');
                        welcome.querySelector('#user_id').textContent = userId;
                        localStorage.setItem('user', 'active');
                        localStorage.setItem('userId', userId);
                    } else {
                        alert('Не правильный логин или пароль');
                    }
                } else {
                    alert('Запрос не прошел');
                }
            });
        });
    }
});

let logout = welcome.querySelector('.logout__btn');
logout.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    welcome.classList.remove('welcome_active');
    formContainer.classList.add('signin_active');
});