import UI from "./UI.js";

export default class ProjectUI {
  static renderProjects() {
    
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = "";

    UI.toDoList.projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
        <h3 data-project="${project.name}">${project.name}</h3>
        <button data-delete-project="${project.name}">Delete</button>
      `;
      projectContainer.appendChild(projectElement);
    });

    ProjectUI.setupProjectEventListeners();
  }

  static setupProjectEventListeners() {
    document.querySelectorAll('[data-project]').forEach(projectEl => {
      projectEl.addEventListener('click', (e) => {
        UI.selectProject(e.target.dataset.project);
      });
    });

    document.querySelectorAll('[data-delete-project]').forEach(deleteBtn => {
      deleteBtn.addEventListener('click', (e) => {
        UI.removeProject(e.target.dataset.deleteProject);
      });
    });
  }
}
