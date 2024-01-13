function addMedicineReminder() {
    const medicineName = document.getElementById('medicineName').value;
    const medicineTime = document.getElementById('medicineTime').value;
    const medicineDate = document.getElementById('medicineDate').value;
    const medicineTaskList = document.getElementById('medicineTaskList');

    if (medicineName.trim() !== '' && medicineTime.trim() !== '' && medicineDate.trim() !== '') {
        // Create a new medicine reminder item
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${medicineName} - ${medicineTime} on ${medicineDate}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Add the new task to the medicine reminder list
        medicineTaskList.appendChild(newTask);

        // Clear the input fields
        document.getElementById('medicineName').value = '';
        document.getElementById('medicineTime').value = '';
        document.getElementById('medicineDate').value = '';
        alert(`Reminder added for the medicine ${medicineName}`);

        const now = new Date();
        const [hours, minutes] = medicineTime.split(':');
        const reminderTime = new Date(medicineDate + 'T' + hours + ':' + minutes);

        const timeDiff = reminderTime.getTime() - now.getTime();

        if (timeDiff > 0) {
            setTimeout(() => {
                alert(`It's time to take your medicine: ${medicineName}`);
            }, timeDiff);
        } else {
            alert('Invalid time. Please set a future time for the reminder.');
        }
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}

function addExerciseTask() {
    const exerciseTaskInput = document.getElementById('exerciseTaskInput');
    const exerciseTaskList = document.getElementById('exerciseTaskList');

    if (exerciseTaskInput.value.trim() !== '') {
        // Create a new exercise task item
        const newTask = document.createElement('li');
        newTask.innerHTML = `
          <span>${exerciseTaskInput.value}</span>
          <button onclick="removeTask(this)">Remove</button>
        `;
        // Add the new task to the exercise list
        exerciseTaskList.appendChild(newTask);
        // Clear the input field
        exerciseTaskInput.value = '';
    }
}
function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}


    function addDietTask() {
        const dietName = document.getElementById("dietName").value;
        const shift = document.getElementById("shift").value;
        const dayName = document.getElementById("dayName").value;

        if (dietName.trim() !== "") {
            const newTask = document.createElement("li");
            newTask.innerHTML = `
                <span>${dietName} - ${shift} shift on ${dayName}</span>
                <button onclick="removeDietTask(this)">Remove</button>
            `;

            dietTaskList.appendChild(newTask);

            document.getElementById("dietName").value = "";
            document.getElementById("shift").value = "morning";
            document.getElementById("dayName").value = "Monday";
        }
    }

    function removeDietTask(button) {
        const taskItem = button.parentNode;
        taskItem.remove();
    }
