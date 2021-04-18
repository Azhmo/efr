import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNextSeasonComponent } from './calendar-next-season.component';

describe('CalendarNextSeasonComponent', () => {
  let component: CalendarNextSeasonComponent;
  let fixture: ComponentFixture<CalendarNextSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarNextSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarNextSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
