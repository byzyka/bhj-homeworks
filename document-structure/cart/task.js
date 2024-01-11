//карточка продукта
let control = document.querySelectorAll('.product__quantity-control');
//console.log(control)

let productItem = control.forEach(itemControl => {
    itemControl.addEventListener('click', () => {
        let card = itemControl.closest('.product');
       // console.log(card)

        let value = card.querySelector('.product__quantity-value');
       // console.log(value)

        if (itemControl.classList.contains('product__quantity-control_inc')) {

            let total = Number(value.textContent) + 1;
            value.innerText = total;
            // console.log(total);
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
//console.log(productAdd)

productAdd.forEach(itemAdd => {
    itemAdd.addEventListener('click', () => {

        //карточка товара
        let product = itemAdd.closest('.product');
        // console.log(product);

        //то,что должно быть в корзине
        let productId = product.dataset.id;
        // console.log(productId);
        let productImg = product.querySelector('img').src;
        // console.log(productImg);
        let count = product.querySelector('.product__quantity-value').textContent;
        //console.log(count);



        let basketAdded = document.querySelectorAll('.cart__product');
        let inBasket = false;
        basketAdded.forEach(addItem => {
            if (addItem.dataset.id == productId) {
                inBasket = true;
                let countAdd = addItem.querySelector('.cart__product-count');
                //console.log(countAdd);

                let sum = Number(countAdd.textContent) + Number(count);
                countAdd.innerText = sum;
            }

        })
        if (!inBasket) {
            let basket = document.querySelector('.cart__products');
            //console.log(basket);
            basket.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}"> 
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${count}</div>
            </div>`);
        }
    })


})