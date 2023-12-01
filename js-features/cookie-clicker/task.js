const cookie = document.getElementById('cookie');

let clicker = document.getElementById('clicker__counter');


let clickCounter = 0;

function clickSizes() {

    clickCounter++;
    clicker.textContent = clickCounter;

    if (clickCounter % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 100;
    }

}
cookie.onclick = clickSizes;