import { Task } from "./todo.store";

interface TaskStoreState {
  tasks: Task[];
}

export const initialState: TaskStoreState = {
  tasks: [
    {
      id: 0,
      title: 'First task',
      completed: false,
      createdAt: new Date(2024, 0, 15),
    },
    {
      id: 1,
      title: 'Second task',
      completed: true,
      createdAt: new Date(2024, 1, 20),
    },
    {
      id: 2,
      title: 'Grocery shopping',
      completed: false,
      createdAt: new Date(2024, 2, 10),
    },
    {
      id: 3,
      title: 'Pay bills',
      completed: false,
      createdAt: new Date(2024, 2, 15),
    },
    {
      id: 4,
      title: 'Book flight tickets',
      completed: true,
      createdAt: new Date(2024, 3, 1),
    },
    {
      id: 5,
      title: 'Meeting with client',
      completed: false,
      createdAt: new Date(2024, 3, 2),
    },
    {
      id: 6,
      title: 'Prepare report',
      completed: true,
      createdAt: new Date(2024, 3, 2),
    },
    {
      id: 7,
      title: 'Team stand-up',
      completed: false,
      createdAt: new Date(2024, 3, 3),
    },
    {
      id: 8,
      title: 'Design review',
      completed: true,
      createdAt: new Date(2024, 3, 4),
    },
    {
      id: 9,
      title: 'Write unit tests',
      completed: false,
      createdAt: new Date(2024, 3, 5),
    },
    {
      id: 10,
      title: 'Code refactor',
      completed: true,
      createdAt: new Date(2024, 3, 6),
    },
    {
      id: 11,
      title: 'Deploy to staging',
      completed: false,
      createdAt: new Date(2024, 3, 7),
    },
    {
      id: 12,
      title: 'Fix bugs',
      completed: true,
      createdAt: new Date(2024, 3, 8),
    },
    {
      id: 13,
      title: 'Performance review',
      completed: false,
      createdAt: new Date(2024, 3, 9),
    },
    {
      id: 14,
      title: 'Submit invoice',
      completed: true,
      createdAt: new Date(2024, 3, 10),
    },
    {
      id: 15,
      title: 'Team outing',
      completed: false,
      createdAt: new Date(2024, 3, 11),
    },
    {
      id: 16,
      title: 'Client feedback',
      completed: true,
      createdAt: new Date(2024, 3, 12),
    },
    {
      id: 17,
      title: 'Sprint planning',
      completed: false,
      createdAt: new Date(2024, 3, 13),
    },
    {
      id: 18,
      title: 'Database cleanup',
      completed: true,
      createdAt: new Date(2024, 3, 14),
    },
    {
      id: 19,
      title: 'Prepare slides',
      completed: false,
      createdAt: new Date(2024, 3, 15),
    },
    {
      id: 20,
      title: 'Bug fix A',
      completed: true,
      createdAt: new Date(2024, 3, 4),
    },
    {
      id: 21,
      title: 'Bug fix B',
      completed: true,
      createdAt: new Date(2024, 3, 4),
    },
    {
      id: 22,
      title: 'Bug fix C',
      completed: false,
      createdAt: new Date(2024, 3, 4),
    },
    {
      id: 23,
      title: 'Bug fix D',
      completed: false,
      createdAt: new Date(2024, 3, 4),
    },
  ],
};