import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChart } from './todo-chart';

describe('TodoChart', () => {
  let component: TodoChart;
  let fixture: ComponentFixture<TodoChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
