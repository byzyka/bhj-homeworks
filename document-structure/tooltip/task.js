let tooltip = document.querySelectorAll('.has-tooltip');


tooltip.forEach(itemTooltip => {
   

    itemTooltip.addEventListener('click', event => {
        event.preventDefault();

        let { top, left } = itemTooltip.getBoundingClientRect()
       

        itemTooltip.insertAdjacentHTML('beforeEnd', `<div class="tooltip" style="left: ${Math.round(left)}px; top: ${Math.round(top) + 20}px">
  ${itemTooltip.title}
 </div>`);

        let newTooltip = itemTooltip.querySelector('.tooltip');
        

        if (newTooltip.classList.contains('tooltip')) {
            newTooltip.classList.add('tooltip_active');
        }

         
        })
   
})
