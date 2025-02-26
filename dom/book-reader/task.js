document.addEventListener('DOMContentLoaded', function () {
    const fontSizeList = document.querySelectorAll('.font-size');  // Элементы с классами для установки размера шрифта.
    const colorList = Array.from(document.querySelectorAll('.color'));
    const bgColorList = colorList.filter((item) => {
        return item.closest('.book__control_background');  // Элементы с классами для цвета фона.
    });
    const textColorList = colorList.filter((item) => {
        return item.closest('.book__control_color');  // Элементы с классами для цвета шрифта.
    });
    const book = document.querySelector('.book');


    function sizeActive(event) {  // Установка выбранного размера шрифта.
        event.preventDefault();
        book.classList.remove('book_fs-big', 'book_fs-small');
        fontSizeList.forEach((item) => {
            item.classList.remove('font-size_active');
        })
        event.target.classList.add('font-size_active');
        const size = event.target.getAttribute('data-size');
        if (size) {
            book.classList.add(`book_fs-${size}`);
        };
    }

    fontSizeList.forEach((item) => {
        item.addEventListener('click', sizeActive)
    })

    function textColorActive(event) {  // Установка цвета шрифта.
        event.preventDefault();
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        textColorList.forEach((el) => {
            el.classList.remove('color_active');
        })
        event.target.classList.add('color_active');
        const color = event.target.getAttribute('data-text-color');
        book.classList.add(`book_color-${color}`);
    }

    textColorList.forEach((el) => {
        el.addEventListener('click', textColorActive)
    })

    function bgColorActive(event) {  // Установка цвета фона.
        event.preventDefault();
        book.classList.remove('book_bg-white', 'book_bg-gray', 'book_bg-black');
        bgColorList.forEach((el) => {
            el.classList.remove('color_active');
        })
        event.target.classList.add('color_active');
        const color = event.target.getAttribute('data-bg-color');
        book.classList.add(`book_bg-${color}`);
    }

    bgColorList.forEach((el) => {
        el.addEventListener('click', bgColorActive)
    })
})