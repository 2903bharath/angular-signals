import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { Task, TaskStore } from '../../store/todo.store';

interface TodoFormControls {
  title: FormControl<string | null>;
  completed: FormControl<boolean | null>;
}
@Component({
  selector: 'app-todo-form',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss'
})
export class TodoForm {
  @Input() editingTask: Task | null = null;
  form!: FormGroup<TodoFormControls>;
  taskStore = inject(TaskStore);
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup<TodoFormControls>({
      title: new FormControl('', Validators.required),
      completed: new FormControl(false),
    });

    if (this.editingTask) {
      this.form.patchValue(this.editingTask);
    }
  }

  submit() {
    const value = this.form.value;
  
    if (this.editingTask) {
      this.taskStore.updateTask({
        ...this.editingTask,
        title: value.title ?? '',
        completed: value.completed ?? false,
      });
    } else {
      this.taskStore.addTask({
        title: value.title ?? '',
        completed: value.completed ?? false,
        createdAt: new Date(),
      });
    }
    this.form.reset();
  }

  get formControls(): TodoFormControls {
    return this.form.controls;
  }
}
