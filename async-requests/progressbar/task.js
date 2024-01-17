
let form = document.getElementById('form');
console.log(form);
let progress = document.getElementById('progress');

form.addEventListener('submit', e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = event => {

        let countProgress = (event.loaded / event.total) * 100;
        progress.value = countProgress;

    };

    xhr.onloadend = () => {
        if (xhr.status === 200) {
            console.log("Успех");
        } else {
            console.log("Ошибка " + this.status);
        }
    };

    xhr.send(new FormData(form));
})

