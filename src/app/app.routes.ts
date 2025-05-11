import { Routes } from '@angular/router';
import { TodoList } from './feature/component/todo-list/todo-list';
import { TodoChart } from './feature/component/todo-chart/todo-chart';

export const routes: Routes = [
    { path: 'list', component: TodoList },
    { path: 'chart', component: TodoChart },
    { path: '', redirectTo: 'list', pathMatch: 'full' }, // default
  ];
