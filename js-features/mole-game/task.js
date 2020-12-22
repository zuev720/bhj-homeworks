"use strict";

let dead = document.getElementById('dead');
let lost = document.getElementById("lost");

function zeroing() {
    dead.innerHTML = String(0);
    lost.innerHTML = String(0);
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let holes = Array.from(document.body.getElementsByClassName("hole"));

holes.map((element, index) => {
    element.addEventListener("click", () => {
        let hole = getHole(index + 1);
        if (hole.classList.contains('hole_has-mole')) {
            dead.innerHTML++;
            if (dead.innerHTML == 5) {
                alert("Вы победили!");
                zeroing();
            }
        } else {
            lost.innerHTML++;
            if (lost.innerHTML == 5) {
                alert("Вы проиграли!");
                zeroing();
            }
        }
    })
})
