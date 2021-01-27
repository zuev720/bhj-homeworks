"use strict";

const links = [...document.querySelectorAll('.has-tooltip')];
let tooltip = document.querySelector('.tooltip');

links.forEach(element => {
    let tooltipText = element.title;

    element.addEventListener('mouseenter', () => {
        element.title = '';
    });

    element.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.title = tooltipText;
         if (event.target.dataset.state === 'active' && tooltip.classList.contains('tooltip_active')) {
            findAndDeleteActiveState();
            findAndDeleteActiveTooltip();
        }  else if (event.target.dataset.state !== 'active' && tooltip.classList.contains('tooltip_active')) {
            findAndDeleteActiveState();
            showTooltip(event.target, element.title);
            event.target.setAttribute('data-state', 'active');
        } else if (event.target.dataset.state !== 'active') {
            event.target.setAttribute('data-state', 'active');
            showTooltip(event.target, element.title);
        } else {
            event.target.setAttribute('data-state', '');
            findAndDeleteActiveTooltip();
        }
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
    tooltip.classList.remove('tooltip_active');
}

function findAndDeleteActiveState() {
    links.forEach(link => {
        if (link.dataset.state === 'active') {
            link.setAttribute('data-state', '');
        }
    });
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
