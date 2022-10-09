
const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

// EVENTS
btnTask.addEventListener('click', function() {
    if(!inputTask.value) return;
    createTask(inputTask.value);
});

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('clear')) {
        element.parentElement.remove();
        saveTasks();
    }
});

// FUNCTIONS
function createLi () {
    const li = document.createElement('li');
    return li;
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createClearButton(li) {
    li.innerText += ' ';
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Apagar';
    // clearButton.classList.add('clear');
    clearButton.setAttribute('class', 'clear');
    clearButton.setAttribute('title', 'Apagar a tarefa');
    li.appendChild(clearButton);
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    tasks.appendChild(li);
    clearInput();
    createClearButton(li);
    saveTasks();
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];
    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function readSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    for (let task of taskList) {
        createTask(task);
    }
}

readSavedTasks();
