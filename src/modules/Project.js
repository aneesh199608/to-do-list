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
}