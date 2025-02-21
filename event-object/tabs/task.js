document.addEventListener('DOMContentLoaded', function () {
    const tabList = Array.from(document.getElementsByClassName('tab'));
    const tabContentList = document.querySelectorAll('.tab__content');

    function removeActive() {
        tabList.forEach((item) => {
            item.classList.remove('tab_active');
        });
        tabContentList.forEach((el) => {
            el.classList.remove('tab__content_active');
        });
    }

    tabList.forEach((item) => {
        item.addEventListener('click', function() {
            removeActive();
            item.classList.add('tab_active');
            indexItem = tabList.indexOf(item);
            tabContentList[indexItem].classList.add('tab__content_active');
        });
    });
})



