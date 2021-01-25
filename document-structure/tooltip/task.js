"use strict";

let tooltip = document.querySelector('.tooltip');

[...document.querySelectorAll('.has-tooltip')].forEach(element => {
    let tooltipText = element.title;

    element.addEventListener('mouseenter', () => {
        element.title = '';
    });

    element.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.title = tooltipText;
        findAndDeleteActiveTooltip();
        showTooltip(event.target, element.title);
    });
});

function showTooltip(link, tooltipText) {
    let coords = link.getBoundingClientRect();
    tooltip.textContent = tooltipText;
    tooltip.style.left = coords.left + "px";
    tooltip.style.top = coords.bottom + "px";
    tooltip.classList.add('tooltip_active');
}

function findAndDeleteActiveTooltip() {
    if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.remove('tooltip_active');
    }
}


// alternative method


// [...document.querySelectorAll('.has-tooltip')].forEach(element => {
//     let tooltipText = element.title;
//
//     element.addEventListener('mouseenter', () => {
//         element.title = '';
//     });
//
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         let coords = element.getBoundingClientRect();
//         deleteTooltip();
//         createTooltip(coords, tooltipText);
//     });
// });
//
//
// function createTooltip(coords, tooltipText) {
//     let tooltip = document.createElement('div');
//     tooltip.classList.add('tooltip');
//     tooltip.classList.add('tooltip_active');
//     tooltip.style.left = coords.left + 'px';
//     tooltip.style.top = coords.bottom + 'px';
//     tooltip.textContent = tooltipText;
//     document.body.append(tooltip);
// }
//
// function deleteTooltip() {
//     if (document.querySelector('.tooltip')) {
//         document.querySelector('.tooltip').remove();
//     }
// }
