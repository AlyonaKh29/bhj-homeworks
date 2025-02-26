document.addEventListener('DOMContentLoaded', function () {
    const rotatorList = document.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    let dataSpeed;

    function rotatorActive() {
        rotatorList.forEach((item) => {
            item.classList.remove('rotator__case_active');
            item.style.color = '';
        })
        const element = rotatorList[currentIndex];
        element.classList.add('rotator__case_active');
        element.style.color = element.getAttribute('data-color');
        const currentSpeed = parseInt(element.getAttribute('data-speed'), 10);
        currentIndex = (currentIndex + 1) % rotatorList.length; //Бесконечный цикл.
        clearInterval(dataSpeed);
        dataSpeed = setInterval(rotatorActive, currentSpeed);
    }
    dataSpeed = setInterval(rotatorActive, parseInt(rotatorList[currentIndex].getAttribute('data-speed'), 10));
})
