class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.timerElement = container.querySelector('.timer__status');

        this.reset();
        this.registerEvents();
        this.setTimer();
    }


    setTimer() {
        this.timerElement.textContent = this.wordElement.textContent.length;
        this.timerId = setInterval(() => {
            let count = parseInt(this.timerElement.textContent) - 1;
            this.timerElement.textContent = count;
            if (count === 0) {
                clearInterval(this.timerId);
                this.fail();
            }
        }, 1000)
    }


    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        /*
          TODO:
          Написать обработчик события, который откликается
          на каждый введённый символ.
          В случае правильного ввода слова вызываем this.success()
          При неправильном вводе символа - this.fail();
         */

        document.addEventListener('keydown', (event) => {
            if (this.currentSymbol.textContent.toLowerCase() === event.key.toLowerCase()) {
                this.success();
            } else {
                this.fail();
            }
        })
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
        clearInterval(this.timerId);
        this.setTimer();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
        clearInterval(this.timerId);
        this.setTimer();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript'
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }

}

new Game(document.getElementById('game'))

