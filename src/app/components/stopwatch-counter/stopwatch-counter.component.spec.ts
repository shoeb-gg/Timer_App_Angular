import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchCounterComponent } from './stopwatch-counter.component';

describe('StopwatchCounterComponent', () => {
  let component: StopwatchCounterComponent;
  let fixture: ComponentFixture<StopwatchCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
