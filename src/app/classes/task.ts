import { Tasks } from '../interfaces/tasksInterface';
export class Task implements Tasks {

    startDate: Date;
    endDate: Date;
    status: number;
    priority: number;
    completion: number;
    employee: string;
    id: number;
    subject: string;
    
    constructor() {
        this.startDate = new Date();
        this.endDate = new Date();
        this.status = 0;
        this.priority = 0;
        this.completion = 0;
        this.employee = '';
        this.id = 0;
        this.subject = '';
    }

  }
