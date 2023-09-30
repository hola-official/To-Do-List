// Step 1: Get references to the required HTML elements
const datetimeElement = document.getElementById("datetime");
const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const taskList = document.getElementById("taskList");

// Step 2: Define a function to update the date and time
const updateDateTime = () => {
    const datetime = new Date();
    datetimeElement.innerText = datetime.toLocaleString();
};

// Step 3: Set an interval to update date and time every second
setInterval(updateDateTime, 1000);

// Step 4: Update date and time initially
updateDateTime();

// Step 5: Define a function to add a new task
const addTask = () => {
    // Retrieve values from input fields
    const taskText = taskInput.value;
    const descriptionText = descriptionInput.value;
    const dateText = dateInput.value;
    const timeText = timeInput.value;

    // Check if task text is not empty
    if (taskText !== "") {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <span><strong>Task:</strong> ${taskText}</span>
          <span><strong>Description:</strong> ${descriptionText}</span>
          <span><strong>Date:</strong> ${dateText}</span>
          <span><strong>Time:</strong> ${timeText}</span>
          <button onclick="removeTask(this)">Remove</button>
        `;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear input fields
        taskInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
        timeInput.value = "";

        // Save the updated data
        saveData();
    }
};

// Step 6: Define a function to remove a task
const removeTask = (button) => {
    // Remove the parent element (task item) of the clicked button
    taskList.removeChild(button.parentElement);

    // Save the updated data
    saveData();
};

// Step 7: Define a function to save the task list data
const saveData = () => {
    // Store the inner HTML of the task list in localStorage
    localStorage.setItem('data', taskList.innerHTML);
};

// Step 8: Define a function to load saved data from localStorage
const loadData = () => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
        // Populate the task list with the saved data
        taskList.innerHTML = savedData;
    }
};

// Step 9: Load saved data on page load
loadData();
