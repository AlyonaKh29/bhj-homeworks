document.addEventListener('DOMContentLoaded', function () {
    const dropdownValue = document.querySelector('.dropdown__value');
    const dropdownList = document.querySelector('.dropdown__list');
    const dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));

    listActive = () => {
        dropdownList.classList.toggle('dropdown__list_active');
    };

    dropdownValue.addEventListener('click', listActive);

    dropdownLinks.forEach((item) => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            listActive();
            dropdownValue.textContent = item.textContent;
        });
    });
});