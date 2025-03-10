document.addEventListener('DOMContentLoaded', () => {
    const hasTooltips = document.querySelectorAll('.has-tooltip');

    hasTooltips.forEach((item) => {
        const elementContent = `<div class="tooltip"></div>`
        item.insertAdjacentHTML('afterend', elementContent);
    })
    const tooltips = Array.from(document.querySelectorAll('.tooltip'));
    
    hasTooltips.forEach((hasTooltip) => {
        hasTooltip.addEventListener('click', (event) => {
            event.preventDefault();
            tooltips.forEach((tooltip) => {
                const findActiveTooltip = tooltips.find(el => el.classList.contains('tooltip_active'));
                if (findActiveTooltip) {
                    if (tooltip == findActiveTooltip) {
                        tooltip.classList.remove('tooltip_active');
                    }
                    findActiveTooltip.classList.remove('tooltip_active');
                }
                const rect = hasTooltip.getBoundingClientRect();
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.bottom}px`;
                tooltip.textContent = hasTooltip.getAttribute('title');
                tooltip.classList.add('tooltip_active');
            })
        })
    })
})

