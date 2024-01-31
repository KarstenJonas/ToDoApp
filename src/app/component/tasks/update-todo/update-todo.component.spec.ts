import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTODOComponent } from './update-todo.component';

describe('UpdateTODOComponent', () => {
  let component: UpdateTODOComponent;
  let fixture: ComponentFixture<UpdateTODOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTODOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
