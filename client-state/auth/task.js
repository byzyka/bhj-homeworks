let form = document.getElementById('signin__form');

let input = [...document.querySelectorAll('input')];
let welcome = document.getElementById('welcome');
let spanId = document.getElementById('user_id');


form.addEventListener('submit', e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.onload = () => {
        let response = xhr.response;

        let userId = response.user_id;

        if (response.success == false) {
            alert('«Неверный логин/пароль»')
        } else {
            let storedId = localStorage.getItem('user_id');

            //если нашелся id
            if (storedId) {

                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                let spanId = document.getElementById('user_id');
                spanId.textContent = userId;

            } else {
                localStorage.setItem('user_id', userId);
            }
        }
    }
    xhr.send(new FormData(form));
    form.reset;
});

window.addEventListener('DOMContentLoaded', () => {
    let user = localStorage.getItem('user_id');
    if (user) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');

        spanId.textContent = user;
    }
});