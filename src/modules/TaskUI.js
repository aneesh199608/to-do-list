import UI from "./UI.js";

export default class TaskUI {
  static renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    const projectTitle = document.getElementById('project-title');
    const addTaskBtn = document.getElementById('add-task-btn');

    const currentProject = UI.toDoList.getCurrentProject();

    // Show/hide Add Task button
    if (addTaskBtn) {
      addTaskBtn.style.display = currentProject ? 'block' : 'none';
    }

    if (!currentProject) {
      projectTitle.textContent = "No Project Selected"; 
      taskListContainer.innerHTML = `
        <div class="empty-state">
          <p>Select or create a project to get started</p>
        </div>
      `;
      return;
    }

    projectTitle.textContent = currentProject.name; 
    if (currentProject.tasks.length === 0) {
      taskListContainer.innerHTML = "<p>No tasks available. Add some tasks!</p>";
      return;
    }

    currentProject.tasks = this.sortTasks(currentProject.tasks);
    taskListContainer.innerHTML = "";
    currentProject.tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task', `${task.priority.toLowerCase()}-priority`);
      taskElement.innerHTML = `
        <div class="task-content">
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
          <div class="task-text ${task.completed ? 'completed' : ''}">
            <strong>${task.title}</strong>
            <span>${task.description}</span>
            <div class="task-meta">
              <span class="${task.isOverdue ? 'overdue' : ''}">
                ${task.relativeDate} ${task.isOverdue ? '(Overdue)' : ''}
              </span>
              <span>Priority: ${task.priority}</span>
            </div>
          </div>
          <div class="delete-task" data-remove-task="${task.title}">
            <svg viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </div>
        </div>
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

    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const taskElement = e.target.closest('.task');
        const taskTitle = taskElement.querySelector('.delete-task').dataset.removeTask;
        const currentProject = UI.toDoList.getCurrentProject();
        const task = currentProject.getTask(taskTitle);
        task.toggleComplete();
        taskElement.querySelector('.task-text').classList.toggle('completed');
      });
    });
  }

  static sortTasks(tasks) {
    return tasks.sort((a, b) => a.dueDate - b.dueDate);
  }
}
