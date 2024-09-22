function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        taskText.onclick = () => toggleComplete(taskText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(listItem);

        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function toggleComplete(taskText) {
    taskText.parentElement.classList.toggle('completed');
}

function deleteTask(listItem) {
    listItem.remove();
}
