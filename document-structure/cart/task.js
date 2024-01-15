//счетчики + и - 
let control = document.querySelectorAll('.product__quantity-control');
console.log(control);

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
        console.log(product);
        //айди товара
        let productId = product.dataset.id;
        console.log(productId);
        let productImg = product.querySelector('img').src;
        //количество
        let count = product.querySelector('.product__quantity-value').textContent;

        //все,что в корзине
        let basketAdded = [...document.querySelectorAll('.cart__product')];
      

        const productInCard = basketAdded.find(addItem => addItem.dataset.id === productId);
       
        if (productInCard) {
            // увеличивать количество у productInCard
            let countAdd = productInCard.querySelector('.cart__product-count');
            let sum = Number(countAdd.textContent) + Number(count);
            countAdd.innerText = sum;

        } else {

            let basket = document.querySelector('.cart__products');
            basket.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}"> 
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${count}</div>
            </div>`);

        }
        
    })
})