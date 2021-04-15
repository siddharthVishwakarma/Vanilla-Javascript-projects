// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listners
loadEventListners();

function loadEventListners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Fliter task event
    filter.addEventListener('keyup', filterTask);
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
}

// * Get task from local storage
function getTasks() {
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
    })
}

//*Function for adding Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Please add a task');
    }

    // Create li element
    const li = document.createElement('li');

    // Add class
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in Local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();

}

// *Function for storing task in local storage
function storeTaskInLocalStorage(task){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('task', JSON.stringify(tasks))
}

// *Function for clearing Tasks
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Do you want to delete the task?')){
            // console.log(e.target)
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

//* Function for removing task from local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//* Function for clearing task
function clearTask(){
    // first way
    // taskList.innerHTML = '';

    // second way Faster method
    if(confirm('Do you want to clear all the task?')){
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
    // clear from local storage
    clearTasksFromLocalStorage()
}

// *This clears tasks from ls
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//* function for filtering task
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}