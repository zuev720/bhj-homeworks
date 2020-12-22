"use strict";

const image = document.getElementById("cookie");
let start;
image.addEventListener("mousedown", imageMousedownClick);
image.addEventListener("mouseup", imageMouseUp);
let countClick = 0;
showTimeClick();



function showTimeClick() {
    let div = document.createElement("div");
    div.innerHTML = "Время клика: <span id='time-click'></span>";
    document.getElementById('clicker__status');
    document.body.children[0].children[0].after(div);
    document.getElementById("time-click").innerHTML = String(0);
}

function imageMousedownClick() {
    start = new Date();
    countClick++;
    image.style.width = "220px";
    document.getElementById("clicker__counter").innerHTML = String(countClick);
}

function imageMouseUp() {
    let end = new Date();
    image.style.width = "200px";
    let diff = Number((end - start) / 1000).toFixed(2);
    document.getElementById("time-click").innerHTML = String(diff);
}