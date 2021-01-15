"use strict";

const linksFontSizes = Array.from(document.querySelectorAll('.font-size'));
const linksColor = Array.from(document.querySelectorAll('.color'));
const book = document.querySelector('.book');


linksFontSizes.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let fontSize = link.dataset.size;
        findAndDeleteFontSizeElement();
        link.classList.add('font-size_active');
        if (fontSize) {
            book.classList.add(`book_fs-${fontSize}`);
        }
    })
});


linksColor.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let textColor = link.dataset.textColor;
        let backgroundColor = link.dataset.bgColor;

        if (textColor) {
            findAndDeleteColorElement(event.target);
            link.classList.add(`color_active`);
            book.classList.add(`book_color-${textColor}`);
        }
        if (backgroundColor) {
            findAndDeleteColorElement(event.target);
            link.classList.add(`color_active`);
            book.classList.add(`book_bg-${backgroundColor}`);
        }
    })
})



function findAndDeleteFontSizeElement() {
    if (book.classList.contains('book_fs-big')) {
        book.classList.remove('book_fs-big');
    }
    if (book.classList.contains('book_fs-small')) {
        book.classList.remove('book_fs-small');
    }
    document.querySelector('.font-size_active').classList.remove('font-size_active');
}



function findAndDeleteColorElement(link) {
    let bookClassNames = Array.from(book.classList);
    let foundTextColor = bookClassNames.find(name => name.includes('book_color-'));
    let foundBackgroundColor = bookClassNames.find(name => name.includes('book_bg-'));
    let activeTextColors = Array.from(document.querySelectorAll('.book__control_color > .color_active'));
    let activeBackgroundColors = Array.from(document.querySelectorAll('.book__control_background > .color_active'));

    activeTextColors.forEach(textColor => {
        if (link.closest('.book__control_color')) {
            if (textColor.classList.contains('color_active')) {
                textColor.classList.remove('color_active');
                book.classList.remove(foundTextColor);
            }
        }
    });

    activeBackgroundColors.forEach(bgColor => {
        if (link.closest('.book__control_background')) {
            if (bgColor.classList.contains('color_active')) {
                bgColor.classList.remove('color_active');
                book.classList.remove(foundBackgroundColor);
            }
        }
    });
}