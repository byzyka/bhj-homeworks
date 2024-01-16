let form = document.getElementById('tasks__form');


let inputTask = document.getElementById('task__input');
console.log(inputTask)


let button = document.getElementById('tasks__add');

let taskList = document.getElementById('tasks__list');
console.log(taskList)


form.addEventListener('click', event => {
  event.preventDefault();

  if (inputTask.value === inputTask.value.trim() && inputTask.value !== "") {
    taskList.insertAdjacentHTML('beforeEnd', `<div class="task">
        <div class="task__title">
          ${inputTask.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    form.reset();
  }

  let taskRemove = [...document.querySelectorAll('.task__remove')];
  console.log(taskRemove);


  //let list = taskRemove.find(task => task == task.closest('.task')) 
//console.log(list)
    
    //  list.remove()
   

  })
