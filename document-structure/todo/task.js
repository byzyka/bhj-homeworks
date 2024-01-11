let form = document.getElementById('tasks__form');


let inputTask = document.getElementById('task__input');


let button = document.getElementById('tasks__add');

let taskList = document.getElementById('tasks__list');



button.addEventListener('click', event => {
    event.preventDefault();
  
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
    

    taskRemove.forEach(task => {
       
        task.addEventListener('click', ()=> {
            let list = task.closest('.task');
            console.log(list);
            list.remove()
        })
    })
})