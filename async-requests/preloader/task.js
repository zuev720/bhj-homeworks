"use strict";

let xhr = new XMLHttpRequest();
let loader = document.querySelector('.loader');
let valutes = document.getElementById('items');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4) {
        loader.classList.remove('loader_active');
        let responseValutes = JSON.parse(xhr.response).response.Valute;
            Object.values(responseValutes).forEach(valute => {
                let valuteName = valute.CharCode;
                let valuteValue = valute.Value;
                createValuteContainer(valuteName, valuteValue);
            });
    }
});


function createValuteContainer(valuteName, valuteValue) {
    let valuteContainer = document.createElement('div');
    valuteContainer.className = 'item';
    let valuteCode = document.createElement('div');
    valuteCode.className = 'item__code';
    valuteCode.textContent = valuteName;
    let valute__Value = document.createElement('div');
    valute__Value.className = 'item__value';
    valute__Value.textContent = valuteValue;
    let valuteCurrent = document.createElement('div');
    valuteCurrent.className = 'item__currency';
    valuteCurrent.textContent = 'руб.';
    valuteContainer.insertAdjacentElement('afterbegin', valuteCode);
    valuteContainer.insertAdjacentElement('beforeend', valute__Value);
    valuteContainer.insertAdjacentElement('beforeend', valuteCurrent);
    valutes.appendChild(valuteContainer);

}