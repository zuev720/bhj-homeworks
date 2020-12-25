"use strict";
let currentIndex = 0;

let slides = Array.from(document.querySelectorAll('.slider__item'));
let dots = Array.from(document.querySelectorAll('.slider__dot'));

// Click by dot
dots.forEach((dot,  index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
})

// click by left button slider
document.querySelector('.slider__arrow_prev').addEventListener('click', clickLeft);

// click by right button slider
document.querySelector('.slider__arrow_next').addEventListener('click', clickRight);
showSlide(currentIndex);

function clickRight() {
    currentIndex++
    showSlide(currentIndex);
}

function clickLeft() {
    currentIndex--
    showSlide(currentIndex);
}

function currentSlide(n) {
    currentIndex = n;
    showSlide(currentIndex);
}

function showSlide(n) {
    if (n > (slides.length - 1)) {
        currentIndex = 0;
    } else if (n < 0) {
        currentIndex = (slides.length - 1);
    }
    deleteActiveElement();
    slides[currentIndex].classList.add('slider__item_active');
    dots[currentIndex].classList.add('slider__dot_active');
}

function deleteActiveElement() {
    slides.forEach(slide => {
        slide.classList.remove('slider__item_active');
    })
    dots.forEach(dot => {
        dot.classList.remove('slider__dot_active')
    })
}
