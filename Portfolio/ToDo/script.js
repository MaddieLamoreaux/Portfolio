const themeToggleBtn = document.querySelector('.theme_toogle_btn');
const root = document.documentElement;

themeToggleBtn.addEventListener('click', function() {
    // Toggle between dark mode and light mode by changing CSS variables
    if (root.classList.contains('dark-mode')) {
        root.classList.remove('dark-mode');
        // Set light mode CSS variable values
        root.style.setProperty('--primary-color', 'white');
        root.style.setProperty('--secondary-color', '#1E1E1E');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--task-color', 'white');
        root.style.setProperty('--footer-color', '#1E1E1E');
        root.style.setProperty('--theme-btn', 'url("assets/Dark-theme-btn.svg")');
        root.style.setProperty('--container-bg', 'url("./assets/Light-empty.svg")');
    } else {
        root.classList.add('dark-mode');
        // Set dark mode CSS variable values
        root.style.setProperty('--primary-color', '#1E1E1E');
        root.style.setProperty('--secondary-color', '#333333');
        root.style.setProperty('--text-color', '#EAEAEA');
        root.style.setProperty('--task-color', '#3B3B3B');
        root.style.setProperty('--footer-color', '#1E1E1E');
        root.style.setProperty('--theme-btn', 'url("assets/Light-theme-btn.svg")');
        root.style.setProperty('--container-bg', 'url("./assets/Dark-empty.svg")');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    var newTaskInput = document.getElementById('new_task_input');
    var taskform = document.getElementById('new_task_form');
    var tasksList = document.getElementById('tasksList');
    var clearCompletedBtn = document.getElementById('clearCompletedBtn');

    // Add event listener to the form for submitting new tasks
    taskform.addEventListener('submit', function(event) {
        event.preventDefault();
        var newTask = newTaskInput.value.trim();
        if (newTask !== '') {
            addTask(newTask);
            newTaskInput.value = ''; // Clear the input field
        }
    });

    // Function to add a new task
    function addTask(task) {
        var li = document.createElement('li');
        li.textContent = task;
        li.classList.add('task'); // Add a class to the task element
        li.addEventListener('click', toggleTask); // Add event listener to toggle task completion
        tasksList.appendChild(li);
    }

    // Function to toggle task completion
     function toggleTask(event) {
     var task = event.target;
     task.classList.toggle('completed'); // Toggle 'completed' class on the task
}

    // Add event listener to clear completed tasks button
    clearCompletedBtn.addEventListener('click', function() {
        var completedTasks = tasksList.querySelectorAll('.completed');
        completedTasks.forEach(function(task) {
            task.remove();
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    var newTaskInput = document.getElementById('new_task_input');
    var taskform = document.getElementById('new_task_form');
    var tasksList = document.getElementById('tasksList');
    var clearCompletedBtn = document.getElementById('clearCompletedBtn');

    // Add event listener to the form for submitting new tasks
    taskform.addEventListener('submit', function(event) {
        event.preventDefault();
        var newTask = newTaskInput.value.trim();
        if (newTask !== '') {
            addTask(newTask);
            newTaskInput.value = ''; // Clear the input field
        }
    });

    // Function to add a new task
    function addTask(task) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTask); // Add event listener to toggle task completion
        li.appendChild(checkbox);
        var label = document.createElement('label');
        label.textContent = task;
        li.appendChild(label);
        tasksList.appendChild(li);
    }

    // Function to toggle task completion
    function toggleTask(event) {
        var checkbox = event.target;
        var taskItem = checkbox.parentElement;
        taskItem.classList.toggle('completed'); // Toggle 'completed' class on the task item
    }

    // Add event listener to clear completed tasks button
    clearCompletedBtn.addEventListener('click', function() {
        var completedTasks = tasksList.querySelectorAll('.completed');
        completedTasks.forEach(function(task) {
            task.remove();
        });
    });
});
});