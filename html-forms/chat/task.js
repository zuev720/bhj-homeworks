"use strict";

const input = document.querySelector('.chat-widget__input');
const chatWindow = document.querySelector('.chat-widget__messages');
const chatWindowContainer = document.querySelector('.chat-widget__messages-container');
const clientMessages = [];
const robotMessages = ["Добрый день! До свиданья!", "Вы кто такой? Я вас не звал!", "Какой такой товар?", "Я занят, приходите попозже"];

document.querySelector('.chat-widget__side').addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    robotQuestion();
});


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value) {
        clientMessages.push(input.value);
        getClientMessage();
        getRobotMessage();
        input.value = '';
        scrollChatWindow();
    }
});


function getClientMessage() {
    chatWindow.innerHTML +=
        '                        <div class="message message_client">\n' +
        '                            <div class="message__time"></div>\n' +
        '                            <div class="message__text"></div>\n' +
        '                        </div>';
    Array.from(document.querySelectorAll('.message__text')).filter(element => element.closest('.message_client')).forEach((message, index) => {
        message.textContent = clientMessages[index];
        getTime(message.previousElementSibling);
    });
}

function getRobotMessage() {
    chatWindow.innerHTML +=
        '                        <div class="message">\n' +
        '                            <div class="message__time"></div>\n' +
        '                            <div class="message__text"></div>\n' +
        '                        </div>';

    Array.from(document.querySelectorAll('.message__text')).filter(element => !(element.closest('.message_client'))).forEach((message) => {
        if (!(message.textContent)) {
            message.textContent = robotMessages[Math.floor(Math.random() * robotMessages.length)];
        }
        getTime(message.previousElementSibling);
    });
}


function getTime(element) {
    const now = new Date();
    const hours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
    const minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    if (!(element.textContent)) {
        element.textContent = `${hours}:${minutes}`;
    }
}

function scrollChatWindow() {
    let scrollHeight = chatWindowContainer.scrollHeight;
    chatWindowContainer.scrollTo(0, scrollHeight);
}

function robotQuestion() {
    if (chatWindow.childElementCount === 0) {
        let count = 30;
        setInterval(() => {
            --count;
            if (count === 0) {
                getRobotMessage();
            }
        }, 1000);
    }
}