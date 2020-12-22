"use strict";

const endTime = new Date(2020, 11, 22, 17, 33);
let timerId = () => {
    let now = new Date();
    let diff = endTime - now;
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = (hours < 10) ? "0" + hours : hours;
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (hours == 0 && minutes == 0 && seconds == 0) {
        alert("Вы победили в конкурсе!");
        timerId = 0;
        location = 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/04/thumbnail-7075f02d50b2e1b87acaac02e0592003.jpeg';
    }

    document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;
    setTimeout(timerId, 1000);
}
timerId();