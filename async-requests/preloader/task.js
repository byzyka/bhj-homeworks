let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.responseType = 'json'
let imgLoader = document.getElementById('loader');

xhr.onloadend = ()=> {
    if (xhr.status == 200) {
        imgLoader.classList.remove('loader_active');
    } else {
        console.log("Ошибка");
    }
};

let items = document.getElementById('items');

xhr.onload = () => {
    let response = xhr.response;
    
    let valutes = response.response.Valute;
    
    for (let valute in valutes) {
        let value = Number(valutes[valute].Value).toFixed(2);
        
        let itemCode = valute;
       

        let items = document.getElementById('items');
        
        // Создаем HTML-разметку для валюты

        items.insertAdjacentHTML('beforeEnd', `<div class="item">
        <div class="item__code">
        ${itemCode}
            </div>
            <div class="item__value">
            ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>`);
    }
}

xhr.send();
