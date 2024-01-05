let chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', ()=> {
    chatWidget.classList.add('chat-widget_active')

})

let messages = document.getElementById('chat-widget__messages');
let input = document.querySelector('.chat-widget__input');


let date = new Date;
let hours = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");



let robotResponse = function () {
    // Создаем массив ответов от робота-грубияна
    let robotResponses = [
      "Я ничего не знаю",
      "Я ничего не понимаю",
      "Я не хочу отвечать",
      "Ответ найдете в Google",
      "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
    ];
  
    let randomIndexResponse = Math.floor(Math.random() * robotResponses.length);
    let randomResponse = robotResponses[randomIndexResponse];
    setTimeout(() => {
      messages.innerHTML += `
              <div class="message">
                  <div class="message__time">${hours}:${minutes}</div>
                  <div class="message__text">${randomResponse}</div>
              </div>
          `;
      ;
    }, 1000);
  };
  
  // Отправка сообщения
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
      messages.innerHTML += `
              <div class="message message_client">
                  <div class="message__time">${hours}:${minutes}</div>
                  <div class="message__text">${input.value}</div>
              </div>
          `;
      input.value = "";
      ;
      // Робот нам отвечает
      setTimeout(robotResponse, 1000);
      resetTimer();
    }
  });


