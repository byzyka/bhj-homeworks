//все подсказки
let tooltip = document.querySelectorAll('.has-tooltip');
let header = document.querySelector('.header');

//перебираем
tooltip.forEach(itemTooltip => {
    //ищем координаты где тыкнули
  let {top, left} = itemTooltip.getBoundingClientRect();
  
 
 

    //это то,что должно быть написано в подсказке
    let text = itemTooltip.title;
    itemTooltip.insertAdjacentHTML
    ('afterEnd', `<div class="tooltip" style="left: ${left}px; top: ${(top - 20)}px">
    ${text}
    </div>`);
    //навешиваем прослушку
    itemTooltip.addEventListener('click', event => {
        event.preventDefault();
      

        let openTooltip = itemTooltip.nextElementSibling;
        console.log(openTooltip);


        if (openTooltip.classList.contains('tooltip')) {
            openTooltip.classList.toggle('tooltip_active');
        }

    })

})