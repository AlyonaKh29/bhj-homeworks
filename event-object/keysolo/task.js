class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = document.getElementById('timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() { // Обработчик клавиш  
    const pressKey = (event) => {
      const charGiven = this.currentSymbol.textContent.toLowerCase();  // Символ, который дан.
      const charGivenCode = charGiven.charCodeAt();
      const userInput = event.key.toLowerCase();  // Символ, который ввели.
      if (['Shift', 'Control', 'Alt'].includes(event.key)) {
        return;
      };
      const userInputCode = userInput.charCodeAt();
      charGivenCode === userInputCode ? this.success() : this.fail();
    };
    window.addEventListener('keydown', pressKey);
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startCountdown(word);
  }

  startCountdown(word) {  // Cчётчик. Кол-во секунд равно длине слова или фразы.
    clearInterval(this.countdown);
    let seconds = word.length; 
    this.countdown = setInterval(() => {
        this.timerElement.textContent = seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(this.countdown);
            this.timerElement.textContent = "--";
            this.fail();
        }
    }, 1000);
}

  getWord() {
    const words = [
        //'bob',
        //'awesome',
        'netology',
        'hello',
        //'kitty',
        'rock',
        //'youtube',
        //'popcorn',
        //'cinema',
        'love',
        'мама',
        'лес',
        'пион',
        'Мой гранат is great',
        'who is on duty сегодня',
        'we are the Чемпионы',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

