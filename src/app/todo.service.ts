import { Injectable } from '@angular/core';
import { Task } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [];
  private idCounter = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({ id: this.idCounter++, title: title, completed: false });
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
