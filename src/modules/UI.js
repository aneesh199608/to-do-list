import Task from './Task.js';
import Project from './Project.js';
import ToDoList from './ToDoList.js';
import ProjectUI from './ProjectUI.js';
import TaskUI from './TaskUI.js';
import FormHandler from './FormHandler.js';

export default class UI {
  static toDoList = new ToDoList();

  static init() {
    console.log("UI Initialized");

    ProjectUI.renderProjects();
    TaskUI.renderTasks();
    UI.setupEventListeners();
    
    // Set up form handler callbacks
    FormHandler.onProjectSubmit = (projectName) => {
      const project = new Project(projectName);
      UI.toDoList.addProject(project);
      UI.toDoList.setCurrentProject(project);
      ProjectUI.renderProjects();
      TaskUI.renderTasks();
      UI.toDoList.saveToLocalStorage();
    };

    FormHandler.onTaskSubmit = (taskData) => {
      const currentProject = UI.toDoList.getCurrentProject();
      if (!currentProject) {
        alert("Please create or select a project first.");
        return;
      }

      const newTask = new Task(
        taskData.title,
        taskData.description,
        taskData.dueDate,
        taskData.priority
      );
      currentProject.addTask(newTask);
      TaskUI.renderTasks();
      UI.toDoList.saveToLocalStorage();
    };

    FormHandler.initializeFormHandlers();
  }

  static setupEventListeners() {
    document.getElementById('add-project-btn').addEventListener('click', UI.addProject);
    document.getElementById('add-task-btn').addEventListener('click', UI.addTask);
  }

  static selectProject(projectName) {
    const project = UI.toDoList.getProject(projectName);
    if (project) {
      UI.toDoList.setCurrentProject(project);
      TaskUI.renderTasks();
    }
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
