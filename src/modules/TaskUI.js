import UI from "./UI.js";

export default class TaskUI {
  static renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    const projectTitle = document.getElementById('project-title'); 

    const currentProject = UI.toDoList.getCurrentProject();

    if (!currentProject) {
      projectTitle.textContent = "No Project Selected"; 
      taskListContainer.innerHTML = "<p>Please select or create a project.</p>";
      return;
    }

    projectTitle.textContent = currentProject.name; 
    if (currentProject.tasks.length === 0) {
      taskListContainer.innerHTML = "<p>No tasks available. Add some tasks!</p>";
      return;
    }

    taskListContainer.innerHTML = "";
    currentProject.tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <p><strong>${task.title}</strong> - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})</p>
        <button data-remove-task="${task.title}">Delete</button>
      `;
      taskListContainer.appendChild(taskElement);
    });

    TaskUI.setupTaskEventListeners();
  }

  static setupTaskEventListeners() {
    document.querySelectorAll('[data-remove-task]').forEach(deleteBtn => {
      deleteBtn.addEventListener('click', (e) => {
        UI.removeTask(e.target.dataset.removeTask);
      });
    });
  }
}
