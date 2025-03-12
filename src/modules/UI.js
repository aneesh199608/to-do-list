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
        UI.setupEventListeners();
  }

    static setupEventListeners() {
        document.getElementById('add-project-btn').addEventListener('click', UI.addProjects);
    }

    static addProjects() {
        const projectName = prompt("Enter project name: ");
        if(projectName) {
            const project = new Project(projectName);
            UI.toDoList.addProject(project);
            UI.renderProjects();
        }
    }

    static renderProjects() {
        if (!UI.toDoList.projects) return;

        const projectContainer = document.getElementById('project-container');
        projectContainer.innerHTML = " ";

        UI.toDoList.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <button onclick = "UI.removeProject('${project.name})">Delete</button>
                `;
                projectContainer.appendChild(projectElement);
        });
  }
    static removeProject(projectName) {
        UI.toDoList.removeProject(projectName);
        UI.renderProjects();
    }

    static loadSampleData() {
        const sampleProject = new Project("Default Project");

        sampleProject.addTask(new Task("Buy groceries", "Milk, Eggs, Bread", "2025-03-15", "High"));
        sampleProject.addTask(new Task("Workout", "Morning cardio session", "2025-03-16", "Medium"));
        sampleProject.addTask(new Task("Read a book", "Finish 50 pages of a novel", "2025-03-17", "Low"));
        sampleProject.addTask(new Task("Write a blog", "Draft an article about JavaScript", "2025-03-18", "High"));
        sampleProject.addTask(new Task("Clean room", "Organize desk and wardrobe", "2025-03-19", "Medium"));

        UI.toDoList.addProject(sampleProject);

    }
}
