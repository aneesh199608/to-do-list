// import Task from './Task.js';
// import Project from './Project.js';
// import ToDoList from './ToDoList.js';

export default class UI {
  static init() {
    console.log("UI Initialized");
    UI.renderProjects();
  }

  static renderProjects() {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = `<h2>Projects will be listed here...</h2>`;
  }
}
