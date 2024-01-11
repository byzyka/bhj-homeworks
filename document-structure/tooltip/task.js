let tooltip = document.querySelectorAll('.has-tooltip');
console.log(tooltip);

tooltip.forEach(itemTooltip => {
    console.log(itemTooltip);

    itemTooltip.addEventListener('click', event => {
        event.preventDefault();

        let { top, left } = itemTooltip.getBoundingClientRect()
        console.log(Math.round(top), Math.round(left));

        itemTooltip.insertAdjacentHTML('beforeEnd', `<div class="tooltip" style="left: ${Math.round(left)}px; top: ${Math.round(top) + 20}px">
  ${itemTooltip.title}
 </div>`);

        let newTooltip = itemTooltip.querySelector('.tooltip');
        //console.log(newTooltip);

        if (newTooltip.classList.contains('tooltip')) {
            newTooltip.classList.add('tooltip_active');
        }

         
        })
   
})
