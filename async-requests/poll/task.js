'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 4) {
        let questionId = JSON.parse(xhr.responseText).id;
        let question = JSON.parse(xhr.responseText).data.title;
        let answersArray = JSON.parse(xhr.responseText).data.answers;
        createQuestionAndAnswers(questionId, question, answersArray);
    }
});

function createQuestionAndAnswers(questionId, question, answersArray) {
    document.querySelector('.poll__title').textContent = question;
    answersArray.forEach((answer, index) => {
        let button = document.createElement('button');
        let answersContainer = document.getElementById('poll__answers');
        button.className = 'poll__answer';
        button.textContent = answer;
        button.setAttribute('data-id', index);
        answersContainer.appendChild(button);
        button.addEventListener('click', (event) => {
            let request = `vote=${questionId}&answer=${event.target.dataset.id}`;
            alert('Спасибо, ваш голос засчитан!');
            let xhr2 = new XMLHttpRequest();
            xhr2.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
            xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr2.send(request);
            xhr2.addEventListener('readystatechange', (event) => {
                if (event.target.readyState === 4) {
                    let statAnswersArray = JSON.parse(xhr2.responseText).stat;
                    answersContainer.remove();
                    let answersStaticContainer = document.createElement('div');
                    document.querySelector('.poll').insertAdjacentElement('beforeend', answersStaticContainer);
                    let ul = document.createElement('ul');
                    answersStaticContainer.appendChild(ul);
                    let sum = statAnswersArray.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue.votes;
                    }, 0);
                    statAnswersArray.forEach(answer => {
                        let li = document.createElement('li');
                        let votePercent = (Number(answer.votes) * 100 / sum).toFixed(2);
                        li.textContent = `${answer.answer} - ${votePercent}%`;
                        ul.appendChild(li);
                    });
                }
            });
        });
    });
}
