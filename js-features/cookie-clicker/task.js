const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');
let lastClick = Date.now();
let flag = false;

getSpeedClick = clickNow => {
    let duration = (clickNow - lastClick) / 1000;
    speed.textContent = (1 / duration).toFixed(2);
    lastClick = clickNow;
};

cookie.onclick = () => {
    let newClick = Date.now();
    const click = document.getElementById('clicker__counter');
    click.textContent = Number(click.textContent) + 1;
    flag = !flag;
    if (flag) {
        cookie.width += 100;
    } else {
        cookie.width -= 100;
    }
    getSpeedClick(newClick);
};
