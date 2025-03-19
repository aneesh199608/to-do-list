import { format, isFuture, isToday, isTomorrow } from 'date-fns';

let lastId = 0;

export default class Task {
    constructor(title, description, dueDate, priority) {
        this.id = ++lastId;
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.completed = false;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setDate(dueDate) {
        this.dueDate = new Date(dueDate);
    }

    getDate() {
        return this.dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    get formattedDate() {
        return format(this.dueDate, 'MM/dd/yyyy');
    }

    get relativeDate() {
        if (isToday(this.dueDate)) return 'Today';
        if (isTomorrow(this.dueDate)) return 'Tomorrow';
        return format(this.dueDate, 'EEEE, MMM do');
    }

    get isOverdue() {
        return !this.completed && !isFuture(this.dueDate);
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate.toISOString(),
            priority: this.priority,
            completed: this.completed
        };
    }

    static fromJSON(json) {
        const task = new Task(
            json.title,
            json.description,
            json.dueDate,
            json.priority
        );
        task.id = json.id;
        task.completed = json.completed;
        return task;
    }
}