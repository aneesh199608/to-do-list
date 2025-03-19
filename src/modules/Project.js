import Task from "./Task.js";
export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        if(task instanceof Task) {
            this.tasks.push(task);
        }
    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
    }

    getTask(taskTitle) {
        return this.tasks.find(task => task.title === taskTitle);
    }

    updateTask(taskTitle, updates) {
        const task = this.getTask(taskTitle);
        if(task) {
            task.updateTask(updates);
        }
    }

    toJSON() {
        return {
            name: this.name,
            tasks: this.tasks.map(task => task.toJSON())
        };
    }

    fromJSON(json) {
        const project = new Project(json.name);
        project.tasks = json.tasks.map(taskJson => {
            const task = Task.fromJSON(taskJson);
            task.id = taskJson.id; // Preserve original ID
            return task;
        });
        return project;
    }
}