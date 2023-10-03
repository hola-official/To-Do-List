//Making references to the required HTML elements
const datetimeEl = document.getElementById("datetime");
const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const taskList = document.getElementById("taskList");

//To define a function to update the date and time
const updateDateTime = () => {
    const datetime = new Date();
    datetimeEl.innerText = datetime.toLocaleString();
};

//To set an interval to update date and time every second
setInterval(updateDateTime, 1000);

updateDateTime();

// To define a function to add a new task
const addTask = () => {
    const taskText = taskInput.value;
    const descriptionText = descriptionInput.value;
    const dateText = dateInput.value;
    const timeText = timeInput.value;

    if (taskText === "") {
        alert("Kindly fill in the input field");
    } else {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <span><strong>Task:</strong> ${taskText}</span>
          <span><strong>Description:</strong> ${descriptionText}</span>
          <span><strong>Date:</strong> ${dateText}</span>
          <span><strong>Time:</strong> ${timeText}</span>
          <button onclick="removeTask(this)"><i class="fa-solid fa-trash"></i></button>
        `;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        taskInput.value = "";
        descriptionInput.value = "";
        dateInput.value = "";
        timeInput.value = "";

        // Save the once reload data
        saveData();
    }
};

// To define a function to remove a task
const removeTask = (button) => {
    // To remove the parent element (task item) of the clicked button
    taskList.removeChild(button.parentElement);

    saveData();
};

// To define a function to save the task list data
const saveData = () => {
    // Storing the inner HTML of the task list in localStorage
    localStorage.setItem("data", taskList.innerHTML);
};

// To define a function to load saved data from localStorage
const loadData = () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        // Populating the task list with the saved data
        taskList.innerHTML = savedData;
    }
};

// Load saved data on page load
loadData();
