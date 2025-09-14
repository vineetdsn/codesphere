import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    this.todoService.toggleCompletion(task);
  }

  deleteTask(task: Task) {
    this.todoService.deleteTask(task);
  }
}
