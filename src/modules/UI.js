import Task from './Task.js';
import Project from './Project.js';
import ToDoList from './ToDoList.js';
import ProjectUI from './ProjectUI.js';
import TaskUI from './TaskUI.js';

export default class UI {
  static toDoList = new ToDoList();

  static init() {
    console.log("UI Initialized");

    if (!UI.toDoList.projects) {
      UI.toDoList.projects = [];
    }

    // ✅ Load default project and tasks
    UI.loadSampleData();
    ProjectUI.renderProjects();
    TaskUI.renderTasks();
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
    document.getElementById('add-project-btn').addEventListener('click', UI.addProject);
    document.getElementById('add-task-btn').addEventListener('click', UI.addTask);
  }

  static addProject() {
    const projectName = prompt("Enter project name:");
    if (projectName) {
      const project = new Project(projectName);
      UI.toDoList.addProject(project);
      ProjectUI.renderProjects();
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
      TaskUI.renderTasks();
    }
  }

  static selectProject(projectName) {
    UI.toDoList.setCurrentProject(projectName);
    TaskUI.renderTasks();
  }

  static removeProject(projectName) {
    UI.toDoList.removeProject(projectName);
    ProjectUI.renderProjects();
    TaskUI.renderTasks();
  }

  static removeTask(taskTitle) {
    const currentProject = UI.toDoList.getCurrentProject();
    if (!currentProject) return;

    currentProject.removeTask(taskTitle);
    TaskUI.renderTasks();
  }
}
