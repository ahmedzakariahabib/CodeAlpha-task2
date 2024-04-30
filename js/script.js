 
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskList = document.getElementById('taskList');
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="task-text">${taskText}</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function deleteTask(btn) {
        const listItem = btn.parentElement;
        listItem.remove();
    }
 