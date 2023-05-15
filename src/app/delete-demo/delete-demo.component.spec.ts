import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDemoComponent } from './delete-demo.component';
import { RouterModule, Routes } from '@angular/router';


describe('DeletecomponentComponent', () => {
  let component: DeleteDemoComponent;
  let fixture: ComponentFixture<DeleteDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
