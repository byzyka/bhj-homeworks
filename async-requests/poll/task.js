let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json'

xhr.onload = () => {
    let responseObj = xhr.response;
    //console.log(responseObj.data.answers);

    //ответы это масссив, прогнать и записать в переменную
    let buttonAnswers = [...responseObj.data.answers];

    // Создаем HTML-разметку для каждой  кнопки
    for (let buttonItem in buttonAnswers) {

        let value = buttonAnswers[buttonItem];

        let pollAnswers = document.getElementById('poll__answers');
        //добавили кнопки
        pollAnswers.insertAdjacentHTML('afterBegin',
            `<button class="poll__answer">
            ${value}
          </button>
          `);

        //нашли кнопку
        //навесить прослушку на кнопку и выводить арлет
        let button = pollAnswers.querySelector('.poll__answer');
        
        button.addEventListener('click', event => {
            event.preventDefault();
            let target = event.target;
            
            if (target) {
                alert('Спасибо, ваш голос засчитан!')
            }
        })

        //сама строка с вопросом
        let pollTitle = document.getElementById('poll__title');
        console.log(pollTitle);

        pollTitle.textContent = responseObj.data.title;
        console.log(pollTitle.textContent);
    };
};

xhr.send();

