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
}