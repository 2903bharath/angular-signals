import {
  signalStore,
  withState,
  withMethods,
  withHooks,
  patchState,
} from '@ngrx/signals';
import { initialState } from './todo.data';

let idCounter = 24;
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export const TaskStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks({}),
  withMethods((store) => ({
    addTask(task: Omit<Task, 'id'>) {
      const newTask = { ...task, id: ++idCounter };
      patchState(store, {
        tasks: [...store.tasks(), newTask],
      });
    },

    updateTask(updated: Task) {
      patchState(store, {
        tasks: store.tasks().map((t) => (t.id === updated.id ? updated : t)),
      });
    },

    deleteTask(id: number) {
      patchState(store, {
        tasks: store.tasks().filter((t) => t.id !== id),
      });
    },
  }))
);
