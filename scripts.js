const todoList = document.querySelector('#todoList');
const taskInput = document.querySelector('#taskInput');

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value) {
        const newTask = document.createElement('div');
        newTask.classList.add('todo');
        newTask.innerHTML = `
            <span>${this.value}</span>
            <span class="remove">X</span>
        `;
        todoList.appendChild(newTask);
        this.value = '';
    }
});

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
});
