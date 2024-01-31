import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTODOComponent } from './read-todo.component';

describe('ReadTODOComponent', () => {
  let component: ReadTODOComponent;
  let fixture: ComponentFixture<ReadTODOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadTODOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
