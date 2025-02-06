let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);  // Возвращает переменную для каждой лунки по индексу.

checkСounter = () => {  // Проверяет счётчики и заканчивает игру.
    if (lost.textContent == 5) {
        gameOver('Кроты победили... Всё кончено...');
    } else if (dead.textContent == 10) {
        gameOver('Победа! Вы уничтожили всех кротов!');
    }
};

gameOver = message => {  // Обнуляет счётчики и выводит сообщение игроку.
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
};

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        let holeHasMole = hole.className.includes('hole_has-mole');
        if (holeHasMole) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }
        checkСounter();
    };
};