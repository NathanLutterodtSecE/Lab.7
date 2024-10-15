// Selecting elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task
const createTask = (taskText) => {
    const taskItem = document.createElement('li');

    // Checkbox to mark the task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', (e) => {
        taskItem.classList.toggle('completed');
    });

    // Task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Delete button to remove the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Append checkbox, text, and delete button to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    return taskItem;
};

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from reloading the page

    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Create and append the new task to the list
    const taskItem = createTask(taskText);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});
