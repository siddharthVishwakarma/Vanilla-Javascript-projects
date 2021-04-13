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
    clearBtn.addEventListener('click',clearTask);
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

    // Clear input
    taskInput.value = '';


    e.preventDefault();

}

// *Function for clearing Tasks
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Do you want to delete the task')){
            // console.log(e.target)
            e.target.parentElement.parentElement.remove();
        }
    }
}

//* Function for removing task
function clearTask(){
    // first way
    // taskList.innerHTML = '';

    // second way Faster method
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


}