//карточка продукта
let control = document.querySelectorAll('.product__quantity-control');


let productItem = control.forEach(itemControl => {
    itemControl.addEventListener('click', () => {
        let card = itemControl.closest('.product');
      

        let value = card.querySelector('.product__quantity-value');
       

        if (itemControl.classList.contains('product__quantity-control_inc')) {

            let total = Number(value.textContent) + 1;
            value.innerText = total;
          
        } else if (itemControl.classList.contains('product__quantity-control_dec')) {
            if (Number(value.textContent) > 1) {
                total = Number(value.textContent) - 1;
                value.innerText = total;
            }
        }


    })
})

// кнопка добавить в корзину
let productAdd = document.querySelectorAll('.product__add')


productAdd.forEach(itemAdd => {
    itemAdd.addEventListener('click', () => {

        //карточка товара
        let product = itemAdd.closest('.product');
        
        let productId = product.dataset.id;
        
        let productImg = product.querySelector('img').src;
      
        let count = product.querySelector('.product__quantity-value').textContent;
        


        let basketAdded = document.querySelectorAll('.cart__product');
        let inBasket = false;
        basketAdded.forEach(addItem => {
            if (addItem.dataset.id == productId) {
                inBasket = true;
                let countAdd = addItem.querySelector('.cart__product-count');
                
                let sum = Number(countAdd.textContent) + Number(count);
                countAdd.innerText = sum;
            }

        })
        if (!inBasket) {
            let basket = document.querySelector('.cart__products');
            basket.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}"> 
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${count}</div>
            </div>`);
        }
    })


})