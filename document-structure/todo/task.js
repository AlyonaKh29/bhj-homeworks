document.addEventListener('DOMContentLoaded', () => {
    const task = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const form = document.forms[0];
    form.addEventListener('submit', taskAdd);
    
    function taskAdd(event) { 
        event.preventDefault();
        const verifiedValue = task.value.trim();
        if (verifiedValue) {
            let elementContent = `<div class="task">
            <div class="task__title">${task.value}</div>
            <a href="#" class="task__remove">&times;</a>
            </div>`
            tasksList.insertAdjacentHTML("beforeEnd", elementContent);
        }
        form.reset();
        const newTask = tasksList.lastElementChild;
        const elementRemove = newTask.querySelector('.task__remove');
        elementRemove.addEventListener('click', (event) => {
            event.preventDefault();
            newTask.remove();
        })
    }    
})

