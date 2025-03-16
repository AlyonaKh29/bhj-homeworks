async function fetchExchangeRate() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        if (!response.ok) {
            throw new Error('Network response error');
        }
        const rate = await response.json();
        displayExchangeRate(rate);
    } catch (error) {
        console.error('Ошибка при загрузке обменного курса:', error);
    }
}

function displayExchangeRate(rate) {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader_active');
    const items = document.getElementById('items');
    const valutes = Object.values(rate.response.Valute);
    valutes.forEach(val => {
        items.insertAdjacentHTML("beforeEnd", `
            <div class="item">
                <div class="item__code">${val.CharCode}</div>
                <div class="item__value">${val.Value}</div>
                <div class="item__currency">руб.</div>
            </div>`); 
    });
}
fetchExchangeRate();