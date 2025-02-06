const timer = document.getElementById('timer');
let time = Number(timer.textContent);  //Количество секунд для обратного отсчета

function updateClock() {
    const seconds = Math.floor(time % 60);  
    const minutes = Math.floor((time/60) % 60);  
    const hours = Math.floor((time/(60*60)) % 24);
    timer.textContent = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    time -= 1;
    if (time <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    };
};

updateClock(); // Убрать начальную задержку в 1 сек.

let countdown = setInterval(updateClock, 1000);
