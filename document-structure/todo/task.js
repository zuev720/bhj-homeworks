"use strict";

const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let taskText = form.querySelector('.tasks__input').value.trim();
    createTask(taskText);
    form.querySelector('.tasks__input').value = '';
});

function createTask(taskText) {
    if (taskText == 0) {
        return;
    } else {
        let tasksContainer = document.querySelector('.tasks__list');
        let task = document.createElement('div');
        task.className = 'task';
        tasksContainer.appendChild(task);
        let taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.textContent = taskText;
        let taskRemove = document.createElement('a');
        taskRemove.className = 'task__remove';
        taskRemove.innerHTML = '&times;';
        task.insertAdjacentElement('afterbegin', taskTitle);
        task.insertAdjacentElement('beforeend', taskRemove);

        taskRemove.addEventListener('click', () => {
            task.remove();
        });
    }
}
