document.addEventListener('DOMContentLoaded', () => {
    const hasTooltips = document.querySelectorAll('.has-tooltip');

    hasTooltips.forEach((item) => {
        const elementContent = `<div class="tooltip"></div>`;
        item.insertAdjacentHTML('afterend', elementContent);
    })
    
    hasTooltips.forEach((hasTooltip) => {
        hasTooltip.addEventListener('click', (event) => {
            event.preventDefault();
            const tooltip = hasTooltip.nextSibling;
            const title = hasTooltip.getAttribute('title');
            if (title === tooltip.textContent) {
                tooltip.classList.toggle('tooltip_active');
            } else {
                const rect = hasTooltip.getBoundingClientRect();
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.bottom}px`;
                tooltip.textContent = title;
                tooltip.classList.add('tooltip_active');   
            }
            const activeTooltips = Array.from(document.querySelectorAll('.tooltip_active'));
            const findActiveTooltip = activeTooltips.find((item) => item.textContent !== tooltip.textContent);
            findActiveTooltip.classList.remove('tooltip_active');   
        })
    })
})

