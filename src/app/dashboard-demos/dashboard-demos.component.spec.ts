import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDemosComponent } from './dashboard-demos.component';

describe('DashboardDemosComponentComponent', () => {
  let component: DashboardDemosComponent;
  let fixture: ComponentFixture<DashboardDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
