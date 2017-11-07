import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[];
  constructor() { }

  ngOnInit() {
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }

}
