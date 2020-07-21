import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStandingsComponent } from './update-standings.component';

describe('UpdateStandingsComponent', () => {
  let component: UpdateStandingsComponent;
  let fixture: ComponentFixture<UpdateStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
