import Project from './Project.js';

export default class ToDoList {
    constructor() {
        this.project = [];
    }

    addProject(project) {
        if (project instanceof Project) {
            this.projects.push(project);
        }
    }

    removeProject(index) {
        this.projects.splice(index,1);
    }

    getProject(projectName) {
        return this.projects.find(project => project.name === projectName);
    }
    
    updateProject(oldName, newName) {
        const project = this.getProject(oldName);
        if (project) {
          project.name = newName;
        }
    }
}