import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TodoComponent } from './todos/todo/todo.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {AppRoutingModule} from './app-routing.module';
import {TodosModule} from '../todos/todos.module';




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
