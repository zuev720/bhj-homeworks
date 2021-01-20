"use strict";

document.querySelector('.interests_main').addEventListener('change', getListChecked);

function getListChecked (event) {
    if (event.target.closest('.interests_active')) {
        let interestList = event.target.parentNode.parentNode.parentNode;
        let activeElements = Array.from(interestList.querySelectorAll('.interest__check'));
        let checkedElements = activeElements.filter(elem => elem.checked);
        let parentInput = interestList.previousElementSibling.querySelector('.interest__check');

        if (activeElements.length === checkedElements.length) {
            if (parentInput.indeterminate) {
                parentInput.indeterminate = false;
            }
            parentInput.checked = true;
        } else if (activeElements.length !== checkedElements.length && checkedElements.length > 0) {
            parentInput.indeterminate = true;
        } else if (checkedElements.length === 0) {
            parentInput.indeterminate = false;
            parentInput.checked = false;
        }
    } else {
        let nestedList = event.target.parentNode.nextElementSibling;
        Array.from(nestedList.querySelectorAll('.interest__check')).forEach(element => {
            element.checked = (event.target.checked) ? true : false;
        });
    }
}
