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

    removeProject(projectName) {
        const index = this.projects.findIndex(p => p.name === projectName);
        if (index > -1) {
            this.projects.splice(index, 1);
            // Clear current project if it's the one being deleted
            if (this.currentProject?.name === projectName) {
                this.currentProject = null;
            }
        }
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