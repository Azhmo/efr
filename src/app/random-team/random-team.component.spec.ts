import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTeamComponent } from './random-team.component';

describe('RandomTeamComponent', () => {
  let component: RandomTeamComponent;
  let fixture: ComponentFixture<RandomTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
