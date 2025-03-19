import Project from './Project.js';
import Task from './Task.js';

export default class ToDoList {
    constructor() {
        this.projects = [];
        this.currentProject = null;
        this.loadFromLocalStorage();
        
        // Check if localStorage was empty and load sample data
        if (this.projects.length === 0 && !localStorage.getItem('todoListData')) {
            this.loadSampleData();
            this.saveToLocalStorage();
        }
    }

    saveToLocalStorage() {
        const data = {
            projects: this.projects.map(project => project.toJSON()),
            currentProject: this.currentProject?.name
        };
        localStorage.setItem('todoListData', JSON.stringify(data));
    }

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('todoListData'));
        
        if (!data || !data.projects) {
            return; // Let constructor handle sample data
        }

        this.projects = data.projects.map(projectData => {
            const project = new Project(projectData.name);
            project.tasks = projectData.tasks.map(taskData => Task.fromJSON(taskData));
            return project;
        });

        this.currentProject = this.projects.find(
            p => p.name === data.currentProject
        ) || null;
    }

    addProject(project) {
        if (project instanceof Project) {
            this.projects.push(project);
            // Set as current project if it's the first one
            if (!this.currentProject) {
                this.currentProject = project;
            }
            this.saveToLocalStorage();
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
            this.saveToLocalStorage();
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

    loadSampleData() {
        const sampleProject = new Project("My First Project");
        
        // Add sample tasks with dates
        sampleProject.addTask(new Task(
            "Buy groceries",
            "Milk, Eggs, Bread",
            new Date().toISOString(),
            "High"
        ));
        
        sampleProject.addTask(new Task(
            "Finish project",
            "Complete todo list features",
            new Date(Date.now() + 86400000).toISOString(), // Tomorrow
            "Medium"
        ));
        
        this.addProject(sampleProject);
    }

    // Add this for development purposes only
    static clearStorage() {
        localStorage.removeItem('todoListData');
    }
}