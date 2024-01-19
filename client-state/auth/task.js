let form = document.getElementById('signin__form');

let input = [...document.querySelectorAll('input')];

let inputName = input.find(item => item.getAttribute('name') == 'login')
let password = input.find(item => item.getAttribute('name') == 'password')



form.addEventListener('submit', e => {
    e.preventDefault();

    if (inputName.value != '' && password.value != '') {

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
                    let signin = document.getElementById('signin');
                    signin.classList.remove('signin_active');
                    let welcome = document.getElementById('welcome');
                    
                    welcome.classList.add('welcome_active');
                    let spanId = document.getElementById('user_id');
                    spanId.textContent = userId;
                } else {
                    // let welcome = document.getElementById('welcome');


                    localStorage.setItem('user_id', userId);

                }
            }

        }

        xhr.send(new FormData(form));
    }
})