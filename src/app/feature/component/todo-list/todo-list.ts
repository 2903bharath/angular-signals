import { Component, computed, inject, signal } from '@angular/core';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox'; // Import MatCheckboxModule and MatCheckboxChange
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskStore } from '../../store/todo.store';
import { TodoForm } from '../todo-form/todo-form';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoForm,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  taskStore = inject(TaskStore);

  todos = computed(() => this.taskStore.tasks());

  selectedDate = signal<string | null>(null);
  editingTodoId!: number | null;
  editTitle: string = '';

  availableDates = computed(() => {
    const dates = this.todos().map(
      (todo) => new Date(todo.createdAt).toISOString().split('T')[0]
    );
    return Array.from(new Set(dates)).sort();
  });

  filteredTodos = computed(() => {
    const selected = this.selectedDate();
    const all = this.todos();

    if (!selected) return all;

    return all.filter(
      (todo) =>
        new Date(todo.createdAt).toISOString().split('T')[0] === selected
    );
  });

  onCheckboxChange(event: MatCheckboxChange, todo: Task): void {
    const updatedTodo = { ...todo, completed: event.checked };
    this.taskStore.updateTask(updatedTodo);
  }

  onDelete(id: number): void {
    this.taskStore.deleteTask(id);
  }

  onEdit(todo: Task): void {
    this.editingTodoId = todo.id;
    this.editTitle = todo.title;
  }
  saveEdit(todo: Task): void {
    if (this.editTitle.trim()) {
      const updatedTodo = { ...todo, title: this.editTitle };
      this.taskStore.updateTask(updatedTodo);
    }
    this.editingTodoId = null;
    this.editTitle = '';
  }
}
