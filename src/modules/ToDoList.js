import Project from './Project.js';

export default class ToDoList {
    constructor() {
        this.projects = [];
        this.currentProject = null;
    }

    addProject(project) {
        if (project instanceof Project) {
            this.projects.push(project);
            // Set as current project if it's the first one
            if (!this.currentProject) {
                this.currentProject = project;
            }
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

    setCurrentProject(project) {
        this.currentProject = project;
    }

    getCurrentProject() {
        return this.currentProject;
    }
}