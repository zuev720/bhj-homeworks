"use strict";

const advertisingMessages = Array.from(document.querySelectorAll('.rotator__case'));
let count = 0;


let color = advertisingMessages[count].dataset.color;
advertisingMessages[count].style.color = color;

advertisingMessages[count].classList.add('rotator__case_active');

setInterval(() => {
    advertisingMessages[count].classList.remove('rotator__case_active');
    count++;
    if (count > (advertisingMessages.length - 1)) {
        count = 0;
    }
    advertisingMessages[count].classList.add('rotator__case_active');
    color = advertisingMessages[count].dataset.color;
    advertisingMessages[count].style.color = color;
}, 1000);
