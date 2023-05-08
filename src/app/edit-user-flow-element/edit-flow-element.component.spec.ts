import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlowElementComponent } from './edit-flow-element.component';

describe('EditFlowElementComponent', () => {
  let component: EditFlowElementComponent;
  let fixture: ComponentFixture<EditFlowElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlowElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlowElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
