import { Injectable } from '@angular/core';
import { Tasks } from 'src/app/interfaces/tasksInterface';
import { Task } from 'src/app/classes/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Tasks[] = [
    {
      startDate: new Date(2021, 4, 23, 9, 30),
      endDate: new Date(2021, 4, 23, 11, 30),
      status: 0,
      priority: 0,
      completion: 0,
      employee: 'John Heart',
      id: 0,
      subject: 'Choose between PPO and HMO Health Plan'
    },
  ];

constructor() { }

}
