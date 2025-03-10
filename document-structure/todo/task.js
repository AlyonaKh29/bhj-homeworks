document.addEventListener('DOMContentLoaded', () => {
    const task = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const form = document.forms[0];
    form.addEventListener('submit', taskAdd);
    
    function taskAdd(event) { 
        event.preventDefault();
        let elementContent = `<div class="task">
        <div class="task__title">${task.value}</div>
        <a href="#" class="task__remove">&times;</a>
        </div>`
        tasksList.insertAdjacentHTML("beforeEnd", elementContent);
        form.reset();
        taskRemove();        
    }
    
    function taskRemove() { 
        document.querySelectorAll('.task__remove').forEach((item) => {
            item.addEventListener('click', () => {
                const parent = item.closest('div.task');
                    parent.remove();
            })
        })
    }
})
