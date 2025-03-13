export default class FormHandler {
    static initializeFormHandlers() {
        this.setupProjectForm();
        this.setupTaskForm();
    }

    static setupProjectForm() {
        const modal = document.getElementById('project-form-modal');
        const form = document.getElementById('project-form');
        const addProjectBtn = document.getElementById('add-project-btn');

        if (!modal || !form || !addProjectBtn) {
            console.error('Project form elements not found:', { modal, form, addProjectBtn });
            return;
        }

        addProjectBtn.onclick = () => modal.showModal();

        form.onsubmit = () => {
            const projectName = document.getElementById('project-name').value;
            if (projectName) {
                this.onProjectSubmit(projectName);
                modal.close();
                form.reset();
            }
            return false;
        };

        const closeButton = modal.querySelector('.close-dialog');
        if (closeButton) {
            closeButton.onclick = () => modal.close();
        } else {
            console.error('Close dialog button not found in project modal');
        }
    }

    static setupTaskForm() {
        const modal = document.getElementById('task-form-modal');
        const form = document.getElementById('task-form');
        const addTaskBtn = document.getElementById('add-task-btn');

        if (!modal || !form || !addTaskBtn) {
            console.error('Task form elements not found:', { modal, form, addTaskBtn });
            return;
        }

        addTaskBtn.onclick = () => modal.showModal();

        form.onsubmit = () => {
            const taskData = {
                title: document.getElementById('task-title').value,
                description: document.getElementById('task-description').value,
                dueDate: document.getElementById('task-due-date').value,
                priority: document.getElementById('task-priority').value
            };
            
            this.onTaskSubmit(taskData);
            modal.close();
            form.reset();
            return false;
        };

        const closeButton = modal.querySelector('.close-dialog');
        if (closeButton) {
            closeButton.onclick = () => modal.close();
        } else {
            console.error('Close dialog button not found in task modal');
        }
    }

    static onProjectSubmit(projectName) {
        console.log('Project submitted:', projectName);
    }

    static onTaskSubmit(taskData) {
        console.log('Task submitted:', taskData);
    }
}