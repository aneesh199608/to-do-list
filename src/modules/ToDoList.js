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
}