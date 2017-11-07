import { Component, OnInit } from '@angular/core';
import {Todo} from '../../app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit() {
  }
  createNewTodo(name: string) {
    if (name !== '') {
      this.todos.push(new Todo(name));
    }
    // todo tester si le name existe déja
    // todo clean input after added
  }
}
