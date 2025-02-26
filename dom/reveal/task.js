document.addEventListener('DOMContentLoaded', function () {
    const reveal = document.querySelectorAll('.reveal');

    function makeVisible() {
        reveal.forEach((item) => {
            const { top, bottom } = item.getBoundingClientRect();
            (top > 0 && bottom < window.innerHeight) ? item.classList.add('reveal_active') : item.classList.remove('reveal_active');
        })
    }

    document.addEventListener('scroll', makeVisible);
})