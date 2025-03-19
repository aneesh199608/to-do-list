import { format, isFuture, isToday, isTomorrow } from 'date-fns';

export default class Task {
    constructor(title, description, dueDate, priority) {
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
}