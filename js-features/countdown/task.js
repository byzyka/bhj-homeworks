
const timer = document.getElementById('timer');

const intervalId = setInterval(function () {
    timer.textContent = timer.textContent - 1;
    if (timer.textContent == 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе")

    }
}, 1000)


