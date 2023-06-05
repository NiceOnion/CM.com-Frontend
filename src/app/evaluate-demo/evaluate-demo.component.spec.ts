import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDemoComponent } from './evaluate-demo.component';

describe('EvaluateDemoComponent', () => {
  let component: EvaluateDemoComponent;
  let fixture: ComponentFixture<EvaluateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
