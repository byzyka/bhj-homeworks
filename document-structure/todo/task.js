let form = document.getElementById('tasks__form');
console.log(form);

let inputTask = document.getElementById('task__input');
console.log(inputTask);

let button = document.getElementById('tasks__add');
console.log(button);
let taskList = document.getElementById('tasks__list');
console.log(taskList);
//form.addEventListener('')

button.addEventListener('click', event => {
    event.preventDefault();
   // console.log(inputTask.value);
    if (inputTask.value != "") {
        taskList.insertAdjacentHTML('beforeEnd', `<div class="task">
        <div class="task__title">
          ${inputTask.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
        )
    }

    let taskRemove = document.querySelectorAll('.task__remove');
    console.log(taskRemove);

    taskRemove.forEach(task => {
        console.log(task);
        task.addEventListener('click', ()=> {
            let list = task.closest('.task');
            console.log(list);
            list.remove()
        })
    })
})