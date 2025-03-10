const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((item) => {
    const elementContent = `<div class="tooltip" data-position="right"></div>`
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
            
            
            const rect = event.target.getBoundingClientRect();
            const position = event.target.dataset.position;

            switch (position) {
                case 'top':
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
                    break;
                case 'left':
                    tooltip.style.left = `${rect.left - tooltip.offsetWidth - 5}px`;
                    tooltip.style.top = `${rect.top}px`;
                    break;
                case 'right':
                    tooltip.style.left = `${rect.right + 50}px`;
                    tooltip.style.top = `${rect.top}px`;
                    break;
                case 'bottom':
                default:
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.bottom + 5}px`;
                    break;
            }
            tooltip.textContent = hasTooltip.getAttribute('title');
            tooltip.classList.add('tooltip_active');
        })
    })
})
