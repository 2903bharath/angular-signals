import { Component, computed, inject } from '@angular/core';
import { TaskStore } from '../../store/todo.store';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-todo-chart',
  imports: [NgxChartsModule],
  templateUrl: './todo-chart.html',
  styleUrl: './todo-chart.scss'
})
export class TodoChart {
  private store = inject(TaskStore);
  legendPosition : LegendPosition = LegendPosition.Below
  readonly chartData = computed(() => {
    const tasks = this.store.tasks();
    const completed = tasks.filter(t => t.completed).length;
    const incomplete = tasks.length - completed;

    return [
      { name: 'Completed', value: completed },
      { name: 'Incomplete', value: incomplete }
    ];
  });

  readonly lineChartData = computed(() => {
    const tasks = this.store.tasks();
  
    const taskCountPerDate = new Map<string, { completed: number; incomplete: number }>();
  
    for (const task of tasks) {
      if (!task.createdAt) continue;
  
      const dateKey = new Date(task.createdAt).toISOString().split('T')[0];
  
      if (!taskCountPerDate.has(dateKey)) {
        taskCountPerDate.set(dateKey, { completed: 0, incomplete: 0 });
      }
  
      const entry = taskCountPerDate.get(dateKey)!;
  
      if (task.completed) {
        entry.completed += 1;
      } else {
        entry.incomplete += 1;
      }
    }
  
    const sortedDates = Array.from(taskCountPerDate.keys()).sort();
  
    return [
      {
        name: 'Completed',
        series: sortedDates.map(date => ({
          name: date,
          value: taskCountPerDate.get(date)!.completed
        }))
      },
      {
        name: 'Incomplete',
        series: sortedDates.map(date => ({
          name: date,
          value: taskCountPerDate.get(date)!.incomplete 
        }))
      }
    ];
  });
  

  view: [number, number] = [400, 300];
  showLegend = true;
  showLabels = true;

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#28a745', '#dc3545']
  };
}
