import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTODOComponent } from './delete-todo.component';

describe('DeleteTODOComponent', () => {
  let component: DeleteTODOComponent;
  let fixture: ComponentFixture<DeleteTODOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTODOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
