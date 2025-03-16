const pollAnswers = document.getElementById('poll__answers');
const question = document.querySelector('.poll__title');
const pollContainer = document.querySelector('.poll');

fetchPoll();

async function fetchPoll() {  // Загрузка случайного опроса.
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const poll = await response.json();
        displayPoll(poll);
    } catch (error) {
        console.error('Ошибка при загрузке опроса:', error);
    }
}

function displayPoll(poll) {  // Отображение вопроса и списка ответов-кнопок.
    question.textContent = poll.data.title;
    question.setAttribute('style', 'font-size:20px;');
    
    poll.data.answers.forEach(answer => {
        pollAnswers.insertAdjacentHTML("beforeEnd", `
            <button class="poll__answer">${answer}</button>`); 
    });

    pollAnswers.addEventListener('click', (event) => {
        if (event.target.classList.contains('poll__answer')) {
            const indexAnswer = poll.data.answers.indexOf(event.target.textContent);
            fetchPollPost(indexAnswer, poll);
            alert('Спасибо, Ваш голос засчитан!');
        }
    });
}

async function fetchPollPost(index, poll) { // Отправка POST-запроса с выбранным ответом.
    const params = new URLSearchParams();
    params.append('vote', poll.id);
    params.append('answer', index);
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll', {
            method: 'POST',
            body: params,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
              },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Получение результатов опроса.
        displayResults(data);
    } catch (error) {
        console.error('Ошибка при отправке:', error);
    }
}

function displayResults(data) { // Показ результатов опроса.
    pollAnswers.classList.remove('poll__answers_active');
    let amount = 0;
    data.stat.forEach(item => {amount += item.votes}); 
    data.stat.forEach(item => {
        const votesPersent = ((item.votes * 100) / amount).toFixed(2);
        pollContainer.insertAdjacentHTML("beforeEnd", `<div class="answer">${item.answer}: <b>${votesPersent}%</b></div>`); 
    });
}

