import Task from './Task.js';
import Project from './Project.js';
import ToDoList from './ToDoList.js';

export default class UI {
  static toDoList = new ToDoList();

  static init() {
    console.log("UI Initialized");

    if (!UI.toDoList.projects) {
      UI.toDoList.projects = [];
    }

    UI.loadSampleData();
    UI.renderProjects();
    UI.renderTasks();
    UI.setupEventListeners();
  }

  static loadSampleData() {
    const sampleProject = new Project("My First Project");

    sampleProject.addTask(new Task("Buy groceries", "Milk, Eggs, Bread", "2025-03-15", "High"));
    sampleProject.addTask(new Task("Workout", "Morning cardio session", "2025-03-16", "Medium"));
    sampleProject.addTask(new Task("Read a book", "Finish 50 pages of a novel", "2025-03-17", "Low"));
    sampleProject.addTask(new Task("Write a blog", "Draft an article about JavaScript", "2025-03-18", "High"));
    sampleProject.addTask(new Task("Clean room", "Organize desk and wardrobe", "2025-03-19", "Medium"));

    UI.toDoList.addProject(sampleProject);
  }

  static setupEventListeners() {
    document.getElementById('add-project-btn').addEventListener('click', () => UI.addProject());
    document.getElementById('add-task-btn').addEventListener('click', () => UI.addTask());
  }

  static addProject() {
    const projectName = prompt("Enter project name:");
    if (projectName) {
      const project = new Project(projectName);
      UI.toDoList.addProject(project);
      UI.renderProjects();
    }
  }

  static addTask() {
    const currentProject = UI.toDoList.getCurrentProject();
    if (!currentProject) {
      alert("Please create or select a project first.");
      return;
    }

    const taskTitle = prompt("Enter task title:");
    const taskDescription = prompt("Enter task description:");
    const taskDueDate = prompt("Enter due date (YYYY-MM-DD):");
    const taskPriority = prompt("Enter priority (High, Medium, Low):");

    if (taskTitle) {
      const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority);
      currentProject.addTask(newTask);
      UI.renderTasks();
    }
  }

  static renderProjects() {
    if (!UI.toDoList.projects) return;

    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = "";

    UI.toDoList.projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
        <h3 onclick="UI.selectProject('${project.name}')">${project.name}</h3>
        <button onclick="UI.removeProject('${project.name}')">Delete</button>
      `;
      projectContainer.appendChild(projectElement);
    });
  }

  static selectProject(projectName) {
    UI.toDoList.setCurrentProject(projectName);
    UI.renderTasks();
  }

  static renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = "";

    const currentProject = UI.toDoList.getCurrentProject();
    if (!currentProject || currentProject.tasks.length === 0) {
      taskListContainer.innerHTML = "<p>No tasks available. Add some tasks!</p>";
      return;
    }

    currentProject.tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <p><strong>${task.title}</strong> - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})</p>
        <button onclick="UI.removeTask('${task.title}')">Delete</button>
      `;
      taskListContainer.appendChild(taskElement);
    });
  }

  static removeProject(projectName) {
    UI.toDoList.removeProject(projectName);
    UI.renderProjects();
    UI.renderTasks();
  }

  static removeTask(taskTitle) {
    const currentProject = UI.toDoList.getCurrentProject();
    if (!currentProject) return;

    currentProject.removeTask(taskTitle);
    UI.renderTasks();
  }
}
